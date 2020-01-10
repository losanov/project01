function myFirstApp(name, age) {
        alert(`Привет, меня зовут ${name} и это моя первая программа!`);

        function showSkills() {
                let skills = ['html', 'css', 'js']
                for (let i = 0; i < skills.length; i++) {
                        document.writeln('Я владею '  + skills[i] +'\n\r');

                }

        }
         showSkills();

        function checkAge() {

if (age > 18) {
                        alert('you are cool');
                } else {
                        alert('try later');
                }


        }
         checkAge();

        function calcPow(num) {
         return num * num; 

        }
        alert ('квадрат числа равен ' + calcPow(3));

}
myFirstApp("John", 32);