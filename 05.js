const age = prompt('Masukkan usia : ');

switch(true){
    case age >= 21:
        console.log('Input : ' + age);
        console.log('Output : Dewasa.');
        break;
    case age >= 13:
        console.log('Input : ' + age);
        console.log('Output : Remaja.');
        break;
    case age >= 9:
        console.log('Input : ' + age);
        console.log('Output : Bimbingan Orang Tua.');
        break;
    default:
        console.log('Input : ' + age);
        console.log('Output : Semua Umur.');
}
