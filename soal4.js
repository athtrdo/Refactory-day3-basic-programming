function leapYear(){
            
    let tahun = prompt('Masukan tahun disini: ');
        if(tahun %400 === 0){
            console.log("Tahun " + tahun + " merupakan tahun Kabisat");
        } else if(tahun %100 === 0 ){
            console.log("Tahun " + tahun + " bukan tahun Kabisat");
        } else if (tahun %4 === 0){
            console.log("Tahun " + tahun + " merupakan tahun Kabisat");
        } else{
            console.log("Tahun " + tahun + " bukan tahun Kabisat");
        }
    }

alert('Selamat datang di program cek tahun KABISAT')
leapYear();
