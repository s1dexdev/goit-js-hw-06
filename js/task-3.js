import users from './users.js';

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => users.filter(obj => obj.gender === gender).map(({name}) => name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]