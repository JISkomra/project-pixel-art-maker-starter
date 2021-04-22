// Select color input

// When size is submitted by the user, call makeGrid()

function newLi(){
    return document.createElement("li");  
}

function newUl(ulName){
    var newUl = document.createElement("ul");
    newUl.id = ulName;
    return newUl;
}

function makeGrid(){

    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    var intWidth = parseInt(width);
    var intHeight = parseInt(height);

    //if there is one, remove it
    var gridUl = document.getElementsByTagName("ul");
    if(gridUl.length > 0){
        //remove it, then create and append to body
        gridUl[0].remove(); 
        var gridUl = newUl("grid");
    }

    //create grid
    var gridUl = newUl("grid");
    
    if (intHeight <= 20 & intWidth <=20 ){
        for(i = 0; i < intHeight; i++) {
            for(var n = 0; n < intWidth; n++) {
            gridUl.appendChild(newLi());
            }
        }
    }else{
        makeGrid();
    }

    //append grid
    document.body.appendChild(gridUl);

    //shrink grid depending on amount of boxes
    document.getElementById("ul_o").getElementsByTagName("li").length

}

