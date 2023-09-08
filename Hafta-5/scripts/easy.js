export default easy;
 function easy(){
    const dizi = [1,3,2,19,7,89,39,48,75,101,32];
    let bigNumber = dizi[0];
    for(let i = 0; i<dizi.length; i++){
        if(dizi[i] > bigNumber){
          bigNumber = dizi[i];
        }
       
    }
    return console.log(bigNumber);
 }
