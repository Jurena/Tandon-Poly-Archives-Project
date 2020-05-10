/*jshint esversion: 6 */

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
var scrolly; 
//curently holds all apparel, must be curated
var appImgs = ["the Host (WINO), 1976.jpg","Alpha Phi Alpha (ΑΦΑ), 1969.jpg","Chemical Engineer, 1960.jpg","Haitian Student Association,1987-1988.jpg","Protests, 1970 & 1989.jpg","Protests Crew, 1970 & 1989.jpg","Ramon-Counterweight, 1969.jpg","the Engineers,1976-1989.jpg","the Student, 1977.jpg","the Poet, 1968.jpg","Protester, 1970.jpg","Haitian Student Association,1987-1988.jpg","the Logo, 1967.jpg","the National Society of Black Engineers, 1982 & 1989.jpg","the (Big) Logo, 1967.jpg"];
var appDict = {"the Host (WINO), 1976.jpg":"PW 1976 - P167 WINO 3.jpg",
			   "Alpha Phi Alpha (ΑΦΑ), 1969.jpg":"PW 1969 - P56 Alphas.jpg",
			   "Chemical Engineer, 1960.jpg":"PW 1960 - P70 Black Chem E.jpg",
			   "Haitian Student Association,1987-1988.jpg":"PW 1987 - P122 HSA.jpg,PW 1988 - P118 HSA.jpg",
			   "Protests, 1970 & 1989.jpg":"PW 1970 - P140 Protest.jpg,PW 1989 - P168 Sit-Ins.jpg",
			   "Protests Crew, 1970 & 1989.jpg":"PW 1970 - P140 Protest.jpg,PW 1989 - P168 Sit-Ins.jpg",
			   "Ramon-Counterweight, 1969.jpg":"PW 1969 - P118 Ramon Counterweight.jpg",
			   "the Engineers,1976-1989.jpg":"PW 1976 - P166 BSU.jpg,PW 1987 - P122 HSA.jpg,PW 1988 - P118 HSA.jpg,PW 1989 - P145 NSBE.jpg",
			   "the Student, 1977.jpg":"PW 1977 - P142 Student.jpg",
			   "the Poet, 1968.jpg":"PW 1968 - P90 Poet.jpg",
			   "Protester, 1970.jpg":"PW 1970 - P140 Protest.jpg",
			   "Haitian Student Association,1987-1988.jpg":"PW 1987 - P122 HSA.jpg,PW 1988 - P118 HSA.jpg",
			   "the Logo, 1967.jpg":"PW 1967 - Polywog Logo Inspo.jpg",
			   "the National Society of Black Engineers, 1982 & 1989.jpg":"PW 1982 - P184 NSBE.jpg,PW 1989 - P145 NSBE.jpg",
			   "the (Big) Logo, 1967.jpg":"PW 1967 - Polywog Logo Inspo.jpg"
			  };
var caption = document.getElementById("caption");
var oldCap = caption.cloneNode(true); 
var captionText; 
var body = document.body; 
var modal = document.getElementById("myModal");

var modColumns = document.getElementById("ModalColumns"); 
var modCol = document.getElementById("col"); 
//modalCol.classList.add("columns"); 
//var modalImgCol = document.createElement("div"); 
//modalImgCol.classList.add
var modalImg = document.getElementById("img01");
//console.log(img); 
var line = document.createElement("hr");
var refLine = document.getElementById("refLine"); 
var refImages = document.getElementById("refImages"); 
var done = false; 
//factors of 140
function fixCaption(cap){
	"use strict";
	cap = cap.replace("PW", "Polywog"); 
	if(cap.includes("jpg")){
		cap = cap.replace(".jpg", ""); 
	}
	else if (cap.includes("png")){
		cap = cap.replace("png", ""); 
	}
	return cap; 
}

function styleModal(){
	"use strict"; 
	modColumns.classList.add("columns","is-gapless","is-multiline","is-centered"); 
	modCol.classList.add("column","is-half","has-text-centered","has-background-white", "is-size-3");
	caption.classList.add("has-text-black");
	caption.setAttribute("style", ""); 
	caption.style.paddingTop = "0";
	caption.style.paddingBottom = "-50px";
	caption.style.marginBottom = "-120px"; 
	caption.style.marginTop = "0"; 
	//swap caption and image: 
	var parent = caption.parentNode;
	parent.insertBefore(caption, parent.firstChild);
	line.setAttribute("style",""); 
	refLine.setAttribute("style",""); 
	line.style.display="visible"; 
	if (done===false){
		parent.insertBefore(line,document.getElementById("zoom")); 
	}
	refImages.classList.add("has-text-centered", "is-size-4", "has-text-bold","column"); 
	var populate = refText(); 
	refImages.appendChild(populate); 
	console.log("Modal Styled"); 
}

function refText(){
	var docFrag = document.createDocumentFragment(); 
	var pTag = document.createElement("p");
	pTag.setAttribute("style", "margin-top:-30px"); 
	var txt = document.createTextNode("In this Piece: "); 
	pTag.appendChild(txt); 
	docFrag.appendChild(pTag); 
	var refImg = document.createElement("img"); 
	refImg.setAttribute("style","height:50%;width:50%")
	refImg.src= "../Tandon-Poly-Archives-Project/img/resized Imgs/PW 1968 - P90 Poet.jpg"; 
	docFrag.appendChild(refImg); 
	return docFrag; 
}
function unstyleModal(){
	"use strict"; 
	modColumns.classList.remove("columns","is-gapless","is-multiline","is-centered"); 
	modCol.classList.remove("column","is-half","has-text-centered","has-background-white");
	caption.classList.remove("has-text-black");
	//swap caption and image back to normal: 
	var swapThis = document.getElementById("zoom"); 
	var parent = swapThis.parentNode;
	parent.insertBefore(swapThis, parent.firstChild);
	line.style.display= "none"; 
	refLine.style.display= "none"; 
	caption.removeAttribute("style"); 
	refImages.classList.remove("has-text-centered", "is-size-4", "has-text-bold","column"); 
	while (refImages.firstChild){
		refImages.removeChild(refImages.firstChild); 
	}
	console.log("Modal UnStyled"); 

}
function clothes_grid(){
	"use strict"; 
	for (var i=0; i<5; i++){
		newRow = document.createElement("div"); 
		newRow.classList.add("columns", "is-multiline", "is-mobile", "is-centered", "has-margin-right-100", "has-margin-left-100","has-padding-left-35", "has-padding-right-35"); 
		for (var ind=0; ind<3; ind++){
			imgCol = document.createElement("div"); 
			imgCol.classList.add("column", "is-one-third-desktop", "is-one-third-mobile");
			img = document.createElement("img"); 
			img.classList.add("lazyload", "sq-img-app"); 
			captionText = appImgs.pop(); 
			img.src = "../Tandon-Poly-Archives-Project/img/curated imgs/" + captionText;  
//			img.srcset = appDict[captionText]; 
			captionText = fixCaption(captionText); 
			img.alt = captionText;
			imgCol.appendChild(img); 
			img.onclick = function(){
			  "use string"; 
			  scrolly = document.documentElement.style.getPropertyValue('--scroll-y');
			  console.log("Scroll Y on Image Click: " + scrolly); 
			  modal.style.display = "block";
			  body.style.position = 'fixed';
			  body.style.top = `-${parseInt(scrolly || '0')}px`;
			  styleModal(); 
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
// Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal
close.addEventListener('click',() => {
	"use strict"; 
	unstyleModal(); 
//	console.log("Closing the modal: " + body.style.top); 
//	modal.style.display = "none";
//	console.log(typeof(body.style.top)); 
//	if (body.style.top.length !== 0){
//		scrolly =''; 
//		scrolly = body.style.top; 
//	}
//	console.log("Scroll Y: " +scrolly); 
//	body.style.position = ''; 
//	body.style.top=''; 
//	window.scroll({behavior:'auto'}); 
//	window.scrollTo(0, parseInt(scrolly || '0') * -1);
}); 

//
//window.addEventListener('scroll', function(){
//  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
//}); 
//

