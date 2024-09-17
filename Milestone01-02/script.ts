const button = document.getElementById("skillbutton") as HTMLButtonElement
const skill = document.getElementById("skillsection") as HTMLElement

button.addEventListener("click",function (){
    if(skill.style.display === "none"){
        skill.style.display = "block"
    }else{
        skill.style.display = "none"
    }
})