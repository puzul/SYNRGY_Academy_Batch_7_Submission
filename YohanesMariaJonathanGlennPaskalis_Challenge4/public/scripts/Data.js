class Data {
  static fetchData = async () => {
    let carsFetched = [];
    await fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        data.forEach((car) => {
          const carObject = new Car(car);
          carsFetched.push(carObject);
        })
      }
    })
    .catch(err => {
      console.error('Error fetching JSON', err);
    })
    return [...carsFetched];
  }

  static filterData = async (filter) => {
    const carsFetched = await this.fetchData();
    let carsFiltered = [];
    carsFetched.forEach((carObject, index) => {
      const driverTypeValid = carObject.available === filter.driverType;
      const dateAndTimeInput = new Date(filter.dateAndTime);
      const dateAndTimeFetched = new Date(carObject.availableAt);
      const dateAndTimeValid = dateAndTimeInput >= dateAndTimeFetched;
      const carSeatsValid = filter.carSeats ? (filter.carSeats <= carObject.capacity) : true;
      if (driverTypeValid && dateAndTimeValid && carSeatsValid) carsFiltered.push(carObject);
    })
    return carsFiltered;
  } 
}