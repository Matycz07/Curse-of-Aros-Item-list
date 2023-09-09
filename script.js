let data = []
document.querySelector(".searchbar").addEventListener("input",(e)=>{
    let input = e.target.value.toLowerCase()

    let x = document.querySelectorAll(".allitems p");
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            x[i].className = "n"
        }
        else {
            x[i].style.display="flex";
            x[i].className = "y"            
        }
    }
    stay()
})

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    data = JSON.parse(this.responseText)
    data.sort(function(a, b) {
        return a.Name.localeCompare(b.Name);
    });
    loaddata()
  }
xhttp.open("GET", "data.json", true);
xhttp.send();

function loaddata(){
    let c = 0
    let items = document.querySelector(".allitems")
    for (let index = 0; index < data.length; index++) {
        let p = document.createElement("p")
        p.innerHTML = data[index].Name
        if (c == 0) {
            c++
            p.id = "sg"
        } else {
            c--
            p.id = "dg"
        }
        if (data[index].PhotoUrl != "") {
           p.innerHTML = p.innerHTML+'<img src="'+data[index].PhotoUrl+'">'
        }
        items.appendChild(p)
    }
}
function stay(){
let y = document.querySelectorAll(".allitems .y")
let c = 0
for (let index = 0; index < y.length; index++) {
    if (c == 0) {
        c++
        y[index].id = "sg"
    } else {
        c--
        y[index].id = "dg"
    }
}
}
window.addEventListener('scroll',(e)=>{
    if (window.scrollY > 202) {
        document.querySelectorAll("svg")[0].style.display = ""
    } else {
        document.querySelectorAll("svg")[0].style.display = "none"
    }
})