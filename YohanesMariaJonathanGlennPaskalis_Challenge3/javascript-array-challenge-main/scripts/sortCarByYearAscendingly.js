function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let i=0; i < cars.length; i++) {
    if (i>0) {
      for (let j=i-1; j >= 0; j--) {
        const checkedCar = result[j+1];
        const comparisonCar = result[j];
        if (checkedCar.year<comparisonCar.year) {
          result[j+1] = comparisonCar;
          result[j] = checkedCar;
        }
        else {
          break
        }
      }
    }
  }

  console.log(result);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
