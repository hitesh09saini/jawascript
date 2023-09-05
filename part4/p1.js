var emp ={
    name: "hitesh",
    age:30,
    salary:50000
}

// let key = Object.keys(emp).forEach((key)=>console.log(key))

// console.log(key);
// console.log(Object.values(emp));

// console.log(Object.entries(emp));


// const arr= Object.entries(emp)

// console.log(arr);

// let obj = Object.fromEntries(arr);


// console.log(obj);


// const newObj = Object.assign({},emp);

// console.log(newObj);


// Object.freeze(emp);

// emp.name = "peter";

// console.log(emp);


// console.log(Object.isFrozen(emp));
// Object.seal(emp)

// emp.name = "Jyoti"
// emp.id =1;
// console.log(emp);

// console.log(Object.isSealed(emp));

// let user1 = {name: "Alex"};

// let user2 = Object.create(user1);
// user2.id =4;
// console.log(user1);
// console.log(user2);

// console.log(user2.name);

console.log(Object.hasOwn(emp,'hitesh'));

// console.log(Object.getOwnPropertyNames(emp));/