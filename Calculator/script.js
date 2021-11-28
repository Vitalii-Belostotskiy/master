window.addEventListener('load', function() {
    let output = document.getElementById('output');
    
    document.querySelectorAll('#calculator .btn').forEach(function(button) {
        button.addEventListener('click', onButtonClick);
    });

    //функция клика по кнопке калькулятора
    function onButtonClick(e) {
        // e - MouseEvent (содержит инфу о клике)
        if(e.target.innerHTML === 'c') {
            output.innerHTML = '0';
            
        } else if(e.target.innerHTML === '÷') {
            // происходит перезапмсь элемента '÷' на математический оператор '/' 
           output.innerHTML += '/';
           
        }  else if(e.target.innerHTML === 'x') {
            //происходит перезапись элемента 'x' на математический оператор '*'
            output.innerHTML += '*';
        } else if(e.target.innerHTML === '=') {
            output.innerHTML = eval(output.innerHTML);
        } else if(output.innerHTML === '0') {
            output.innerHTML = e.target.innerHTML;
        } else {
            output.innerHTML += e.target.innerHTML;
        }
    }
});
