function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки
  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  // Пиши код выше этой строки
  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
