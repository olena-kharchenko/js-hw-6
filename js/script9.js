import { default as users } from './users.js';
console.table(users);

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

function getNumbersOfFriends({ friends }) {
  return friends.length;
}

const getNamesSortedByFriendsCount = array => {
  const first = [...array];

  return first
    .sort((a, b) => getNumbersOfFriends(a) - getNumbersOfFriends(b))
    .map(({ name }) => name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
