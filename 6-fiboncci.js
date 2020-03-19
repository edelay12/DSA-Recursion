/*6. Fibonacci
Write a recursive function that prints the Fibonacci sequence of a given number. 
The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
For example, the 7th Fibonacci number in a Fibonacci sequence is 13. T
he sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

*/

fibonacciOld = (num) => {
    for (let i = 0; i <= num; i++){
        if (num <= 2){
            return console.log(1);
        } else {
            result = fibonacci(num - 1) + fibonacci(num-2);
            console.log(result)
        }
        }
    }


function fibonacci(n) {
  return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2);
 }
 
 console.log(fibonacci(7))
