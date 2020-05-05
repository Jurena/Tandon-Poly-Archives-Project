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
var appImgs = ["Alpha Phi Alpha (ΑΦΑ), 1969.jpg","Chemical Engineer, 1960.jpg","Haitian Student Association,1987-1988.jpg","Protester, 1970.jpg","Protests, 1970 & 1989.jpg","Protests Crew, 1970 & 1989.jpg","Ramon-Counterweight, 1969.jpg","the Engineers,1976-1989.jpg","the Student, 1977.jpg"]; 
appImgs.sort(); 
var caption = document.getElementById("caption");
var captionText; 
var body = document.body; 
var modal = document.getElementById("myModal");
//var modalCol = document.createElement("div"); 
//modalCol.classList.add("columns"); 
//var modalImgCol = document.createElement("div"); 
//modalImgCol.classList.add
var modalImg = document.getElementById("img01");
//console.log(img); 

//factors of 140
function fixCaption(cap){
	"use strict";
	cap = cap.replace("PW", "Polywog")
	if(cap.includes("jpg")){
		cap = cap.replace(".jpg", ""); 
	}
	else if (cap.includes("png")){
		cap = cap.replace("png", ""); 
	}
	return cap; 
}
console.log(docFrag); 
function clothes_grid(){
	"use strict"; 
	for (var i=0; i<3; i++){
		newRow = document.createElement("div"); 
		newRow.classList.add("columns", "is-multiline", "is-mobile", "is-centered", "has-margin-right-100", "has-margin-left-100","has-padding-left-35", "has-padding-right-35"); 
		for (var ind=0; ind<3; ind++){
			imgCol = document.createElement("div"); 
			imgCol.classList.add("column", "image", "is-one-third-desktop", "is-one-third-mobile");
			img = document.createElement("img"); 
			img.classList.add("lazyload", "sq-img-app"); 
			captionText = appImgs.shift(); 
			img.src = "../Tandon-Poly-Archives-Project/img/curated imgs/" + captionText;  
			captionText = fixCaption(captionText); 
			img.alt = captionText;
			imgCol.appendChild(img); 
			img.onclick = function(){
			  modal.style.display = "block";
		      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
			  body.style.position = 'fixed';
			  body.style.top = `-${scrollY}`;
			  modalImg.src = this.src;
			  caption.innerHTML = this.alt; 
//			  console.log("clicked: " + captionText); 
			}; 			
			newRow.appendChild(imgCol); 
		}
		docFrag.appendChild(newRow); 
	}
	body.append(docFrag); 	
	console.log("In Func..."); 
}
clothes_grid(); 
console.log("Done"); 
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function(){
  "use strict";
  modal.style.display = "none";
  const scrollY = body.style.top; 
  body.style.position = ''; 
  body.style.top=''; 
  window.scroll({behavior:'auto'}); 
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
//  window.scroll({behavior:'smooth'}); 

}; 

window.addEventListener('scroll', function(){
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
}); 

