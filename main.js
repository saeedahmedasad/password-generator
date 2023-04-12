const strengthEls = document.querySelectorAll(".inner_box");
const passwordDisplayEl = document.querySelector(".generated");
const generateBtn = document.querySelector(".generate");

let passwordStrength = "easy";
strengthEls.forEach((el) => {
  el.addEventListener("click", () => {
    removeActiveClasses();
    passwordStrength = el.innerHTML.toLowerCase();
    el.classList.add(`${el.innerHTML.toLocaleLowerCase()}`);
    passwordDisplayEl.classList.add(`${el.innerHTML.toLowerCase()}`);
  });
});
function removeActiveClasses() {
  passwordDisplayEl.setAttribute("class", "generated");
  strengthEls.forEach((el) => {
    passwordDisplayEl.innerHTML = "Click Generate"
    el.setAttribute("class", "inner_box");
  });
}
generateBtn.addEventListener("click", createPassword);
function createPassword() {
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
  let password = ""
  function randomNumberGenerator(){
    let random = Math.floor(Math.random()*char.length)
    return random
  }
  for(let i = 0; i < 10; i++){
    let randomIndex = randomNumberGenerator();
    password += char[randomIndex]
  }
  passwordDisplayEl.innerHTML = password
}