// const _=require('lodash');   //here we importing lodash package

// let array=[100,"Ram","Mahesh",200,400,"Suresh",500];    //My array

// //create a func whih return count the numbers and strings

// let countData=(array)=>{

//     let numberCount=0;
//     let stringCount=0;

//     _.forEach(array,(value)=>{
//         (_.isNumber(value)) ? numberCount++ : numberCount;
//         (_.isString(value)) ? stringCount++ : stringCount;

//     });
//     return{numberCount, stringCount}
// }

// console.log(countData(array))   //here we calling function and passing an array



// //now we deep comparing two object same or not inbuilt method

// let obj1={"person":"mahesh", "age":25}
// let obj2={"age":25, "person":"mahesh"}

// let res= _.isEqual(obj1,obj2);
// console.log(res);



// //
// let users=[
//     {
//         'user':"John",
//         'age' : 60
//     },

//     {
//         'user': "Soham",
//         'age' : 90
//     },

//     {
//         'user': "mahesh",
//         'age' : 24
//     },

//     {
//         'user': "Ramesh",
//         'age' : 23
//     }

// ]
// //console.log(_.sortBy(users,[function(o){return o.user;}]))
// console.log(_.sortBy(users,['user','age']));


//phoneno project 
const res = require('./data/ponenum');  //importing files here 

//set interval function to call the data after 1000
setInterval(res.phonenum,1000)