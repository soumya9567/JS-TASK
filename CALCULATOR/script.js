

const display = document.getElementById('display'); 

function onClick(value) {
  display.value += value; 
}

function clearDisplay(){
  display.value = "";
}

function clearLastElement() {
  display.value = display.value.slice(0, -1);
}



function calculateResult(){
  var result = eval(display.value)
  display.value = result;
}