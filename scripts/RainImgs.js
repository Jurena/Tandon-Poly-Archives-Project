/*jshint esversion: 6 */
var arcImgs= ["PW 1960 - P70 Black Chem E.jpg","PW 1965 - P98 Fencing Inspo.jpg","PW 1966 - P2 Pressure Inspo.jpg","PW 1967 - Inspo 1.jpg","PW 1967 - Inspo 2.jpg","PW 1967 - Inspo 3.jpg","PW 1967 - Inspo 4.jpg","PW 1967 - P175 Mauro Student Council President.jpg","PW 1967 - Polywog Logo Inspo.jpg","PW 1968 - P109 Grad@Grad.jpg","PW 1968 - P132 BSU .jpg","PW 1968 - P61 Word Art Inspo.jpg","PW 1968 - P90 Poet.jpg","PW 1969 - P109 Golana.jpg","PW 1969 - P109 Guitar 2.jpg","PW 1969 - P118 Guitar.jpg","PW 1969 - P118 Ramon Counterweight.jpg","PW 1969 - P118 Room 104.jpg","PW 1969 - P56 Alphas.jpg","PW 1969 - P91 BSU.jpg","PW 1970 - P140 Protest.jpg","PW 1970 - P77 SHEP Scavenger Hunt Student.jpg","PW 1970 - P77 SHEP Scavenger Hunt.jpg","PW 1971 - P60 American Chemical Society.jpg","PW 1972 - P54 Protest.jpg","PW 1973 - P43 Lounging.jpg","PW 1973 - P87 Computer Guys (2).jpg","PW 1974 - P65 Class of 74.jpg","PW 1975 - P6 Arcade.jpg","PW 1976 - P166 BSU.jpg","PW 1976 - P167 WINO 1.jpg","PW 1976 - P167 WINO 2 .jpg","PW 1976 - P167 WINO 3.jpg","PW 1977 - P12 Lense Repair.jpg","PW 1977 - P132 Wino 1.jpg","PW 1977 - P132 Wino 2.jpg","PW 1977 - P142 Student.jpg","PW 1977 - P170 Premed.jpg","PW 1979 - P122 Point _ Laugh.jpg","PW 1979 - P148 ALAS.jpg","PW 1979 - P159 SBE.jpg","PW 1979 - P32 Marilyn Washington.jpg","PW 1980 - P153 Merit Awards 1.jpg","PW 1980 - P153 Merit Awards 2.jpg","PW 1980 - P154 Merit Awards 3.jpg","PW 1980 - P155 Merit Awards 4.jpg","PW 1980 - P165 NSBE.jpg","PW 1980 - P185 Chilling.jpg","PW 1981 - P132 ALAS.jpg","PW 1981 - P135 BOSS.jpg","PW 1982 - P184 NSBE.jpg","PW 1984 - P65 NASA Recruiter.jpg","PW 1984 - P65 Naval Air Recruiter.jpg","PW 1985 - P121 NSBE.jpg","PW 1985 - P37 Halloween wNSBE .jpg","PW 1985 - P37 Halloween wNSBE 2 .jpg","PW 1985 - P84 MechE.jpg","PW 1987 - P119 NSBE.jpg","PW 1987 - P120 ALAS.jpg","PW 1987 - P122 HSA.jpg","PW 1987 - P125 NSBE.jpg","PW 1987 - P148 Sax.jpg","PW 1987 - P16 Mets.jpg","PW 1988 - P118 HSA.jpg","PW 1988 - P127 Candids.jpg","PW 1988 - P142 Haitian Day1.jpg","PW 1988 - P143 Haitian Day 2.jpg","PW 1988 - P143 Haitian Day 3.jpg","PW 1988 - P143 Haitian Day.jpg","PW 1988 - P155 Awards Banquet.jpg","PW 1988 - P16 Black Women.jpg","PW 1988 - P17 Man on Phone.jpg","PW 1988 - P70 Faculty.jpg","PW 1989 - P102 Protest.jpg","PW 1989 - P108 Awards Banquet.jpg","PW 1989 - P121 Graduates.jpg","PW 1989 - P139 ALAS.jpg","PW 1989 - P141 HSA.jpg","PW 1989 - P145 NSBE.jpg","PW 1989 - P146 SHPE.jpg","PW 1989 - P147 SWE.jpg","PW 1989 - P168 Sit-Ins.jpg","PW 1989 - P168 Sitting.jpg","PW 1989 - P34 Studying.jpg","PW 1989 - P67 Industrial Engineers.jpg","PW 1989 - P88 Job Fair.jpg","PW 1989 - P89 Job Fair.jpg","PW 1989 - P90 Job Fair 2.jpg","PW 1989 - P90 Job Fair.jpg","PW 1989 - P93 Thanksgiving.jpg","PW 1989 - P94 Thanksgiving 2.jpg","PW 1989 - P94 Thanksgiving.jpg","PW 1989 - P95 Thanksgiving.jpg","PW 1992 - P101 Grads.jpg","PW 1992 - P103 Latinas Grads.jpg","PW 1992 - P103 Media.jpg","PW 1992 - P113 Chillin.jpg","PW 1992 - P115 Class.jpg","PW 1992 - P42 BAHA.jpg","PW 1992 - P66 NSBE.jpg","PW 1992 - P66 SHPE.jpg","PW 2001 - P56 SHPE.jpg","PW 2001 - P76 banquet.jpg","PW 2003 - P25 NSBE.jpg","PW 2003 - P29 SHPE.jpg","PW 2003 - P32 West Indian Student Association.jpg","PW 2005 - P32 Student Council.jpg","PW 2005 - P36 NSBE.jpg","PW 2005 - P49 West Indian Student Association 2.jpg","PW 2005 - P49 West Indian Student Association.jpg","PW 1963 - P14 Admin-Design Inspo.jpg","PW 1964 - P6 In-Classroom .jpg"]; 
const URLbase = "../Tandon-Poly-Archives-Project/img/resized Imgs/"; 
var img; 
var alreadyUsed = []; 
var length = arcImgs.length
var result = document.createDocumentFragment(); 
function fillHero() {
	"use strict"; 
	for (var i =0; i<=40; i++){
		var ind = Math.floor(Math.random() * length); 
		console.log("the Ind: " + ind); 
		img = document.createElement("img"); 
		img.id = "img" +i; 
		img.src = URLbase + arcImgs[ind]; 
		img.alt = "Falling Image from Hero Banner: " +  arcImgs[ind]; 
		result.appendChild(img); 
		length-=1; 
	}
	document.getElementById("heroHead").appendChild(result); 
} 


window.onload = () =>{
	"use strict"; 
	fillHero(); 
};  
fillHero(); 

 