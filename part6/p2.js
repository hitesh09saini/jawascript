const arr = [2,5,7,1,9,2];

// arr.map(function(ele,inx){

//     console.log(ele,inx);
// });

// 

const heros = ['neeraj','doga','dhruva','maniraj']
// filter
const hera= heros.filter((h)=>{
   return h.endsWith('raj')
})

// console.log(hera);

// shopping cards

const cartBill = [20,30,50]

const sumOfCardBill = cartBill.reduce((p,c)=>p+c,0);

// console.log(sumOfCardBill);

const gainScore = [200,300,310,250,150];

const gameScoreCheck = gainScore.every((v)=> typeof v === 'number')

// console.log(gameScoreCheck);

const above200 = gainScore.find((s)=> s>200)
// console.log(above200);

