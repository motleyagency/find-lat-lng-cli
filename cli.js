#!/usr/bin/env node
require('dotenv').config(); // eslint-disable-line global-require
const findLatLng = require('find-lat-lng');
const meow = require('meow');
const { promisify } = require('util');
const fs = require('fs');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const options = {
  boolean: ['debug'],
  alias: {
    d: 'debug',
  },
};

const cli = meow(
  `
	Usage
	  $ find-lan-lng input [output]

    Options
      --debug  Add debug information

	Example
	  $ find-lan-lng input.json
    [
      { address: 'Lonnrotinkatu 4', lat: 60.167142, lng: 24.940959},
      { address: 'Lonnrotinkatu 5', lat: 60.166924, lng: 24.939788},
      ...
    ]
`,
  options,
);

if (cli.input.length === 0) {
  console.error('Please specify an input file'); // eslint-disable-line
  process.exit(1);
}

const [input, output] = cli.input;
const { GOOGLE_MAPS_API_KEY } = process.env;

try {
  if (!GOOGLE_MAPS_API_KEY) {
    // eslint-disable-next-line no-console
    console.error(
      'ERROR: You must provide a Google Maps Api Key as GOOGLE_MAPS_API_KEY environment variable',
    );

    process.exit(1);
  }

  (async () => {
    const text = await readFileAsync(input, { encoding: 'utf8' });
    const json = JSON.parse(text);
    const outText = await findLatLng(GOOGLE_MAPS_API_KEY, {
      debug: cli.flags.debug,
    })(json);

    if (output) {
      await writeFileAsync(output, JSON.stringify(outText, null, '\t'), {
        encoding: 'utf8',
      });

      console.log(`Wrote output to ${output}`); // eslint-disable-line
      return process.exit(0);
    }

    process.stdout.write(JSON.stringify(outText, null, '\t'));
    return process.exit(0);
  })();
} catch (err) {
  process.stderr.write(err.message || err);
  process.exit(1);
}
