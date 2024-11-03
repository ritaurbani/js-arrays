const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// // 1. Inverti l'ordine degli insegnanti nell'array teachers
// // // e salva il risultato nella variabile reversedTeachers

 const reversedTeachers = [];

for ( let i = teachers.length -1; i>= 0; i--) {
const currentItem = teachers[i];
reversedTeachers.push(currentItem);
console.log(reversedTeachers);  

// 1 iterazione
// i = 6
// curItem = luca
// i-- = 5

// 2.iterazione

// i = 5
// currentitem =lewis
// 4

// 3.iterazione
// i=4
// curritem = carlo
// 3

// 4.iterazione
// i=3
// currentitem= phil
// 2

// 5.iterazione
// i = 2
// currentitem = fabio
// 1

// 6.iterazione
// i = 1
// currentitem = ed
// 0

// 7 iterazione
// i=0
// currentitem = Nathan


// // 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// // con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = [];

for ( let i=0; i<teachers.length; i++) {
  const currentItem = teachers[i];
  if(currentItem.length >= 5) {  
    longNames.push(currentItem)
  } 
}
console.log(`longNames: ${longNames}`);


//3. Rimuovi 'Ed' dall'array teachers


const newTeacher = teachers.splice(1,1)
console.log(teachers)