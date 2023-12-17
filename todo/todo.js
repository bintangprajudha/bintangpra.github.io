const inputBox = document.querySelector('input');
const liCon = document.querySelector('.li-con');
const btn = document.querySelector('button');
const li = document.querySelector('li')

btn.addEventListener('click', function() {
    if(inputBox.value == '') {
        alert('you must write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        liCon.appendChild(li);
        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBox.value = " ";
    saveData();
})

liCon.addEventListener('click', function (e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check")
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
},false)

function saveData() {
    localStorage.setItem("data", liCon.innerHTML);
}

function showTask() {
    liCon.innerHTML = localStorage.getItem("data");
}

showTask()