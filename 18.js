const city = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];
const citaFiltrata = city.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
console.log(`Biasa : ${citaFiltrata.join(" ")}`);

//ES6
var uniq = [ ...new Set(city) ];
console.log(`Versi ES6 : ${uniq.join(" ")}`);