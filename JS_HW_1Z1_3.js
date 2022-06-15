// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
let age_1 = 17
let age_2 = 18
let age_3 = 61

function age(f_age1, f_age2, f_age3){
    if (f_age1 < f_age2) {
        return 'You don’t have access cause your age is ' + f_age1 + ' It’s less then ' + f_age2
    } else if (f_age1>= f_age2 && f_age1 < f_age3){
        return 'Welcome  !'
    } else if (f_age1 > f_age3){
        return 'Keep calm and look Culture channel'
    } else {
        return 'Technical work'
    }
}

let checkAge = age(age_1, age_2, age_3)
console.log(checkAge)

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
// И если он не Number - кидалась ошибка.

function age2(f_age1, f_age2, f_age3){
    if ((typeof(f_age1) != 'number') || (typeof(f_age2) != 'number') || (typeof(f_age3) != 'number')){
        return 'Ошибка!!! Нужны числа'
    } else if (f_age1 < f_age2) {
        return 'You don’t have access cause your age is ' + f_age1 + ' It’s less then ' + f_age2
    } else if (f_age1>= f_age2 && f_age1 < f_age3){
        return 'Welcome  !'
    } else if (f_age1 > f_age3){
        return 'Keep calm and look Culture channel'
    } else {
        return 'Technical work'
    }
}

checkAge = age2(age_1, age_2, age_3)
console.log(checkAge)

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось,
// преобразовываясь в number
// age_1 = true
// age_1 = false
// age_1 = undefined
// age_1 = Infinity
// age_1 = ''
// age_1 = ' 4'
// age_1 = 'dfg'
// age_1 = NaN

 function age3(f_age1, f_age2, f_age3){
    if (
        f_age1 == 'Infinity' || f_age2 == 'Infinity' || f_age3 == 'Infinity'|| 
         typeof(f_age1) == 'boolean' || typeof(f_age2) == 'boolean' || typeof(f_age3) == 'boolean'
        ){
        return 'Ошибка!!! Нужны числа'
    } else {
    f_age1 = Number(f_age1)
    f_age2 = Number(f_age2)
    f_age3 = Number(f_age3)
    }
    if (
         isNaN(f_age1) || isNaN(f_age2) || isNaN(f_age3) ||
          f_age1 == '' || f_age2 == '' || f_age3 == ''  
        )  {
        return 'Ошибка!!! Нужны числа'
     } else if (f_age1 < f_age2) {
         return 'You don’t have access cause your age is ' + f_age1 + ' It’s less then ' + f_age2
     } else if (f_age1>= f_age2 && f_age1 < f_age3){
         return 'Welcome  !'
     } else if (f_age1 > f_age3){
         return 'Keep calm and look Culture channel'
     } else {
         return 'Technical work'
     }
 }

checkAge = age3(age_1, age_2, age_3)
console.log(checkAge)
