// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt 
// в привязанной верстке
let age_1 = prompt('Введи пару циферок:')
let age_2 = prompt( 'А ещё пару:')
let age_3 = prompt('И ещё парочку:')

function age(f_age1, f_age2, f_age3){
    if (isNaN(+f_age1) || isNaN(+f_age2) || isNaN(+f_age3) ||
    f_age1 == '' || f_age2 == '' || f_age3 == ''){
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

checkAge = age(age_1, age_2, age_3)
alert(checkAge)
