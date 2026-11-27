const assert = require("node:assert/strict");
const test = require("node:test");
const {
  validateQuizQuestions,
  validateWorksheet,
  retryInstruction,
} = require("../quality-loop.js");

test("accepts a complete worksheet", () => {
  const text = `MATHS WORKSHEET
Topic: Fractions
1. What is one half of 8?
2. What is one quarter of 12?
ANSWER SHEET
1. 4
2. 3
TIPS FOR PARENTS
- Use objects to demonstrate fractions.`;
  assert.equal(validateWorksheet(text, {expectedCount: 2, topic: "Fractions"}).ok, true);
});

test("rejects missing, duplicate, and incomplete worksheet content", () => {
  const text = `Topic: Fractions
1. What is one half of 8?
2. What is one half of 8?
ANSWER SHEET
1. 4`;
  const result = validateWorksheet(text, {expectedCount: 2, topic: "Fractions"});
  assert.equal(result.ok, false);
  assert.match(result.errors.join(" "), /TIPS FOR PARENTS/);
  assert.match(result.errors.join(" "), /2 numbered answers/);
  assert.match(result.errors.join(" "), /duplicate/i);
});

test("accepts structurally valid quiz questions", () => {
  const questions = [{
    question: "What is 2 + 2?",
    type: "mcq",
    options: ["3", "4", "5", "6"],
    correct: 1,
    explanation: "Two plus two equals four.",
    hint: "Count two more after two.",
  }];
  assert.equal(validateQuizQuestions(questions, {expectedCount: 1}).ok, true);
});

test("rejects malformed quiz questions", () => {
  const result = validateQuizQuestions([{
    question: "What is 2 + 2?",
    options: ["4", "4"],
    correct: 9,
  }], {expectedCount: 1});
  assert.equal(result.ok, false);
  assert.match(result.errors.join(" "), /four options/);
  assert.match(result.errors.join(" "), /0 to 3/);
  assert.match(result.errors.join(" "), /explanation/);
});

test("turns validation errors into focused retry feedback", () => {
  const message = retryInstruction(["Return exactly 10 questions."]);
  assert.match(message, /quality checks/);
  assert.match(message, /Return exactly 10 questions/);
});
