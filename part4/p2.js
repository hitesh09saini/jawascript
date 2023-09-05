// Object Literal

// let emp = {

//     id : 10,
//     name :'Hitesh',
//     salary: 50000
// };




// console.log(emp);

// const emp = new Object();
// emp.name ="hitesh";
// emp.id =2;
// emp.salary =50000;
// console.log(emp);

// function emp(id,name ,salary){

//     this.id = id;
//     this.name = name;
//     this.salary = salary;
// }

// const emp1 = new emp(40,"jit",40000)
// const emp2 = new emp(31,"hit",40000)

// console.log(emp1);


let employ = {id:40, name:"hitesh",salary:4000};
employ.id=50;
console.log(employ);

// iterating

for(const key in employ){
    console.log(key,employ[key]);
}

