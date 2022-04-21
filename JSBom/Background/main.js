let npt = document.getElementById('npt')
npt.addEventListener('keypress' , function(event) {
    const key = event.key;
    if(key === "Enter"){
        document.body.style.backgroundColor = npt.value
    }
})