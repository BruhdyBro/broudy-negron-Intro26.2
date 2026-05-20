const aFooter = document.createElement("FOOTER");
aFooter.className = "footer";
aFooter.setAttribute("id", "myfooter");
document.body.appendChild(aFooter);


var today = new Date();
var thisYear = today.getFullYear();

var footer = document.querySelector("footer");
console.log(footer);

var copyright = document.createElement("p");
const copyrightSymbol = "\u00A9";
copyright.innerHTML = copyrightSymbol + "Broudy Negron " + thisYear;

footer.appendChild(copyright);

//skills
const skills = ["JavaScript", "HTML", "CSS", "C", "Java", "GDScript", "VSCode", "GitHub", "DaVinci Resolve"];
const skillsSection = document.getElementById("skills");
var skillsList = skillsSection.querySelector("ul");

for (let mySkill in skills) {

    var skill = document.createElement("li");
    skill.innerHTML = (skills[mySkill]);
    skillsList.appendChild(skill);
}
