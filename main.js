const strengthEls = document.querySelectorAll(".inner_box");
const passwordDisplayEl = document.querySelector(".generated");
const generateBtn = document.querySelector(".generate");
const copyEl = document.querySelector(".copy")
let copy = false
let passwordStrength = "easy";
let password = ""
strengthEls.forEach((el) => {
  el.addEventListener("click", () => {
    copy = false
    removeActiveClasses();
    passwordStrength = el.innerHTML.toLowerCase();
    el.classList.add(`${el.innerHTML.toLocaleLowerCase()}`);
    passwordDisplayEl.classList.add(`${el.innerHTML.toLowerCase()}`);
  });
});
function removeActiveClasses() {
  passwordDisplayEl.setAttribute("class", "generated");
  strengthEls.forEach((el) => {
    passwordDisplayEl.innerHTML = `Click Generate <span class="copy">Copy</span>`
    el.setAttribute("class", "inner_box");
  });
}
generateBtn.addEventListener("click", createPassword);
function createPassword() {
  password = ""
  if (passwordStrength == "easy") {
    let char = "abcdefghijklmnopqrstuvwxyz"
    generatePassword(char)
  } else if (passwordStrength == "medium") {
    let char = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    generatePassword(char)
  } else {
    let char = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    generatePassword(char)
  }

}
function generatePassword(char){
  function randomNumberGenerator(){
    let random = Math.floor(Math.random()*char.length)
    return random
  }
  for(let i = 0; i < 8; i++){
    let randomIndex = randomNumberGenerator();
    password += char[randomIndex]
  }
  copy = true;
  passwordDisplayEl.innerHTML = `${password} <span class="copy">Copy</span>`
}
passwordDisplayEl.addEventListener("mousemove", ()=>{
  if(copy){
    copyEl.classList.add("copy_hover")
  }else{
    copyEl.classList.remove("copy_hover")
  }
})
passwordDisplayEl.addEventListener("mouseout", ()=>{
    if(copy){
      copyEl.classList.remove("copy_hover")
      copyEl.innerHTML = "Click to Copy"
    }
})
passwordDisplayEl.addEventListener("click", ()=>{
  copyEl.innerHTML = "Copied"
  navigator.clipboard.writeText(password);
})