function DateTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s;
    }

    document.getElementById('date').innerHTML = h + " : " + m + " : " + s;

    if (h < 18) {
        document.body.style.transition = "2s"
        document.body.style.backgroundColor = "black";
        document.getElementById('date').style.color = "white"
    }

}


setInterval(DateTime, 1000)
