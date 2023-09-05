
// file based(core ) , window (local ) , third-party

// file based

// let a = {
//     average: (a,b) => {
//         console.log((a+b)/2);
//     },
//     percent: (a,b) =>{
//         console.log(a/b*100);
//     }
// };

// module.exports = a;


// build in

//  async
const fs = require('fs')

// fs.readFile('./sample.txt', 'utf-8', (err, data)=>{

//     if(err){
//         throw err;
//     }
//     console.log(data);
// })

// console.log('I am first');

// sync

// const a = fs.readFileSync('./sample.txt','utf-8');

// console.log(sync);
// console.log("I am First");
// console.log(sync);


// async write

// const a = fs.writeFileSync('./sample.txt',"I am Hitesh")


// sync write

// fs.writeFile('./sample.txt','ElectraOptima is an Website',(e)=>{
//     if(e){
//         throw e;
//     }
//     console.log('File has been written successfully');
// })