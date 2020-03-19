/* 1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence */ 


function CountingSheep(num){
    if (num === 1) {
        return console.log(`Sheep ${num} jumped over the fence`)
    } 
    console.log(`Sheep ${num} jumped over the fence`)
    CountingSheep(num-1);
}

CountingSheep(10)

