
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produceWithSpread = [...fruits, ...vegetables];
const normalSpread = fruits.concat(vegetables);

console.log(produceWithSpread);
console.log(normalSpread);



const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

/**
 * Find avearage of any numbers 
 * @param  {...any} nums 
 */

function average(...nums) {
    console.log(...nums)
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    if (average.arguments.length > 0) {
        return total / average.arguments.length;
    } else {
        return 0;
      }
    
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());