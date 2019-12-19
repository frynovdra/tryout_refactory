const kata = ['Saya','ingin','makan','nasi','goreng'];
const kataBaru = [];

for(let i = kata.length; i >= 0; i--){
    kataBaru.push(kata[i]);
}
console.log(kataBaru.slice(0,6).join(' '));
