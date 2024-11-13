let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0;
console.log(count)

function increament(){
    count +=1
    countEl.innerText = count
}

function save(){
    let countStr = count + " - "
    //saveEl.innerText += countStr
    saveEl.textContent +=countStr
}
console.log(increament())