
    for(let i=1; i<= 1000; i++){
        if(i%2 === 1){
            console.log(i + '. Ganjil');
        } 
        else if (i % 5 === 0) {
            console.log(i + '. Ganjil Kelipatan Lima');
        else if (i % 2 === 0) { 
            if (i % 5 === 0) {
            console.log(i + '. Genap Kelipatan Lima');
            } else {
                console.log(i + '. Genap');
                }
            } 
        }  else if (i % 100 === 0) {
            console.log(i + '. Kelipatan Seratus');
        }
    }
