const changeGrade = () =>{
    
    let value = prompt('Masukan nilai disini: ')

    if(value >= 90){
        console.log('A');
        }else if( value >= 80){
        console.log('B');
        }else if( value >= 70){
        console.log('C');
        }else if( value >= 60){
        console.log('D');
        }else{
        console.log('E');
        }
         changeGrade();
    }
    
    alert('Selamat datang di program Merubah nilai');
    changeGrade();
   