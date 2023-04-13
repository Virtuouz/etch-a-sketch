function createGrid(){
    const input = prompt("Enter grid size") 
    const gridSize=parseInt(input,10)
    const grid = document.querySelector('.grid')
    grid.textContent=''
    //console.log(input)
    for(i =0; i<gridSize;i++){
        console.log(input)
        const gridRow = document.createElement('div')
        gridRow.classList.add('grid-row')
        
        grid.appendChild(gridRow)
    }
    const gridRows=document.querySelectorAll('.grid-row')
    console.log(gridRows)
    gridRows.forEach(row=>{console.log(row)})
    gridRows.forEach((row) => {
        for(i =0; i<gridSize;i++){
            const gridCol = document.createElement('div')
            gridCol.classList.add('grid-col')
            gridCol.addEventListener('mouseover' ,function(){addHoverEffect(gridCol)})
            row.appendChild(gridCol)
}
})
}

function addHoverEffect(gridRow){
    gridRow.classList.add('black')
}


const gridSizeButton = document.querySelector('#btn-grid')

gridSizeButton.addEventListener('click',()=>{createGrid()})