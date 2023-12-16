let cars = null;
// get datas from json
fetch('cars.json')
.then(res => res.json())
.then(data => {
    cars = data;
    console.log(cars);
    addDatatoHTML();
})

// add data product to HTML
let listCar = document.querySelector('.listCar');
function addDatatoHTML(){
    cars.forEach(car => {
        // create new element item
        let newCar = document.createElement('a');
        newCar.href = '/detail.html?id=' + car.id;
        newCar.classList.add('item');
        newCar.innerHTML = `
            <img src="${car.image}">
            <h2>${car.name}</h2>
            <div class="price">${car.price}</div>
        `;

        // add this element in listCar class
        listCar.appendChild(newCar);
    })
}