//Given a number as an input, print out every integer from 1 ta that number. However When the integer as divisible by z, print out "Fizz"; when it's divisible by 3, print out "Buzz"; when it's divisible by both 2 and 3. print out "FIZZ BUZZ"
//Use modulus operator

function fizzBuzz(num)  {
    for (let i = 1; i <= num; i++) {
        if(i % 2 === 0 && i % 3 === 0) console.log("FizzBuzz");
        else if( i % 3 === 0)console.log("Buzz");
        else if( i % 2 === 0)console.log("Fizz");
        else console.log(i);
    }
}

fizzBuzz(33);