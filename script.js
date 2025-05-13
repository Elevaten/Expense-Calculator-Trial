let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let inputField2 = document.getElementById('inputField2');
let totalArray = [];
let endButton = document.getElementById('end');
const label = document.getElementById('label');



addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('h1');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value + " | " + inputField2.value;
    toDoContainer.appendChild(paragraph);
   
        totalArray.push(Number(inputField2.value));
        console.log("User inputs:", totalArray);

    inputField.value = "";
    inputField2.value = "";

    
})

function calculateSum() {

    let array = totalArray;
    let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var paragraph = document.createElement('h1');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = "Total: ₱" + sum;
    toDoContainer.appendChild(paragraph);
  }

function reset() {
    location.reload();
}
function validateInput(input) {
 
    input.value = input.value.replace(/\D/g, '');
}
