let container = document.querySelector(`#container`)
let color = document.querySelector(`#color`)
let eraser = document.querySelector(`#erase`)
erase.addEventListener(`mousedown`, () => {
    eraser()
})

let newGrid = document.querySelector(`#newGrid`)
newGrid.addEventListener(`mousedown`, () => {
    getNewGrid()
})


gridColor = (element) => {

    element.style.backgroundColor = color.value
}

function createGrid(size) {

    let isMouseDown = false

    for (let i = 0; i < size * size; i++) {

        let grid = document.createElement(`div`)
        grid.classList.add(`grid`)

        grid.addEventListener(`mousedown`, () => {
            isMouseDown = true
            gridColor(grid)
        })

        grid.addEventListener(`mouseenter`, () => {
            if (isMouseDown) {
                gridColor(grid)
            }
        })

        grid.addEventListener(`mouseup`, () => {
            isMouseDown = false
        })



        container.appendChild(grid)
    }

    const gridSize = 656 / size
    const gridElement = document.querySelectorAll(`.grid`)
    gridElement.forEach(grid => {
        grid.style.width = `${gridSize}px`
        grid.style.height = `${gridSize}px`
    })

}

createGrid(16)

getNewGrid = () => {
    container.innerHTML = ''
    newGrid = Number(prompt(`Grid Size`))
    if (newGrid > 100) { alert(`The grid size most be below 100`) }

    createGrid(newGrid)
}

eraser=()=>{
    color.value = `#FFFFFF`
}