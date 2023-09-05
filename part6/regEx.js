let pattern  = 'pw';

let regExOne = new RegExp(pattern);

let flag ='gi'
let regExTwo = new RegExp(pattern,flag);

let regExThree = /pw/gi

const str = 'pw is groing at a rapid speed and recently they are working on pwskills to create to create skills based pwcontent'

// const re = regExThree.test(str);

// console.log(re);

// const r = str.match(regExThree);

// console.log(r);

const one = str.replace(regExThree,'p-w');

// console.log(one);



const webUrl = "https://pwskills.com/hitesh%20choudhary"
// const useable = webUrl.replace(/%30/,'-')
const useable = webUrl.replace(/%\d\d/,'-')

console.log(useable);