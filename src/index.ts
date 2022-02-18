import { isInterfaceDeclaration } from "typescript";
import shuffle from "./helpers/shuffle";

const bungkus = <HTMLDivElement>document.getElementById("bungkus");

const createButtons = () => {
  for (let ch of "TYPOSCRIPT"){
    let el = <HTMLInputElement>document.createElement("input")
    el.type = "text";
    el.value = ch;
    el.className = "kotak";
    bungkus.appendChild(el);
  };
}

const shakeButtons = () => {
  let buttons = document.getElementsByClassName("kotak");
  var arr = Array.prototype.slice.call( buttons )
  shuffle(arr);
  for (let element of arr){ 
    bungkus.appendChild(element);
  } 
}

(() => {
  createButtons()
})()


const shuffleButton = <HTMLButtonElement>document.querySelector("#shuffle");
shuffleButton.addEventListener("click", shakeButtons);
