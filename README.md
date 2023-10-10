# find-lat-lng-cli [![Build Status](https://travis-ci.org/motleyagency/find-lat-lng-cli.svg?branch=master)](https://travis-ci.org/motleyagency/find-lat-lng-cli)

> Find latitudes and longitudes for an array of addresses

Finds latitudes and longitudes for an array of addresses via [Google Maps GeoCoding API](https://developers.google.com/maps/documentation/geocoding/intro#geocoding)

## Install

```
$ npm install --global find-lat-lng-cli
```

## Usage

You'll need a [Google Maps API-key](https://developers.google.com/maps/documentation/javascript/get-api-key) as an environment variable `GOOGLE_MAPS_API_KEY`

```
$ export GOOGLE_MAPS_API_KEY={YOUR_API_KEY} 
 
# then

$ find-lat-lng --help

  Usage
    $ find-lat-lng input [output]

    Options
      --debug, -d  Add debug information

  Example
    $ find-lan-lng-cli input.json
    [
      { address: 'Lonnrotinkatu 5, Helsinki', lat: 60.166924, lng: 24.939788},
      { address: 'Lonnrotinkatu 4, Helsinki', lat: 60.167142, lng: 24.940959},
      ...
    ]
```

Your input file should be a list of addresses:

```json
[
  "Lonnrotinkatu 4, Helsinki",
  "Lonnrotinkatu 5, Helsinki",
]
```

If output file was provided, the script will output the data to the file instead of `STDOUT`.

## Usage with `npx`

You can also use `npx`:

```
$ npx cross-env GOOGLE_MAPS_API_KEY={YOUR_API_KEY} npx find-lat-lng-cli input.json output.json
```

### Options

##### `-d`, `--verbose`

Verbose output to see errors if you need to troubleshoot.

### Related

- [find-lat-lng](https://github.com/motleyagency/find-lat-lng) - API for this module

## License

MIT © Pete Nykänen
