let x;
console.log(x); //undefined.

//The value is logged as undefined because, at the time of variable declaration, javascript sets the value to be undefined.
//The type of that variable would also be undefined.

let y = 8;
y = null;
console.log(y); //null 

//The value is logged null because we explicity made the value to be empty.

console.log(undefined==null); //true

//On comparision, both undefined and null are the same because they both represent nothingness.

console.log(undefined===null); //false

//where as on strict equality, they are not the same as the datatypes are not the same for both the values.