import { resolve, basename } from 'path';

export interface Command {
	(argv: string[]): Promise<void | number> | void | number;
}
export interface Commands {
	[cmd: string]: Command;
}

const DEFAULT = Symbol('default');

export default async function execute(commands: Commands, deflt: Command | undefined = commands['']) {
	let code = 0;
	try {
		const args = [...process.argv];
		if (args[0] && (resolve(args[0]) === resolve(process.argv0) || basename(args[0]) === 'node')) args.shift();
		if (args[0] && require.main && resolve(args[0]) === resolve(require.main.filename)) args.shift();
		const cmd = args.length && (args[0] as string)[0] !== '-' ? args.shift() : DEFAULT;
		const exe = cmd === DEFAULT ? deflt : commands[cmd as string];
		if ('function' !== typeof exe) throw Object.assign(new RangeError(`invalid command ${String(cmd)}`), { code: 127 });
		code = (await exe(args)) || 0;
	} catch (ex) {
		code = ex.code || 1;
		console.error(ex.message);
	} finally {
		return code;
	}
}
