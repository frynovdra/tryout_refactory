const reverseString = (str) =>  {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    console.log(str + newString)
}

reverseString('hello');
reverseString('--oO');