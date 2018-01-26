# find-lat-lng-cli [![Build Status](https://travis-ci.org/motleyagency/find-lat-lng-cli.svg?branch=master)](https://travis-ci.org/motleyagency/find-lat-lng-cli)

> Find latitudes and longitudes for an array of addresses

Finds latitudes and longitudes for an array of addresses via [Google Maps GeoCoding API](https://developers.google.com/maps/documentation/geocoding/intro#geocoding)

## Install

```
$ npm install --global find-lat-lng-cli
```

## Usage

```
$ find-lat-lng --help

  Usage
    $ find-lan-lng input [output]

    Options
      --debug, -d  Add debug information

  Example
    $ find-lan-lng input.json
    [
      { address: 'Lonnrotinkatu 5', lat: 60.166924, lng: 24.939788},
      { address: 'Lonnrotinkatu 4', lat: 60.167142, lng: 24.940959},
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

If output file was provided, it will contain an array of objects with

### Options

##### `-d`, `--verbose`

Verbose output to see errors if you need to troubleshoot.

## License

MIT © Pete Nykänen
