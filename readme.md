# random-geojson-stream

Readable stream that emits random GeoJSON features in a given interval.

Install with `npm install random-geojson-stream`.

## Usage

```js
var randomgeojson = require('random-geojson-stream')

randomgeojson({interval: 1000}).on('data', function (feature) {
  console.log(feature)
})
```

The default interval is `500`.