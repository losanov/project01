let age = prompt('Сколько вам лет?', '');

// if (age < 18) {
//     alert('Рановато ещё');
// } else if (age > 100) {
//     alert('Поздновато уже');
// } else {
//     alert('Можетке войти');
// }

switch (age){
    case '18':
            alert('Можетке войти');
            break;
    case '100':
            alert('Поздновато уже');
            break;
    default:
        alert('значение неизвестно');  
}