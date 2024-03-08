let btn = document.querySelectorAll("button");
let input = document.querySelector("input");
let equalbtn = document.querySelector(".equal-btn");

let string = "";

input.disabled = true;

let arr = Array.from(btn);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.classList.contains('scientific-btn')) {
            handleScientificFunction(e.target.innerHTML);
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

function handleScientificFunction(func) {
    switch (func) {
        case 'sin':
            input.value = Math.sin(eval(string));
            break;
        case 'cos':
            input.value = Math.cos(eval(string));
            break;
        case 'tan':
            input.value = Math.tan(eval(string));
            break;
        case 'x²':
            input.value = Math.pow(eval(string), 2);
            break;
        case 'log':
            input.value = Math.log10(eval(string));
            break;
        case 'antilog':
            input.value = Math.pow(10, eval(string));
            break;
        case 'M+':
            // Handle M+
            break;
        case 'M-':
            // Handle M-
            break;
        case 'Hyp':
            // Handle Hyp
            break;
        case 'Rcl':
            // Handle Rcl
            break;
        case '√':
            input.value = Math.sqrt(eval(string));
            break;
        default:
            break;
    }
}
