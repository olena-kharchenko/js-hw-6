import { default as users } from './users.js';
console.table(users);

// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (array, friendName) =>
  array
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
