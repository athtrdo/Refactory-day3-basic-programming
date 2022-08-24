const ratingUsia = () =>{
    let umur = prompt('masukan umur anda disini: ');

    if(umur >= 21){
        console.log('DEWASA');
    } else if ( umur >= 13){
        console.log('REMAJA');
    } else if (umur >= 9){
        console.log('BIMBINGAN ORANG TUA');
    }else{
        console.log('SEMUA USIA');
    }
    
}
alert('Selamat datang di program rating usia menonton film')
ratingUsia();

  