

let div = document.createElement('div');
let div_2 = document.createElement('div');
let body = document.getElementById("body");

div.className = "planet";
div.style.backgroundColor = "blue";
div_2.className = "moon";

body.appendChild(div);
div.appendChild(div_2);

