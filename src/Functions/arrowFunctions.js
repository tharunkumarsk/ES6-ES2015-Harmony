/**
 * Normal javascript functions so far we used
 */
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
    return name.toUpperCase();
  });

  /**
 * how above function will lookes with arrow
 */

  const upperizedNamesEs6 = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
  );


/**
 * Arro2 fun with arugument
 */

const greet = name => `Hello ${name}!`;



/**
 * Arro2 fun with multiple arugument
 */

const sayHello = (name,question) => `Hello ${name}! and ${question}`;


/**
 * block syntax with arrow function (See the syntacx difference to above)
 */

const upperizedNamesWithBlock = ['Farrin', 'Kagure', 'Asser'].map( name => {
    name = name.toUpperCase();
    return `${name} has ${name.length} characters in their name`;
  });

/**
 * -----------------------------------------------------------------------------------------
 * -----------------------------------------------------------------------------------------
 * -----------------------------------------------------------------------------------------
 * -----------------------------------------------------------------------------------------
 * Below all above this key word in ES6 arrow functions
 */

 // constructor
function IceCream() {
    this.scoops = 0;
  }
  

  IceCream.prototype.addScoop = function() {
    setTimeout(function() {
      this.scoops++;
      console.log(this.scoops);
    }, 500);
  };
  
  const dessert = new IceCream();
  dessert.addScoop();


/**
 * Refer this link for future : https://classroom.udacity.com/courses/ud356/lessons/3925704a-be38-4b70-8c8b-a4a812b6a309/concepts/32f53f68-4b31-40fb-b136-4eda28b8ff57
 */











  /**
   * All your logging goes here 
   */

   console.log(upperizedNames);
   console.log(upperizedNamesEs6);
   console.log(greet("Tharun"));
   console.log(sayHello("Tharun","Where are you from"));
   console.log(upperizedNamesWithBlock);



