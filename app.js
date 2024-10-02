document.addEventListener('DOMContentLoaded', ()=> {
    const display = document.getElementById('display');
    const keyInputs = document.getElementsByClassName('inputValue');
    const clearDisplay =document.getElementById('clear-display');
    const backSpace = document.getElementById('back-space');
    const equal = document.getElementById('equal');
    
    display.value = '0';

    Array.from(keyInputs).forEach(keyInput => {
        keyInput.addEventListener('click',function () {
            if(display.value === '0') {
                display.value = keyInput.value;
            }else {
                display.value += keyInput.value;
            }
        });
    });

    function refresh() {
            display.value = '0'
    };

    clearDisplay.addEventListener('click', function() {
        refresh();
    })
    
    backSpace.addEventListener('click', function() {
        if (display.value.length > 1) {
            display.value = display.value.slice(0, -1);
        }else{
            display.value = '0';
        }
    });

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
    

    equal.addEventListener('click', function() {
        calculate();
        // refresh();
    });
    
});