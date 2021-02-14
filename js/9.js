function changeEven(numbers, value) {
  // Пиши код ниже этой строки

  let doubleArr = numbers.map(number => {
    if (number % 2 === 0) {
      number += value;
    }
    return number;
  });
  return doubleArr;
  // Пиши код выше этой строки
}
console.log(changeEven([1, 2, 3, 4, 5], 10));
