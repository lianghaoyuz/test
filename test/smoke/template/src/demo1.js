const imgurl = require('./test.png');

const di = window.document.getElementsByTagName('div')[0];
const img = window.document.createElement('img');

img.src = imgurl;
di.appendChild(img);
