let input = document.getElementById('input'),
    string = "",
    buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if(buttonText == '='){
            string = eval(string);
            input.value = string;
          }
        
        else if(buttonText == 'C'){
            string = ""
            input.value = string;
          }
        
        else if(buttonText == 'DE'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else{ 
            string += buttonText;
            input.value = string;
            }

    })
}

