function createGrid(n = 4) {
let main = document.createElement("div")
main.classList.add("main")
    for (let i = 0; i < n; i++) {
        let row = document.createElement("div")
        row.classList.add("row")
        for (let j = 0; j < n; j++) {
            let box = document.createElement("div")
            box.classList.add("box")
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

center.addEventListener("mouseenter", (e) => {
    let target = e.target;

    target.
});
