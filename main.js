console.log("hey");
const strengthEls = document.querySelectorAll(".inner_box")
const passwordDisplayEl = document.querySelector(".generated")
const generateBtn = document.querySelector(".generate")


let passwordStrength = "easy"
strengthEls.forEach((el) =>{
    el.addEventListener("click", ()=>{
        removeActiveClasses()
        passwordStrength = el.innerHTML.toLowerCase();
        el.classList.add(`${el.innerHTML.toLocaleLowerCase()}`)
        passwordDisplayEl.classList.add(`${el.innerHTML.toLowerCase()}`)
    })
})
function removeActiveClasses(){
    passwordDisplayEl.setAttribute("class", "generated")
    strengthEls.forEach((el) =>{
        el.setAttribute("class", "inner_box")
    })
}
generateBtn.addEventListener("click", createPassword)
function createPassword(){
    if(passwordStrength == "easy"){
        console.log("easy");
    }else if(passwordStrength == "medium"){
        console.log("medium");
    }else{
        console.log("hard");
    }
}