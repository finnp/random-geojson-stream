var randomgeojson = require('./')

randomgeojson({interval: 1000}).on('data', function (feature) {
  console.log(feature)
})