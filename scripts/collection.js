//get useragent to render different grid for mobile users
var ismobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i); 
//getting the reference for the body
var body = document.getElementsByTagName("body")[0];
//create vars:  new columns row, image col: test is-mobile
var newRow; 
var docFrag = document.createDocumentFragment(); 
//console.log(newRow); 
//console.log(imgCol); 
//put placeholder image in image var for now, append to imgcol
var imgCol; 
var img;
//curently holds all apparel, must be curated
var appImgs = ["1976-1989 Black Engineers.png","1976-1989 Text Styalized.png","1976-1989.png","1977 Student.png","1977 Stylized.png","1982-89 Stylized.png","76-89 Text 1.png","76-89 Text 2.png","76-89 Text 3.png","76-89 Text 4.png","Alphas Cropped.png","Alphas.png","ChemE 2.png","ChemE.png","Counterweight.png","German - PW.png","German - Sitins.png","NSBE 1982-89.png","Poets.png","T-Shirt WINO.png","WINO Expansion.png"]; 
appImgs.sort(); 

//console.log(img); 

//factors of 140

console.log(docFrag); 
function clothes_grid(){
	"use strict"; 
	for (var i=0; i<4; i++){
		newRow = document.createElement("div"); 
		newRow.classList.add("columns", "is-multiline", "is-mobile", "is-centered", "has-margin-right-80", "has-margin-left-80","has-padding-right-80", "has-padding-left-80", "is-gapless"); 
		for (var ind=0; ind<3; ind++){
//			emptyCol = document.createElement("div");
//			emptyCol.classList.add("column", "is-narrow");
			imgCol = document.createElement("div"); 
			imgCol.classList.add("column", "image");
			img = document.createElement("img"); 
			img.src = "../Tandon-Poly-Archives-Project/img/Clothing Images/" + appImgs.shift();  
			imgCol.appendChild(img); 
//			newRow.appendChild(emptyCol); 
			newRow.appendChild(imgCol); 
		}
		docFrag.appendChild(newRow); 
	}
	body.append(docFrag); 	
	console.log("In Func..."); 
}
clothes_grid(); 
console.log("Done"); 
