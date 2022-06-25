// 3**.  Написать функцию, которая принимает на вход слово. 
// Задача функции посчитать и вывести в консоль, 
// сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'


// гласные (добавить буквы нужного вам языка)
let sGl = ['e', 'y', 'u', 'i', 'o', 'a', 'j',
           'у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю', 'ё'] 

// согласные
let sSgl = ['q', 'w', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h',
            'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
            'ц', 'к', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ф', 'в', 
            'п', 'р', 'л', 'д', 'ж', 'ч', 'с', 'м', 'т', 'б']

// несогласные
let nSgl = ["`", "'", "-", 'ь', 'ъ']

let sumGl = 0 // к-во гласных букв
let sumSgl = 0 // к-во согласных букв
let lenStr = 0 // длина слова
let sim = '' // текущий символ слова
let strokaSm = '' // символы слова в нижнем регистре
let flag = true // проверка недопустимых символов

const getWordStructure = function (...stroka){
    stroka.forEach(elem => {
        strokaSm = elem.toLowerCase() // перевод символов слова в нижний регистр
        
        if (strokaSm.indexOf(' ') < 0) { // проверка на отсутствие пробела
            lenStr = strokaSm.length
            sumGl = 0
            sumSgl = 0
            flag = true
            // перебираем слово по-символьно
            for (let i = 0; i < lenStr; i++) {
                sim = strokaSm.slice(i,i+1)
                // ищем символ в массивах букв:
                switch (true) {
                    //гласные
                    case sGl.indexOf(sim) >= 0: 
                      sumGl += 1
                      break;
                    // согласные  
                    case sSgl.indexOf(sim) >= 0: 
                      sumSgl += 1
                      break;
                    // несогласные
                    case nSgl.indexOf(sim) >= 0:
                      break;
                    // недопустимые
                    default:
                      flag = false
                      break;
                }
            }
            if (flag) {
                console.log('Слово (' + elem + ') состоит из ' + sumGl + ' гласных и ' +
                 sumSgl +  ' согласных букв')
            } else {
                console.log('Слово (' + elem + ') содержит недопустимые символы')
            }
        } else {
            console.log('Нужно ввести одно слово')
        }
})
}
// getWordStructure('case', 'Case', 'Check-list', '34g32', 'паGа', 'пак кап')
getWordStructure('Test,Case')