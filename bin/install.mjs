#!/usr/bin/env node
// Copies the changekit skill into the repository you run this in.
// No dependencies, no network, no config: the skill configures itself
// on its first run.

import { cpSync, existsSync, readFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { version } = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
const source = join(root, 'skill');
const target = resolve(process.cwd(), '.claude', 'skills', 'changekit');
const force = process.argv.includes('--force') || process.argv.includes('-f');

const say = (m) => process.stdout.write(m + '\n');

if (!existsSync(source)) {
  say(`changekit: cannot find the skill at ${source}`);
  process.exit(1);
}

if (existsSync(target) && !force) {
  say(`changekit is already installed at .claude/skills/changekit`);
  say(``);
  say(`  Update it with --force. Your CHANGEKIT.md is never touched,`);
  say(`  because it lives outside the skill directory.`);
  process.exit(1);
}

mkdirSync(dirname(target), { recursive: true });
cpSync(source, target, { recursive: true });

say(`changekit ${version} installed at .claude/skills/changekit`);
say(``);
if (!existsSync(resolve(process.cwd(), '.git'))) {
  say(`  This is not a git repository. changekit expects to be committed`);
  say(`  alongside the project it governs.`);
  say(``);
}
say(existsSync(resolve(process.cwd(), 'CHANGEKIT.md'))
  ? `  Configuration already present. Run /changekit in Claude Code.`
  : `  Now open Claude Code here and run /changekit. It reads the repository,`);
if (!existsSync(resolve(process.cwd(), 'CHANGEKIT.md'))) {
  say(`  proposes a configuration and writes CHANGEKIT.md. That file`);
  say(`  is yours; everything under the skill directory is replaced on update.`);
}
