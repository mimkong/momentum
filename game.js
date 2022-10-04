const setNum = document.querySelector("#setnum");
const ranNum = document.querySelector("#rannum");
const greeting = document.querySelector("#greeting");

const RANDOM_KEY = "num";

const savedSetNum = localStorage.getItem

function numberSubmit(event) {
    event.preventDefault();
    greeting.classList.add(HIDDEN_CLASSNAME);
    const num = ranNum.value;
    greeting.innerText =  "You chose " + num , "the machine chose: " 
    greeting.innerText = "You ";
    localStorage.setItem(RANDOM_KEY, num);
    greeting.classList.remove(HIDDEN_CLASSNAME);
}