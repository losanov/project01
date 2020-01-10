// let answers = [],
//     questions = [
//         'Как вас зовут?',
//         'Как ваша фамилия?',
//         'Сколько вам лет?'

//     ];

// for (let i = 0; i < questions.length; i++) {
//     answers[i] = prompt(questions[i], '');
// }

// document.write(answers);



// let answers = [],
//     questions = [
//         'Как вас зовут?',
//         'Как ваша фамилия?',
//         'Сколько вам лет?'

//     ];

// let i = 0; 
// do {
//     answers[i] = prompt(questions[i], '');
//     i++;

// } while (i < questions.length);

// document.write(answers);





let answers = [],
    questions = [
        'Как вас зовут?',
        'Как ваша фамилия?',
        'Сколько вам лет?'

    ];


let i = 0;
while (i < questions.length) {
    answers[i] = prompt(questions[i], '');
    i++;
}
document.write(answers);