
var RAINBOW = false;
var COLOR = "black";

// function to draw the grid with input from value obtained from the slider
function drawGrid (sliderValue){
   
    //get drawPanel from HTML 
    const container = document.querySelector('#drawPanel');
    container.innerHTML = "";
    //give each box a the correct size as a % of 600px
    let blockSize = (((600/sliderValue)/600)*100);
    // console.log(blockSize);

    for (let i= 0; i < sliderValue; i++){
        for (let j= 0; j < sliderValue; j++){
            const gridBlock = document.createElement('div');
            gridBlock.classList.add('drawBox');          
            gridBlock.style.width = "" + blockSize +"%";
            gridBlock.style.height = "" + blockSize +"%";
            // gridBlock.onmousedown = "draw()";

            container.appendChild(gridBlock);

            gridBlock.addEventListener('mouseover',  function draw(event){
                
               if (RAINBOW == true){
                COLOR = rainbowMaker();
               }
                gridBlock.style.backgroundColor = "" + COLOR;
                
            });
            


            container.appendChild(gridBlock);
            // console.log("test box " + i + " "+ j);
        }
    }
    

}

// get slider value and display value above slider
function sliderValue (){
    
    var slider = document.querySelector(".slider");
    // console.log ("slider value: "+slider.value)
    var out = document.getElementById('sliderValue');
    out.innerHTML = slider.value;
    slider.oninput = function(){out.innerHTML = this.value; drawGrid (this.value);}
    return slider.value;
    

}

function clearAll (){

    
    drawGrid(sliderValue());
    COLOR = "black";
    RAINBOW = false;


}

function chooseColor (colorClicked){
    
    COLOR = colorClicked;
    RAINBOW = false;
}

function rainbow(){
    RAINBOW = true;
}

function rainbowMaker(){
    var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
}



drawGrid(sliderValue());

