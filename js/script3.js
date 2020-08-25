// Задача 6-3
// filter, map
// Получи массив имен пользователей (значение свойства name) по полу (значение свойства gender).

// Используй деструктурирующее присваивание для параметра функции ({name}) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.
import { default as users } from './users.js';
console.table(users);

const getUsersWithGender = (array, genderToFind) =>
  array.filter(({ gender }) => gender === genderToFind).map(({ name }) => name);

console.log(getUsersWithGender(users, 'male'));
