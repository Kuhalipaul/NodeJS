const fs= require('fs');

//Synchronous call
// fs.writeFileSync('./test.txt','Heyhere');

//Aysnc
// fs.writeFile("./test.txt","Hello World Async", (err)=>{});

// const result=fs.readFileSync('./contacts.txt',"utf-8")
// console.log(result)

//append
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//      console.log(result);
//     }
// });


// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt",`${Date.now()}Hey There\n`);

// fs.cpSync("./test.txt","./copy.txt");
console.log(fs.statSync("./test.txt").isFile());
fs.mkdirSync('my-docs')