export default productPrice;

function productPrice(){
    const cost = 125;
    const price = 150;
    let ort = parseInt(10*price/(price - cost));
    let result

    if(cost >= price){
        console.log("Kâr edilemez");
    }
    else if(cost < price){
       for(let i = 1; i<= ort; i++){
        if(price > cost){
            result = i * (price - cost);
            if(result >= price){
                console.log(`${i} kadar satılırsa kar edilmeye başlar.`);
                break
            }
        }
       }
    }

}