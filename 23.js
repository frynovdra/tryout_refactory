let textBook = ['Algoritma','Sistem Operasi','Kompleksitas','Kalkulus'];

const masuk = (judul) => {
    textbook = textBook.unshift(judul);
    console.log(textBook);
}

const buang = () => {
    let dibuang = textBook.pop();
    console.log(textBook);
}

masuk('Artificial intelligence');
buang();

