const testArr = [1, 2, 1, 2, 3, 5, 1, 4, 2, 1, 5, 1];

const arrToObj = testArr.reduce((acc, value) => {
  return {
    ...acc,
    [value]: acc[value] ? (acc[value] += 1) : 1,
  };
}, {});

console.log(arrToObj);
