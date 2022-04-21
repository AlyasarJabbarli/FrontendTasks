let btn = document.getElementById("bck")

function Backspace() {
    document.getElementById("npt").value = document.getElementById("npt").value.substring(0, document.getElementById("npt").value.length - 1);
}

btn.addEventListener("mousedown" , Backspace)