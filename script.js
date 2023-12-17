const img = document.querySelectorAll("img")
const head = document.querySelector("#head")
const thumb = document.createElement("img")
const jumbo= document.querySelector("#jumbo")

img.forEach(function (e) {
    e.addEventListener("click", function(){
        jumbo.src = e.src
        jumbo.classList.add("fade")
        setTimeout(function () {
            jumbo.classList.remove("fade")
        },500)
    })
    
    
})