var Readable = require('stream').Readable

module.exports = function (opts) {
  var stream = new Readable({objectMode: true})
  opts = opts || {}
  var interval = opts.interval || 500
  var running = false
  
  stream._read = function () {
    if(!running) emit()
  }
  
  function emit() {
    running = true
    if(stream.push(randomFeature()))
      setTimeout(emit, interval)
    else
      running = false
  }
  return stream
}

function randomFeature() {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [rnd() * 180, rnd() * 360, 0]
    },
    properties: {}
  }
}

function rnd() { return Math.random() - 0.5; }