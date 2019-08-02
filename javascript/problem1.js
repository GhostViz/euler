/*
https://projecteuler.net/problem=1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sumMultiples(x,y,upperLimit){

  let gcm, lcm, xSum, ySum, lcmSum, aboveGCMSum, sum;

  // find the greatest common mutliple under upperLimit divisible by
  // lowest common multiple of x and y

  // get amount of numbers under gcm divisible by x  (gmc/x)
  // find the sum for divisible by x (gcm/x)(gmc+x)/2

  // get amount of numbers under gcm divisible by y  (gcm/y)
  // find the sum for divisible by y (gcm/y)(gcm+y)/2

  // find lcm of x and y and find total of numbers divisible by that
  // get the sum for divisible by lcm (gcm/lcm)(gcm+lcm)/2

  // subtract total divisible by lcm from sum of divisible by x and sum of divisible by y

  // find sum of multiples of x or y between gcm and upperLimit.
  // add to sum from the steps above.
  
  return sum;
}

console.log(sumMultiples(3,5,10000))
