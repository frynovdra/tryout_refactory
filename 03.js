const check = (num) => {
  if (num % 2 == 0) { //Cek genap tidaknya bilangan apabila tidak ada yang tersisa setelah habis dibagi 2
    console.log("Input : " + num);
    console.log("Output : Genap");
  } else { //Jika masih ada sisa bilangan yang keluar adalah ganjil
    console.log("Input : " + num);
    console.log("Output : Ganjil");
  }
}
check(90); //Output : Genap 
check(35); //Output : Ganjil
