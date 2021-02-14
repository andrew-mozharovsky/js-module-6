function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  return commonElements;
  // Пиши код выше этой строки
}
console.log(getCommonElements([1, 2, 3], [2, 4]));
