// задание 1
// Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10,
//  начиная со степени 1

const te = document.getElementById("text_out")
te.innerHTML +='задание 1' + '</br>'
te.innerHTML += '</br>'

let dva = 2
for (i = 1; i <= 10; i++){
    te.innerHTML += '2^'+ i + ' = ' + dva + '</br>';
    dva *= 2;
}
te.innerHTML += '</br>'

// задание 1*. Преобразовать 1 задачу в функцию,
// принимающую на вход степень, в которую будет возводиться число 2

te.innerHTML +='задание 2' + '</br>'
te.innerHTML += '</br>'
let stepn = +prompt ('Введи степень')
dva = 2
for (i = 1; i <= stepn; i++){
    te.innerHTML += '2^'+ i + ' = ' + dva + '</br>';
    dva *= 2;
}