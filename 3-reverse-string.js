/* 3. Reverse String
Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
*/

ReverseString = (str) => {
    return str ? ReverseString(str.substr(1)) + str[0] : str;
}

ReverseString2 = (str) => {
    return str.split('').reverse().join('');
}

console.log(ReverseString())