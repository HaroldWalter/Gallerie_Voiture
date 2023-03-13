/* ====================================================
===      Page Rechercher un véhicule -Script        ===
=======================================================*/

// Stop the link pointing to the current from reloading the page
$(".current a").click(function (event) {
  event.preventDefault();
});

// creating the table containing the cars
let tabCars = [];


// creating the function adding the cars to the table
var n = 0;
function addCarTab(pathImage, brand, model) {
  tabCars.push({
    image: pathImage,
    marque: brand,
    modele: model,
    idCar: n,
  });
  n++;
}
// creating the function displaying the cars on the page
function showCars() {
  let carDiv = document.getElementById("carList");
  for (let index = 0; index < tabCars.length; index++) { // ou for(vehicule of tarCars)
    // selecting the car
    let car = tabCars[index];
    // displaying the car on page
    carDiv.innerHTML += `<article id="car_${car.idCar}">
													<figure>
															<img src="${car.image}" alt="${car.marque} ${car.modele}" />
															<figcaption>${car.marque} ${car.modele}</figcaption>
														</figure>
														<h4>${car.marque} ${car.modele}</h4>
												</article>`;
  }
}

// function to choose which car showing
function choiceCars(chosenBrand = "allBrands") {
  for (let i = 0; i < tabCars.length; i++) {
    // select the vignette with a car
    let baliseArticle = document.getElementById(`car_${tabCars[i].idCar}`);
    // display car if "Toutes marques" or its brands is selected
    if (tabCars[i].marque == chosenBrand || chosenBrand == "allBrands") {
      baliseArticle.style.display = "block";
    } else {
      //hide the car
      baliseArticle.style.display = "none";
    }
  }
}

// adding cars to the table
addCarTab("./images/ferrari_488.jpg", "Ferrari", "488");
addCarTab("./images/vw_golf4.jpg", "VW", "Golf 4z");
addCarTab("./images/peugeot_308.jpg", "Peugeot", "308");
addCarTab("./images/peugeot_rcz.jpg", "Peugeot", "RCZ");
addCarTab("./images/porsche_concept.jpg", "Porsche", "Concept");
//displaying table on console
console.table(tabCars);
//displaying the cars on page
showCars(tabCars);
choiceCars();
//creating function to select a brand
$("#selectBrand").change(function () {
  let selection = document.getElementById("selectBrand").value;
  // console.log(selection);
  choiceCars(selection);
});
