function getClothingWithVar(isCold) {
    if (isCold) {
      var freezing = 'Grab a jacket!';
    } else {
      var hot = 'It’s a shorts kind of day.';
      return freezing;
    }
  }
  /************ let and const also have some other interesting properties.
  Variables declared with let can be reassigned, but can’t be redeclared in the same scope.
  Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.
  ******/

 /*****
  * use let when you plan to reassign new values to a variable, and
  * use const when you don’t plan on reassigning new values to a variable.
  * 
  */
 
  // this will give an error like TypeError: Assignment to constant variable. 

 function getClothingWithConst(isCold) {
  const freezing = "test";
  if (isCold) {
    freezing = 'Grab a jacket!';
  } else {
    freezing = "It’s a shorts kind of day"
  }
  return freezing;
}

// this will give an give the expected result. 
function getClothingWithLet(isCold) {
  let freezing;
  if (isCold) {
    freezing = 'Grab a jacket!';
  } else {
    freezing = "It’s a shorts kind of day"
  }
  return freezing;
}
/***
 * Is there any reason to use var anymore? Not really.

*There are some arguments that can be made for using var in situations where you want to globally define variables,
 but this is often considered bad practice and should be avoided. From now on, we suggest ditching var in place of using let and const.
 */

module.exports = {getClothingWithVar,getClothingWithConst,getClothingWithLet};