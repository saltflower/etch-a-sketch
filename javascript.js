function createGrid(n = 4) {
let main = document.createElement("div")



main.classList.add("main")
    for (let i = 0; i < n; i++) {
        let row = document.createElement("div")
        row.classList.add("row")
        for (let j = 0; j < n; j++) {
            let box = document.createElement("div")
            box.classList.add("box")
            box.id = "100"
            row.appendChild(box)
            }
        main.appendChild(row)
    }

return main;
}


let grid = createGrid(10)
console.log(grid)

let center = document.querySelector("body")
center.appendChild(grid)

let item = document.querySelector(".main")

let btn = document.createElement("button")
btn.textContent = "Reset"
center.appendChild(btn)
let btnBool = false;

let enterDiv = document.createElement("div")
enterDiv.classList.add("enter")
let enter = document.createElement("input")
enter.setAttribute("number", "number")
enter.type = "number"
enter.max = "100"
let enterText = document.createElement("p")
enterText.textContent = "Enter size (max = 100)"
center.appendChild(enterDiv)
enterDiv.appendChild(enter)
enterDiv.appendChild(enterText)

function itemInit(itemL) {
let curTarget;

itemL.addEventListener("mousemove", (e) => {
    if (curTarget != e.target) {
    let target = e.target;
    curTarget = e.target;
    if (target.classList.contains("box")) {
        if (target.style.filter === "") {
            target.style.filter = "brightness(90%)"
            console.log(target.style.filter)
        }
        bright = target.style.filter.substring(11).split("%")[0]
        console.log(bright)
        bright -= 10;
        if (bright >= 0) target.style.filter = `brightness(${bright}%)`
    }
    }
});
}

itemInit(item)

btn.addEventListener("click", () => {
    if (btnBool === true && enter.value != "") {
        enterDiv.style.display = "none"
        center.removeChild(grid)
        if (enter.value <= 100) grid = createGrid(enter.value)
        center.appendChild(grid)
        btn.textContent = "Reset";
        item = document.querySelector(".main")
        itemInit(item)
        btnBool = false;
    }
    else {
    enterDiv.style.display = "flex"
    btn.textContent = "Click again to reset"
    btnBool = true
    }
});

