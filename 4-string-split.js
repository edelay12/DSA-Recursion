/*5. String Splitter
Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

Input: 02/20/2020
Output: ["02", "20", "2020"] */

let output=[]

function stringSplitter(str){
    let length = str.length
    let restOfString;
    if (str) { 
        for(let i in str){
        if(str[i] == '/' && i != length){
            let stringToSplit = str.substr(0 , i);
            restOfString = str.substr( i , length);
           return output.push(stringToSplit);
           
        
        }
        }
        console.log(restOfString)
        return stringSplitter(restOfString);
    } console.log(output)
   
    } 




stringSplitter('02/20/2020')