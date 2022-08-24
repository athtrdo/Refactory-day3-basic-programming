const ganjilGenap = () =>{
    let value = prompt('masukan angka disini: ');

    if(value %2 === 0){
        console.log('angka ' + value + ' termasuk angka Genap');
    } else {
        console.log('angka ' + value + ' termasuk angka Ganjil');
    }
    ganjilGenap();
}

alert('Selamat datang di program cek angka Ganjil Genap')

ganjilGenap();