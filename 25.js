const fruits = ['Anggur', 'Durian',  'Tomat', 'Bengkoang', 'Jeruk', 'Pepaya', 'Jambu', 'Manggis', 'Kelapa', 'Timun', ]

function linearSearch(elToFind) {
    for (var i=0; i<fruits.length; i++) {
      if (fruits[i] == elToFind) {
        console.log(fruits[i]);
        i = i +1;
        console.log('Ditemukan pada daftar ke ' + i);
      }
    } 
  }

  linearSearch('Tomat');