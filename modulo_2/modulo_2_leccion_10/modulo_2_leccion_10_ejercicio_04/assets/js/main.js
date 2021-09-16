'use strict';
//variables
const userInput = document.querySelector('.js-userinput');
const btn = document.querySelector('.js-btn');
let orgname = document.querySelector('.js-userinput').value;

fetch(`https://api.github.com/orgs/${orgname}`)
.then((response) => response.json())