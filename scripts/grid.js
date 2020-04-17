//get useragent to render different grid for mobile users
var ismobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i); 
//getting the reference for the body
var body = document.getElementsByTagName("body")[0];
//create vars:  new columns row, image col: test is-mobile
var Rows = []; 
var newRow; 
var docFrag = document.createDocumentFragment(); 
//console.log(newRow); 
//console.log(imgCol); 
//put placeholder image in image var for now, append to imgcol
var imgCol; 
var img;

//console.log(img); 

//factors of 140

console.log(docFrag); 
function generate_grid(){
	"use strict"; 
	for (var i=0; i<28; i++){
		newRow = document.createElement("div"); 
		newRow.classList.add("columns", "is-multiline", "is-mobile", "is-centered"); 
		for (var ind=0; ind<5; ind++){
			imgCol = document.createElement("div"); 
			imgCol.classList.add("column", "is-one-fifth-desktop", "is-one-fifth-mobile");
			img = document.createElement("img"); 
			img.src = "../Website Files/img/plchldr.png"; 
			imgCol.appendChild(img); 
			newRow.appendChild(imgCol); 
		}
		docFrag.appendChild(newRow); 
	}
	body.append(docFrag); 	
	console.log("In Func..."); 
}
generate_grid(); 

console.log("Done"); 
