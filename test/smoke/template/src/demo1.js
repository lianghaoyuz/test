var imgurl = require('./test.png')
let di = window.document.getElementsByTagName('div')[0];
let img = window.document.createElement('img');

img.src = imgurl
di.appendChild(img)