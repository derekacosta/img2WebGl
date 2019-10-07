const sharp = require('sharp');
let image = 'test.png'
// 
sharp(image)
    .sharpen(5, 1, 5)
    .toFile('output.png')
    .then(data => {
    // 100 pixels wide, auto-scaled height
  });

// var detectObject = require("object-detection");
// 
// var fs = require('fs');
//Tweak the Sensitivity and the Tolerance for optimal result
// 
// var config = {
  // imageName: "test2.jpg", // preferrably in JPG format and less than 100 kB
    // sensitivity: 90, // ranges from 1 to 100
  // tolerance: 50 // ranges from 1 to 100
// };
// 
// detectObject(config).then(function(response) {
  // var base64Img = response.base64Img;
// 
//  use base64Img in html image tag ...
//  imageElement.setAttribute("src", "data:image/jpeg;base64," + base64Img);
// 
// save base64Img as image file ...
  // fs.writeFile("output.png", base64Img, { encoding: "base64" }, function() {
    // console.log("Saved object image");
  // });s
// });
