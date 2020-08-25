// Получить пользоваля (не массив) по email (поле email, он уникальный).
import { default as users } from './users.js';
console.table(users);

// function getMail({ email }) {
//   return email;
// }

const getUserWithEmail = (array, emailToFind) =>
  array.find(({ email }) => email === emailToFind);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
