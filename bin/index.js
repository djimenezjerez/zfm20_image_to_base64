#!/usr/bin/env node

const base64Img = require('base64-img');
const fs = require('fs');
const img2Base64 = require('../src');

let args = process.argv.slice(2);
let input;
let output = {};

new Promise((resolve, reject) => {
  if (args.length == 1) {
    input = args[0];
    output = {
      path: './',
      filename: 'finger'
    }
    return resolve(null);
  } else if (args.length == 2) {
    input = args[0];
    output.filename = args[1].split('/').slice(-1).pop();
    output.path = args[1].split('/').slice(0, -1).join('/');
    if (output.path == '') {
      output.path = './';
    };
    return resolve(null);
  } else {
    return reject('Usage: zfm20-image-convert [infile] [outfile]');
  };
}).then(() => {
  return new Promise((resolve, reject) => {
    return fs.readFile(input, "UTF8", (err, data) => {
      if (err) {
        return reject(err);
      } else {
        resolve(data);
      };
    });
  })
}).then((fingerprint) => {
  return img2Base64.convert(fingerprint);
}).then((base64) => {
  return new Promise((resolve, reject) => {
    return base64Img.img(`data:image/png;base64,${base64}`, output.path, output.filename, (err, filepath) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(filepath)
      };
    });
  });
}).then((data) => {
  console.log(`Image generated: ${data}`);
}).catch((error) => {
  console.error(error);
});
