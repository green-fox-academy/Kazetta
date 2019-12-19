/*Sum Digits
Given a non-negative integer n, return the sum of its digits recursively (without loops).
Hint
Mod (%) by 10 yields the rightmost digit (e.g. 126 % 10 is 6)
Java, C++, C#, Python
Divide (/) by 10 removes the rightmost digit (e.g. 126 / 10 is 12).
JavaScript, TypeScript
There is no integer type in JavaScript. To remove the rightmost digit you must divide 
(/) the number by 10 and find a way to get the the whole number portion of that number.?*/


/*function sumOfDigits(nNumber:number): number {
    if ()
    return nNumber%10 + sumOfDigits(nNumber%10);
} 

console.log(sumOfDigits(15));*/

function sumDigits(num) {
    if (num == 0) {
      return 0;
    } else {
      let last = num % 10;
      let rest = Math.floor(num / 10);
      return last + sumDigits(rest);
    }
  }
  console.log(sumDigits(1234));