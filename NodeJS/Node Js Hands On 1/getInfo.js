let user = {};
// user.islegalAge = true;

// Object.keys(user) = ["name", "age"]
// Object.values(user) = ["John", 30]
// Object.entries(user) = [ ["name","John"], ["age",30] ]

// for (let value of Object.values(user)) {
//     alert(value); // John, then 30
//   }

// function getInfo(){
//     return user.age;
// }
// module.exports = getInfo;

function getInfo(name, age){
    return {
        name: name,
        age: age,
      };
}
module.exports = getInfo;