(function(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.WorksheetQuality = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function() {
  "use strict";

  function normalise(text) {
    return String(text || "").trim().toLowerCase().replace(/\s+/g, " ");
  }

  function numberedItems(section) {
    return String(section || "")
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(line => /^\d+[.)]\s+/.test(line));
  }

  function duplicates(values) {
    const seen = new Set();
    const repeated = new Set();
    values.forEach(value => {
      const key = normalise(value).replace(/^\d+[.)]\s+/, "");
      if (!key) return;
      if (seen.has(key)) repeated.add(key);
      seen.add(key);
    });
    return [...repeated];
  }

  function validateWorksheet(text, options) {
    const expectedCount = Number(options.expectedCount);
    const topic = normalise(options.topic);
    const errors = [];
    const source = String(text || "").trim();
    const upper = source.toUpperCase();
    const answerIndex = upper.indexOf("ANSWER SHEET");
    const tipsIndex = upper.indexOf("TIPS FOR PARENTS");

    if (!source) errors.push("The response was empty.");
    if (answerIndex < 0) errors.push("Include an ANSWER SHEET section.");
    if (tipsIndex < 0) errors.push("Include a TIPS FOR PARENTS section.");
    if (topic && !normalise(source).includes(topic)) {
      errors.push(`Keep the worksheet explicitly focused on the topic "${options.topic}".`);
    }

    const questionSection = answerIndex >= 0 ? source.slice(0, answerIndex) : source;
    const answerSection = answerIndex >= 0
      ? source.slice(answerIndex, tipsIndex >= 0 ? tipsIndex : undefined)
      : "";
    const questions = numberedItems(questionSection);
    const answers = numberedItems(answerSection);

    if (questions.length !== expectedCount) {
      errors.push(`Return exactly ${expectedCount} numbered questions; found ${questions.length}.`);
    }
    if (answers.length !== expectedCount) {
      errors.push(`Return exactly ${expectedCount} numbered answers; found ${answers.length}.`);
    }
    if (duplicates(questions).length) {
      errors.push("Remove duplicate or repeated questions.");
    }

    return {ok: errors.length === 0, errors, questionCount: questions.length, answerCount: answers.length};
  }

  function validateQuizQuestions(questions, options) {
    const expectedCount = Number(options.expectedCount);
    const errors = [];

    if (!Array.isArray(questions)) {
      return {ok: false, errors: ["Return a JSON array of quiz questions."]};
    }
    if (questions.length !== expectedCount) {
      errors.push(`Return exactly ${expectedCount} questions; found ${questions.length}.`);
    }

    questions.forEach((question, index) => {
      const label = `Question ${index + 1}`;
      if (!question || typeof question !== "object") {
        errors.push(`${label} must be an object.`);
        return;
      }
      if (!normalise(question.question)) errors.push(`${label} needs question text.`);
      if (!Array.isArray(question.options) || question.options.length !== 4) {
        errors.push(`${label} must have exactly four options.`);
      } else {
        const optionKeys = question.options.map(normalise);
        if (optionKeys.some(value => !value)) errors.push(`${label} has an empty option.`);
        if (new Set(optionKeys).size !== optionKeys.length) errors.push(`${label} has duplicate options.`);
      }
      if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) {
        errors.push(`${label} needs a correct answer index from 0 to 3.`);
      }
      if (!normalise(question.explanation)) errors.push(`${label} needs an explanation.`);
      if (!normalise(question.hint)) errors.push(`${label} needs a hint.`);
    });

    const questionTexts = questions
      .filter(question => question && typeof question === "object")
      .map(question => question.question);
    if (duplicates(questionTexts).length) errors.push("Remove duplicate quiz questions.");

    return {ok: errors.length === 0, errors};
  }

  function retryInstruction(errors) {
    return [
      "Your previous response failed the quality checks below:",
      ...errors.map(error => `- ${error}`),
      "Regenerate the complete response from scratch. Follow the original format exactly.",
    ].join("\n");
  }

  return {validateWorksheet, validateQuizQuestions, retryInstruction};
});
