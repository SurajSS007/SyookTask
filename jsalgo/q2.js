// 2. In this kata, you must create a digital root function using recursion or with time complexity of O(1).  
// A digital root is the recursive sum of all the digits in a number. 
// Given n, take the sum of the digits of n. 
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
//  This is only applicable to the natural numbers.  
// Here's how it works:  
// digital_root(16) // => 1 + 6 // => 7  
// digital_root(942) // => 9 + 4 + 2 // => 15 ... // => 1 + 5 // => 6






function digital_root(num) {
    if(num === 0) {
        return 0;
    }

    
  let remdigit = num % 10
  let remainingItems = Math.floor(num / 10 )
  let sumofRem =+ digital_root(remainingItems)

  return remdigit+sumofRem

}
console.log(digital_root(942));

