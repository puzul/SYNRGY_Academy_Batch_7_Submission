class App {
  constructor () {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carsContainerDiv = document.getElementById("cars-container");
    this.carsNotFoundCard = document.getElementById("not-found-card");
  }

  load = async (filter) => {
    const carsFiltered = await Data.filterData(filter);
    if (carsFiltered.length) {
      console.log(carsFiltered);
      carsFiltered.forEach((carObject) => {
        const carDiv = document.createElement('div');
        carDiv.classList.add('car-card');
        carDiv.innerHTML = carObject.render();
        this.carsContainerDiv.appendChild(carDiv);
      })
    }
    else {
      this.carsNotFoundCard.classList.remove('hidden');
    }
  }

  clear = () => {
    this.carsContainerDiv.innerHTML = '';
    this.carsNotFoundCard.classList.add('hidden');
  } 
}

