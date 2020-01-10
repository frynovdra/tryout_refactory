let tes = "Ibu Ubi";

const palinCek = (dicek) => {
    dicek = dicek.toLowerCase();
    return dicek == dicek.split('').reverse().join('');
}

console.log(`is ${tes} a palindrome? ${palinCek(tes)}`);