function Hesabla(){
    let mebleg = document.getElementById('mblg').value;
    let faiz = document.getElementById('fz').value;
    let muddet = document.getElementById('mdt').value;

    // let ayod = (mebleg*(1+((muddet*(faiz/100)))))/(muddet*12)
    let ayod = (mebleg*(1+((faiz*muddet)/100)))/(muddet*12)
    document.getElementById('ayliq').innerHTML = ayod;
    document.getElementById('umumi').innerHTML =  (mebleg*(1+((faiz*muddet)/100)))

}