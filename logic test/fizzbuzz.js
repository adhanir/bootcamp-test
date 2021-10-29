const fizzBuzz = (num) => {
  let arrayTemp = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) arrayTemp.push("Fizz Buzz");
    else if (i % 3 === 0) arrayTemp.push("Fizz");
    else if (i % 5 === 0) arrayTemp.push("Buzz");
    else arrayTemp.push(i.toString());
  }
  console.log(arrayTemp);
};

fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(15);
