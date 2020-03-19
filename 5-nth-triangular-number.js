

function findNthTNum(num){
let results = [];
let i = 2

    this.generate = (num) => {
        if(num > 0) {
            results.push((results[results.length] + i))
            i++;
         
            this.generate(num -1);
            console.log(results)
        }
    }
    this.generate(num)
}

findNthTNum(8);