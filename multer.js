// var docxConverter = require('docx-pdf');
const path=require('path');
const fs=require('fs');
const inputFilePath=path.join(__dirname,'/uploads/')
const inputFile=fs.readFileSync(inputFilePath);
console.log(inputFile)

// docxConverter('./input.docx','./output.pdf',function(err,result){
//   if(err){
//     console.log(err);
//   }
//   console.log('result'+result);
// });