function kabisat(stTahun, endTahun) {
  const rangeTahun = [];
  for (let i = stTahun; i <= endTahun; i++) {
    rangeTahun.push(i);
  }
  const newArr = [];
  rangeTahun.forEach((tahun) => {
    if (tskabisat(tahun)) newArr.push(tahun);
  });
  return newArr;
}

function tskabisat(tahun) {
  if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 100 === 0 && tahun % 400 === 0)) {
    return tahun;
  } else {
    return false;
  }
}
console.log(kabisat(1900, 2020));
