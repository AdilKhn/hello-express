var fs = require('fs');
var request = require('request');
var gm =  require('gm').subClass({imageMagick: true});


// resize and remove EXIF profile data
gm(request('http://img.huffingtonpost.com/asset/scalefit_720_noupscale/58502649120000dd00eef0b7.jpeg?cache=1ckvofpofb'))
  .resize(300,300)
  .noProfile()
  .write('/tmp/small.jpg', function (err) {
    if (err) {
      console.log('Something went wrong!' + err);
    }else{
      console.log('Done!');
    }
   
  });

console.log('Should be done soon..');
