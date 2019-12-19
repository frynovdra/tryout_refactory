const reverseString = (str) =>  {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; //Loop mundur untuk menyisipkan string lama kedalam string yang baru
    }
    console.log(str + newString) //"Concatenate" string lama dan baru
}
reverseString('hello'); //Output : helloolleh
reverseString('--oO'); //Output : --oOOo--
