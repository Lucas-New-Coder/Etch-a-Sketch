let container = document.querySelector('#container')
let color = document.querySelector('#color')
let newGrid = document.querySelector('#newGrid')


function createGrid(size){
    container.innerHTML = ''

    let isMouseDown = false
    
    for(let i=0; i<size*size;i++){
        let grid = document.createElement('div')
        grid.classList.add('grid')
        
        grid.addEventListener('mousedown',()=>{
            isMouseDown=true;grid.style.backgroundColor = color.value
        })
        grid.addEventListener('mouseup',()=>{
            isMouseDown = false
        })
        grid.addEventListener('mouseenter',()=>{
            if (isMouseDown){
                grid.style.backgroundColor = color.value
            }
    })
        container.appendChild(grid)
    }

    const gridSize = 656/size
    const gridElement = document.querySelectorAll('.grid')
    gridElement.forEach(grid=>{
        grid.style.width =`${gridSize}px`
        grid.style.height =`${gridSize}px`
    })
  
}
function erase(){
    let erase = document.querySelector('#erase')
    erase= color.value='#FFFFFF'

}

    function getNewGrid(newGrid){
        value = newGrid
        value = Number (prompt('Grid size'))
        if (value>100){alert('The grid size most be below 100')}else if (
            value<=100)
        
        {createGrid(value)}

    }

createGrid(16)