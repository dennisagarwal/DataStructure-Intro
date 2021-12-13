// import "./styles.css";

//datastructure; arrays and objects

//declaring the array
const names = ["Jim", "Anvit", "Betty", "Atom"];
console.log(names);

//adding element to array
names.push("Deepak");
names.push("Nigel");

//adding numbers to array
names.push(44);

//adding boollean to aray
names.push(true);

//getting value from the data structure
console.log(names[4]);

//array length
let arraylength = names.length;
console.log(names.length);

console.log(names[arraylength - 2]);

//Removing last element from array
names.pop();
console.log(names);

//splice is function allow to remove one or
//more than one element
let splicedElement = names.splice(1, 2);
console.log(splicedElement);

//Objects
//A collection of key-value pairs
//declaring a object
const info = {
  name: "Jim",
  age: 24,
  year: 2020,
  city: "Toronto"
};

const info2 = {
  name: "Deepak",
  age: 28,
  year: 2022,
  city: "Vancouver"
};

const info3 = {
  name: ["Atom", "Rebekha"],
  age: 26,
  year: 2014,
  city: "Alberta"
};

//getting specific value from object
console.log(info);
console.log(info.name);
console.log(info.name + " age is " + info.age);

info.image = "https://placekitten.com/500/500";
console.log(info);

//using delete to remove key-value pair
delete info3.name[0];
console.log(info3);

//objects in array
let database = [info, info2, info3];
console.log(database);
//accessing specific elememt in array of object
console.log(database[1].name);

database[2].name.push("Akshay");
console.log(database);
