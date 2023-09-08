export default easy;
 function easy(sayi){
    let faktoriyel = 1;
    
    if(sayi < 0) {
        console.log("Lütfen pozitif bir tamsayı giriniz!")
    } else{

        for(let i = 1; i <= sayi; i++){
            faktoriyel = faktoriyel * i;
        }
        console.log("Faktöriyel : " + faktoriyel);
    }
 }
