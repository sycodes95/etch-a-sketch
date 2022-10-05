let gridSizeButton = document.querySelector('.gridSizeButton');
const gridContainer = document.querySelector('.gridContainer');


let grid = document.createElement('div');
grid.classList.add('grid');
gridContainer.appendChild(grid);
for (i = 0; i < 256; i++) {
            
    let gridBoxes = document.createElement('div');
    gridBoxes.classList.add('gridBoxes');
    grid.appendChild(gridBoxes);

    let height = (512 / 16);
    let width = (512 / 16);
    console.log(height)

    gridBoxes.style.maxHeight = `${height}px`;
    gridBoxes.style.maxWidth = `${width}px` ;
    gridBoxes.style.minHeight = `${height}px`;
    gridBoxes.style.minWidth = `${width}px` ;

    let h = Math.floor(Math.random() * 360);
    let s = 50;
    let l = 50;
    let pct = "%";
    let hsl = "hsl(" + h + ", " + s + pct + " , " + l + pct + ")";
    
    let colorCounter = 0
    
        
        
        
        
    
    gridBoxes.addEventListener('mouseover', () => {
        
        gridBoxes.style.backgroundColor = hsl;
        
    })

    
        
        
        

        


    
}

            
        
        
        
        
        
        
        
        
    

let createGrid = gridSizeButton.addEventListener('click', () => {
    let boxes = grid.querySelectorAll('div');
    boxes.forEach((div) => div.remove());
    // Runs function below on click of button
    
    
    let userInput = prompt('Enter Grid Size 0 - 100');
    if (parseInt(userInput) < 100){
        for (i = 0; i < (userInput * userInput); i++) {
            
            let gridBoxes = document.createElement('div');
            gridBoxes.classList.add('gridBoxes');
            grid.appendChild(gridBoxes);

            let height = (512 / parseInt(userInput));
            let width = (512 / parseInt(userInput));
            console.log(height)

            gridBoxes.style.maxHeight = `${height}px`;
            gridBoxes.style.maxWidth = `${width}px` ;
            gridBoxes.style.minHeight = `${height}px`;
            gridBoxes.style.minWidth = `${width}px` ;

            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let rgb = "rgb(" + r + ", " + g + ", " + b + ")";

            

            
            
            gridBoxes.addEventListener('mouseover', () => {

                if (gridBoxes.style.backgroundColor == ""){
                    let color = rgb;
                    gridBoxes.style.backgroundColor = rgb;
                    gridBoxes.style.opacity = "0.1"
                    return gridBoxes.style.backgroundColor;

                }
                

                
                
                if ((gridBoxes.style.backgroundColor !== "") && (gridBoxes.style.opacity <= "0.9")) {
                    gridBoxes.style.opacity = parseFloat(gridBoxes.style.opacity) + 0.1;
                    return gridBoxes.style.backgroundColor;
                    
                    
                }

                

                
            })
        }
        
            
    } else if (parseInt(userInput) >= 100){
        
        for (i = 0; i < 10000; i++) {
        
            let gridBoxes = document.createElement('div');
            gridBoxes.classList.add('gridBoxes');
            grid.appendChild(gridBoxes);
    
            
            let height = (512 / 100);
            let width = (512 / 100);
            console.log(height)
            
            gridBoxes.style.maxHeight = `${height}px`;
            gridBoxes.style.maxWidth = `${width}px` ;
            gridBoxes.style.minHeight = `${height}px`;
            gridBoxes.style.minWidth = `${width}px` ;

            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let rgb = "rgb(" + r + ", " + g + ", " + b + ")";
            

            

            
            
            gridBoxes.addEventListener('mouseover', () => {
                gridBoxes.style.backgroundColor = rgb;
                

                
                
                    
                

                
            })
            
        }
    }
}) 

                
                
                
                    
                    
                
                

















    
    
    
    
    

    
    






        
        

    







    
    
    
    
    
    
    
    
    

    



    
    
    
    








        






























        
        
        






    
    
    












 

    
    
    



