function powCub(p,n){
   return p(n)*n;
}


const poew = (n)=>{
    return n**2;
}

// console.log(powCub(poew,3));

function sayHe(){
    return ()=>{
        console.log('hello hitesh');
    }
}

let guessValue = sayHe()

// guessValue()


const higherOrder = n =>{
    const onefun = m =>{
        const twofun =p =>{
          return m+n+p;
        }
        return twofun;
    }
    return onefun;
}


// console.log(higherOrder(2)(3)(4));



const myNums = [2,3,4,5]

const sumArr = arr =>{
    let total =0;
    arr.forEach(element => {
        total+=element;
    });
    return total;
}


// console.log(sumArr(myNums));
function oneMore(){
    console.log('hello');
}

// setInterval(oneMore,1000);
setTimeout(oneMore,1000);
