function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach(element => (totalPrice += element));

  // Пиши код выше этой строки
  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
