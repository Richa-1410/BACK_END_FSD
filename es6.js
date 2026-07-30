//function es 6 basic
//parameter function


function hello(a,b) {
    console.log("Hello, World!");
    return a+b;
}
console.log(hello(5, 10));
//arrow function
//() => {}
const hellos = (a, b) => {
    console.log("Hello, World!");
    return a + b;
}
console.log(hellos(25, 10));

//23/07/26
//synchronous function
function hello1(){
    console.log("task1");   

}
hello1();
console.log("task2"); 
//
const promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    let err = true;
    if (!err) {
      resolve({
        username: "ABC",
        password: "123",
      });
    } else {
      reject("ERRO: username /password not found");
    }
  }, 2000);
});
promise
  .then((user) => {
    console.log(user.username);
    console.log(user.password);
  })
  .catch((error) => {
    console.log(error);
  });

async function test() {
  console.log("message:1");
  // console.log("4");
  const response = await fetch("./student.json");
  const stdn = await response.json(); //await ko use karke iska data fetch kia
  return stdn;
  console.log("message:2");
}
test().then((res) => {
  console.log(res);
});