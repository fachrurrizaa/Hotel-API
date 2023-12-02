// config/imagekit.js
const ImageKit = require('imagekit');

const imagekit = new ImageKit({
  publicKey: 'public_GGYH4Amg9aNocSFgTtFHXlsxe1o=',
  privateKey: 'private_rlc/NwiAh0J0qgEvr4r1DMJM6dc=',
  urlEndpoint: 'https://ik.imagekit.io/v6bjr4s0b/',
});

module.exports = imagekit;