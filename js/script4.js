// Получить массив только неактивных пользователей (поле isActive).
import { default as users } from './users.js';
console.table(users);
// const getInactiveUsers = users => {
//   // твой код
// };

const getInactiveUsers = array => array.filter(({ isActive }) => !isActive);

console.log(getInactiveUsers(users));
