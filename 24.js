let textBook = ['Algoritma','Sistem Operasi','Kompleksitas','Kalkulus'];

const masuk = (judul) => {
    textbook = textBook.unshift(judul);
    console.log(textBook);
}

const buang = () => {
    let dibuang = textBook.shift();
    console.log(textBook);
}

masuk('Artificial intelligence');
buang();

