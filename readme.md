# random-geojson-stream

Readable stream that emits random GeoJSON features in a given interval. It only
supports `Point` at the moment.

Install with `npm install random-geojson-stream`.

## Usage

```js
var randomgeojson = require('random-geojson-stream')

randomgeojson({interval: 1000}).on('data', function (feature) {
  console.log(feature)
})
```

This will emit something like:
```
{ type: 'Feature',
  geometry:
   { type: 'Point',
     coordinates: [ -37.10202709771693, -2.666051471605897, 0 ] },
  properties: {} }
{ type: 'Feature',
  geometry:
   { type: 'Point',
     coordinates: [ 33.15135085489601, 48.64330368116498, 0 ] },
  properties: {} }
{ type: 'Feature',
  geometry:
   { type: 'Point',
     coordinates: [ -79.07084982376546, 50.878272615373135, 0 ] },
  properties: {} }
```

The default interval is `500`.