const fruits = [
    {name: 'Pepaya', price: 3000},
    {name: 'Jagung', price: 2000},
    {name: 'Mengkudu', price: 4000},
    {name: 'Kiwi', price: 6000},
  ]

for( let key in fruits){
  let stringno = JSON.stringify(fruits[key].name + " : " + fruits[key].price)
  console.log(stringno);
  console.log(` Tipe data : ${typeof (stringno)}`);
}