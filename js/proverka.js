function dashatize(num) {
  const arrOfStr = String(num).split('');
  let result = '';

  const arrOfNumbers = arrOfStr
    .map(num => (Number(num) % 2 ? `-${num}-` : num))
    .join('')
    .split('');
  console.log(arrOfNumbers);
  result = arrOfNumbers;

  if (result[0] === '-') {
    result = result.slice(1);
  }
  if (result[result.length - 1] === '-') {
    result = result.slice(0, result.length - 1);
  }

  for (let i = 0; i < result.length; i += 1) {
    if (
      (result[i] === result[i + 1] && result[i] === '-') ||
      result[0] === '-'
    ) {
      result.splice(i, 1);
    }
  }

  return result.join('');
}

console.log(dashatize(-1));
