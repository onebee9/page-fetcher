const fs = require('fs');
const request = require ('request');
const {argv} = require('process');
  
// URL of the image
const url = argv[2];
const path = argv[3]

request(url, (err, res, body)=> {
  if(err){
  console.log(err); 
  } 
  
  else if (res && res.statusCode === 200) {
    if(body){
      fs.writeFile(path,body,(error)=>{
        if(error){
          console.log(error);
        } else {
          const stats = fs.statSync(path).size;
          console.log(`Downloaded and saved ${stats} to ${path}`); 
        }
      });
    } 
  } else if(res && res.statusCode){
    console.log(`request failed : ${res.statusCode}`)
  }
  
});
