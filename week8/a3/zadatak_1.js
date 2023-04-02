function pay(satnica,broj_sati){
    let plata 
    if (broj_sati <= 40) {
        plata = satnica * broj_sati;        
    } 
    else if ((40 < broj_sati) && (broj_sati <= 60)) {  
        plata = satnica * 40 + satnica * 1.5 * (broj_sati - 40);
    } 
    else {
        plata = satnica * 40 + satnica * 1.5 * 20 + satnica * 2 * (broj_sati - 60);       
    }
    return(plata);
}
console.log(pay(10,35));
console.log(pay(10,45));
console.log(pay(10,61));
