const PNG = require('pngjs').PNG;

let convert = (data) => {
  return new Promise((resolve, reject) => {
    if (data.length != 73728) {
      return reject('Image data must be 36864 bytes');
    } else {
      let png = new PNG({
        width: 256,
        height: 288,
        filterType: -1,
      });
      png.data = new Buffer(data.toString().replace(/(.{1})/g, "$10$10$10ff"), 'hex');
      return resolve(PNG.sync.write(png).toString('base64'));
    }
  })
}

module.exports.convert = convert;