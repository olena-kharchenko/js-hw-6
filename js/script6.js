import { default as users } from './users.js';
console.table(users);

// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) =>
//   users.filter(({ age } = user) => age >= min && age <= max);
const getUsersWithAge = (array, min, max) =>
  array
    .filter(({ age }) => age >= min && age <= max)
    .map(({ name, email }) => ({ ['name']: name, ['email']: email }));
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
