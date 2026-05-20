const aFooter = document.createElement("FOOTER");
aFooter.className = "footer";
aFooter.setAttribute("id", "myfooter");
document.body.appendChild(aFooter);


var today = new Date();
var thisYear = today.getFullYear();

var newFooter = document.querySelector("footer");
console.log(newFooter);

var aCopyright = document.createElement("p");
const copyrightSymbol = "\u00A9";
var copyrightText = copyrightSymbol + "Broudy Negron " + thisYear;
aCopyright.innerHTML = copyrightText;

newFooter.appendChild(aCopyright);

//skills
const skills = ["JavaScript", "HTML", "CSS", "C", "Java", "GDScript", "VSCode", "GitHub", "DaVinci Resolve"];
const skillSection = document.getElementById("skills");
var skillsList = skillSection.querySelector("ul");

for (i = 0; i < skills.length; i++) {

    var skill = document.createElement("li");
    skill.innerHTML = (skills[i]);
    skillsList.appendChild(skill);
}
