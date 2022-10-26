function BDinDays(){
    let bDay = new Date(document.getElementById("bd").value);
    let today = new Date()
    let s = Number(bDay)
    let a = Number(today)
    let x = a - s
    let d = Math.floor(x / (1000*60*60*24))
    let otpt = document.getElementById("days");
    let input = document.getElementById("bd").value

    otpt.innerHTML = "You're " + d + " days old.";

    if(input == "" | input == null){
        otpt.innerHTML = "Please fill out the field.";
        otpt.style.color = "red";
        setTimeout(function() {
            otpt.innerHTML = ""
            otpt.style.color = "rgb(32, 32, 32)";
        }, 1500)
}

}