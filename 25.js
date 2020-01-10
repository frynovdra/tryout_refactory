const fruits = ['Anggur', 'Durian',  'Tomat', 'Bengkoang', 'Jeruk', 'Pepaya', 'Jambu', 'Manggis', 'Kelapa', 'Timun', ]

function linearSearch(target) {
    for (var i=0; i<fruits.length; i++) {
      if (fruits[i] == target) {
        console.log(fruits);
        console.log(`Yang dicari adalah ${target} dan Ditemukan pada daftar ke ${i+1}`);
      }
    } 
  }

  linearSearch('Tomat');