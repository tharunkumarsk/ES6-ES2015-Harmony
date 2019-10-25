/**
 * Treditional way of handling default values 
 * @param {} name 
 * @param {*} greeting 
 */
function greet(name, greeting) {
    name = (typeof name !== 'undefined') ?  name : 'Student';
    greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';
  
    return `${greeting} ${name}!`;
  }
  
  console.log(greet()); // Welcome Student!
  console.log(greet('James')); // Welcome James!
  console.log(greet('Richard', 'Howdy')); // Howdy Richard!




/**
 * ES6 dafault func params 
 * @param {*} name 
 * @param {*} greeting 
 */
 function greetDafaultFuncParams(name='Tharun', greeting="welcome") {
    return `${greeting} ${name}!`;
  }
  
  console.log(greetDafaultFuncParams()); // Welcome Tharun!
  console.log(greetDafaultFuncParams('James')); // Welcome James!
  console.log(greetDafaultFuncParams('Richard', 'Howdy')); // Howdy Richard!


  function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
    return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
  }

  console.log(houseDescriptor({}))