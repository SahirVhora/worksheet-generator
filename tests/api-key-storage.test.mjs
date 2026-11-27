import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('..', import.meta.url);
const appFiles = ['index.html', 'quiz.html'];

test('Anthropic API keys are session-only and never stored in localStorage', async () => {
  for (const file of appFiles) {
    const source = await readFile(new URL(file, root), 'utf8');
    assert.doesNotMatch(
      source,
      /localStorage\.(?:getItem|setItem)\(["']ws-api-key["']\)/,
      `${file} must not persist the API key in localStorage`,
    );
    assert.match(
      source,
      /sessionStorage\.(?:getItem|setItem|removeItem)\(["']ws-api-key["']\)/,
      `${file} must use sessionStorage for the API key`,
    );
  }
});
