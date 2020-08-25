import { default as users } from './users.js';
console.table(users);

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = array =>
  array.reduce((acc, { balance }) => acc + balance, 0);

console.log(calculateTotalBalance(users)); // 20916
