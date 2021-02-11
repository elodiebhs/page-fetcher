// help from instructor
// check https://nodejs.dev/learn/the-nodejs-fs-module

const request = require('request'); //this stays on line 1, bringin request package
const fs = require('fs'); //bringing the fs package

const url = process.argv[2];

const localPath = process.argv[3];

const fetcher1 = function(url, localPath){
  //take a URL as a command-line argument as well as a local file path
  
  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

   if (error){
     console.log("failed to dowload", error)
     return 
   } 
   fs.writeFile(localPath, body, (error) => {

    //fs.writeFile(): write data to a file
    
     console.log("downloaded to ", localPath)
   })
  })
}
  
if (!url || !localPath){
   console.log("incorrect input")
  } else {fetcher1(url, localPath)};





