
/**
 * For of loop simplyfies the for loop 
 */
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(`----
  ${digit}`);
}

/**
 * You can stop or break a for...of loop at anytime.
 */
for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(`******
  ${digit}`);
}

/**
 * samll for of practical example
 */
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (const day of days) {
    let capsDay = day.charAt(0).toLocaleUpperCase()+day.slice(1);
    console.log(capsDay);
}


