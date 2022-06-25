// 2. Написать скрипт, который выведет 5 строк в консоль таким образом,
//    чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let smail = ':)'
for (let i = 0; i < 5; i++) {
    console.log(i+1 + ' ' + smail);
    smail += ':)'    
}


// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку,
//     которая и будет выводиться в консоль (как в условии смайлик),
//     а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows){
    smail = stroka
    for (let i = 0; i < numberOfRows; i++) {
        console.log(i+1 + ' ' + smail);
        smail += stroka    
    }
}
printSmile ('#', 8)