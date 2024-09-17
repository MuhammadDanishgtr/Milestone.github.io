var button = document.getElementById("skillbutton");
var skill = document.getElementById("skillsection");
button.addEventListener("click", function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = "none";
    }
});
