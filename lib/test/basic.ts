import { describe, it, beforeEach } from '@xutl/test';
import assert from 'assert';

import execute from '../cmd';

describe('basic', () => {
	let command: string | undefined | null = undefined;
	let argv: string[] = [];
	const commands = {
		one: runner.bind(null, 'one'),
		two: runner.bind(null, 'two'),
		three: runner.bind(null, 'three'),
	};
	const deflt = runner.bind(null, null);
	beforeEach(() => {
		command = undefined;
		argv = [];
	});
	it('execute(default)', async () => {
		const args: string[] = [];
		process.argv = [...process.argv.slice(0, 2), ...args];
		const code = await execute(commands, deflt);
		assert.strictEqual(code, 0);
		assert.strictEqual(command, null);
		assert.deepStrictEqual(argv, args);
	});
	it('execute(one)', async () => {
		const args = ['a', 'b', 'c'];
		process.argv = [...process.argv.slice(0, 2), 'one', ...args];
		const code = await execute(commands, deflt);
		assert.strictEqual(code, 0);
		assert.strictEqual(command, 'one');
		assert.deepStrictEqual(argv, args);
	});
	it('execute(two)', async () => {
		const args = ['a', 'b', 'c'];
		process.argv = [...process.argv.slice(0, 2), 'two', ...args];
		const code = await execute(commands, deflt);
		assert.strictEqual(code, 0);
		assert.strictEqual(command, 'two');
		assert.deepStrictEqual(argv, args);
	});
	it('execute(three)', async () => {
		const args = ['a', 'b', 'c'];
		process.argv = [...process.argv.slice(0, 2), 'three', ...args];
		const code = await execute(commands, deflt);
		assert.strictEqual(code, 0);
		assert.strictEqual(command, 'three');
		assert.deepStrictEqual(argv, args);
	});
	it('execute(default)', async () => {
		const args = ['a', 'b', 'c'];
		process.argv = [...process.argv.slice(0, 2), '-h', 'one', ...args];
		const code = await execute(commands, deflt);
		assert.strictEqual(code, 0);
		assert.strictEqual(command, null);
		assert.deepStrictEqual(argv, ['-h', 'one', ...args]);
	});
	function runner(cmd: string | null, args: string[]) {
		argv = args;
		command = cmd;
		return 0;
	}
});
