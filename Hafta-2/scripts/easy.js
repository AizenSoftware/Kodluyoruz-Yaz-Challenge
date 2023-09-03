export default asalSayi;
 function asalSayi(sayi){
    for(let i = 2; i<=sayi; i++){
        if(sayi%i === 0){
            if(sayi === 2){
                console.log("Asaldır.");
                break
            }
            console.log("Asal sayı değildir");
            break
        }
        else{
            console.log("Asaldır.")
            break
        }
    }
}