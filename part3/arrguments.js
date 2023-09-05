//  function argu(){
//     // console.log(arguments);
//     const a = Array.from(arguments);
//     // console.log(a);
//     let sum = a.reduce(function(acc,curr){
//         return acc+curr;
//     },0);
//     return sum;
//  }


//  console.log(argu(1,23,3,4,5,6));
//  argu(1,2,3);


function array(...n){
    console.log(n);

    let sum = n.reduce(function(acc ,curr){
        return acc+curr;
    },0);
     return sum;
}


console.log(array(1,2,3,4,56,6,77,545,7,37,3)+  );;