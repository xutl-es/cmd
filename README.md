# @xutl/cmd

One [eXtremely Useful Tool Library](https://xutl.es) to facilitate writing CLI scripts with sub-command.

## Install

```sh
npm install --save @xutl/cmd
```

## Usage

```javascript
import program from '@xutl/cmd';

program(
	{
		one: (args) => console.log(`this is the "one" program.\nIt received "${args.join(' ')}" as arguments`),
		two: (args) => console.log(`this is the "two" program.\nIt received "${args.join(' ')}" as arguments`),
		three: (args) => console.log(`this is the "three" program.\nIt received "${args.join(' ')}" as arguments`),
	},
	async (args) => {
		console.log(`this is the default program.\nIt received "${args.join(' ')}" as arguments`);
	},
);
```

## License

Copyright 2021 xutl.es

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
