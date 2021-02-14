// Пиши код ниже этой строки
const getTotalFriendCount = users => {
  return users.reduce((acc, user) => {
    return acc + user.friends.length;
  }, 0);
};
// Пиши код выше этой строки
