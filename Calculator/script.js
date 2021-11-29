window.addEventListener('load', function() {
    let output = document.getElementById('output');
   
    document.querySelectorAll('#calculator .btn').forEach(function(button) {
        button.addEventListener('click', onButtonClick);
    });

    //функция клика по кнопке калькулятора
    function onButtonClick(e) {
        // e - MouseEvent (содержит инфу о клике)
        if(e.target.innerHTML === 'c') {
            //если нажата кнопка 'с' то стирается все из текстового поля
            output.innerHTML = '0';
            
        } else if(e.target.innerHTML === '÷') {
            // происходит перезапись элемента '÷' на математический оператор '/' 
           output.innerHTML += '/';
           
        }  else if(e.target.innerHTML === 'x') {
            //происходит перезапись элемента 'x' на математический оператор '*'
            output.innerHTML += '*';
        }  else if(e.target.innerHTML === '=') {
            // если нажата кнопка '=' то приведя выражение
            // в полее output к js, выполняется вычисление
            output.innerHTML = eval(output.innerHTML);
        } else if(output.innerHTML === '0') {
            // если output содержит только '0'
            // то стереть '0' и записать значения
            // кнопки в текстовое поле
            output.innerHTML = e.target.innerHTML;
        } else {
            // добавление значения кнопки в текстовое поле
            output.innerHTML += e.target.innerHTML;
        }
    }
    
});
// стереть символ в output справа на лево
function back() {
    let exp = output.innerHTML;
    output.innerHTML = exp.substring(0, exp.length - 1);
};


