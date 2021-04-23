function makeGrid(){

    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    var intWidth = parseInt(width);
    var intHeight = parseInt(height);

    var theTable = "";
    
    //create the table
    if (intHeight <= 20 & intWidth <=20 ){
        for(i = 0; i < intHeight; i++) {
            theTable += "<tr>";
            for(n = 0; n < intWidth; n++) {
                theTable += "<td></td>"
            }
            theTable += "</tr>";
        }
    }else{
        makeGrid();
    }

    //set the table
    document.getElementById("pixelCanvas").innerHTML = theTable;

    //add event listeners to pixels
    var allTds = document.getElementsByTagName("td"); 
    for (i = 0; i < allTds.length; i++) {
        allTds[i].addEventListener("click", function addColor(){
            var colorInput = document.getElementById("colorPicker").value;
            this.style.backgroundColor = colorInput;
        });
    }
}