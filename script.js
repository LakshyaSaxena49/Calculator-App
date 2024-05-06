let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
//create an array with from property so that it can create an array of buttons.
let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if(e.target.innerHTML == '='){
      string = eval(string);
      input.value = string;
    }

    else if(e.target.innerHTML == 'AC'){
      string = "";
      input.value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
      string = string.substring(0, string.length-1);
      input.value = string;
    }  
    else{
      string += e.target.innerHTML;
      input.value = string;
    }
  })
})