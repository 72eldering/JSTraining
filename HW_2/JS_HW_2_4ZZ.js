// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

let lenStr = 0; // длина слова / 2
let flag = true; 
let elemSm = ''; // преобразованная строка
console.clear();

const isPalindrom = function (...world){
  world.forEach( elem => {

  lenStr = elem.length / 2;
  elemSm = elem.toLowerCase()
  elemSm = elemSm.replaceAll(' ', ''); // пробелы не нужны
  flag = true;

  // Сверяем по-символьно начало и окончание строки
  for (let i = 0; i < lenStr; i++) {
    if (elemSm[i] == elemSm[elemSm.length - 1 -i]){
       continue;
    } else {
      flag = false;
      break;
    }     
  }

  if (flag){
    console.log('`' + elem + '`-- полиндром');
  } else{
    console.log('`' + elem + '`-- не полиндром');
  }
})

}
isPalindrom('abba', 'Abba', 'ces', 'потоп', 'reser', 'А роза упала на лапу Азора', 'казак', 'fhgskg')