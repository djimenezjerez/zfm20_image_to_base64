# Adafruit's biometric fingerprint image to base64

To install

```
npm i --save zfm20image2base64
```

To test

```
npm test
```

## Usage

Require the library in your .js file:

```
const img2Base64 = require('zfm20image2base64');
```

Use the .convert method with the output of the image captured by the Adafruit's ZFM-20 sensor:

```
img2Base64.convert(fingerprint).then((image) => {
  console.log(`Base64 image: ${image}`);
}).catch((error) => {
  console.error(error);
});
```

As standalone PNG generator:

```
./zfm20ImageConverter [infile] [outfile]
```

## License

Anyone can contribute and use it.

## Issues

Report a bug in the [issues](https://github.com/djimenezjerez/zfm20_image_to_base64/issues).