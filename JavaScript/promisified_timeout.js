const fs = require('node:fs');
const { exit } = require('node:process');
// // function setTimeoutPromisified(ms)
// // {
// //     return new Promise(resolve => setTimeout(resolve,ms));
// // }

// // function greetUser()
// // {
// //     console.log("Hello, Anudeep!");
// // }

// // // setTimeoutPromisified(3000).then(greetUser);




// // // function step1()
// // // {
// // //     console.log("Hi");
// // // }

// // // function step2()
// // // {
// // //     console.log("Hello");
// // // }

// // // function step3()
// // // {
// // //     console.log("Hello there!");
// // // }

// // // setTimeoutPromisified(1000)
// // //     .then(step1)
// // //     .then(()=> setTimeoutPromisified(3000))
// // //     .then(step2)
// // //     .then(() => setTimeoutPromisified(5000))
// // //     .then(step3);




// // async function solve()
// // {
// //     await setTimeoutPromisified(1000);
// //     console.log("Hi");
// //     await setTimeoutPromisified(3000);
// //     console.log("Hello");
// //     await setTimeoutPromisified(5000);
// //     console.log("Hello there!");
// // }

// // solve();


// // async function readfile()
// // {
// //     try
// //     {
// //         const content = await fs.readFile("file.txt","utf-8");
// //         const newval  = content.trimStart().trimEnd();
// //         console.log(newval);
        
// //     }
// //     catch(err)
// //     {
// //         console.log(err);
// //     }
// // }

// // readfile();




// function readFilePromisified(path) {
//     return new Promise(function(resolve, reject) {

//         fs.readFile(path, "utf-8", function(err, data) {

//             if (err) {
//                 reject(err);
//             } 
//             else {
//                 resolve(data);
//             }

//         });

//     });
// }

// function onDone(data) {
//     console.log(data);
// }

// function onErr(err) {
//     console.log(err);
// }

// readFilePromisified("file.txt")
//     .then(onDone)
//     .catch(onErr);



//     //Done with both the assignments too... 


// const pizza1 = new Promise((resolve,reject) => {
//     reject("Pizza's ready!");
// });

// pizza1.then((result) => console.log(result));


// const pizza = new Promise((resolve,reject) => {
//     reject("Out of toppings!");
// });

// pizza.catch((result) => console.log(result));


// async function findUser()
// {
//     console.log("Searching for user...");
//     const result = await new Promise((resolve,reject) => {
//         setTimeout( ()=> {
//         exists = true;
//         if(exists) resolve("Exists");
//         else reject("Doesn't exist");

//     },5000)
//     });
//     return result;
// }

// const res = findUser();
// res.then((result) => console.log(result))
//     .catch((error) => console.log(error));


// async function check(num)
// {
//     console.log("Checking...");
//     return await new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         if(num >= 0) resolve("Positive number!");
//         else reject("Negative number!");
//         },2000);
//     });
// }

// async function login(username,password)
// {
//     console.log("Processing details...");
//     return await new Promise((resolve,reject) => {
//          setTimeout(() => {
//         if(username == "admin" && password == 1234)
//             resolve("Welcome, Admin!");
//         else reject("Incorrect username or password!");
//         },5000);
//     });
// }


// const result = check(-1);
// result.then((value)=> console.log(value))
//     .catch((err) => console.log(err));

// const session = login("admin",1234);
// session.then((value) => console.log(value))
//         .catch((err) => console.log(err));



// function readfile(path)
// {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             fs.readFile(path,"utf-8",(err,value) => {
//                 resolve(value);
//             });
//         },5000)
//     });
// }


// async function main()
// {
//     const data = await readfile("file.txt");
//     console.log(data);
// }

// main();


