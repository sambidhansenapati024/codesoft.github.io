// Get the input element and buttons
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// Initialize the string to store the input
let string = "";

// Loop through each button and add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                // Replace '%' with '/100' before evaluating
                string = string.replace(/%/g, '/100');
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = 'Error';
            }
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
