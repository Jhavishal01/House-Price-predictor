
const sqftInput = document.getElementById("sqft");
const bedroomsInput = document.getElementById("bedrooms");
const bathroomsInput = document.getElementById("bathrooms");
const ageInput = document.getElementById("age");


const sqftValue = document.getElementById("sqftValue");
const bedroomsValue = document.getElementById("bedroomsValue");
const bathroomsValue = document.getElementById("bathroomsValue");
const ageValue = document.getElementById("ageValue");

sqftInput.addEventListener("input", function () {
  sqftValue.textContent = this.value;
});

bedroomsInput.addEventListener("input", function () {
  bedroomsValue.textContent = this.value;
});

bathroomsInput.addEventListener("input", function () {
  bathroomsValue.textContent = this.value;
});

ageInput.addEventListener("input", function () {
  ageValue.textContent = this.value;
});

function predictPrice() {

  const sqft = parseInt(sqftInput.value);
  const bedrooms = parseInt(bedroomsInput.value);
  const bathrooms = parseFloat(bathroomsInput.value);
  const age = parseInt(ageInput.value);

  const basePrice = 50000;
  const sqftRate = 150;
  const bedroomPrice = 30000;
  const bathroomPrice = 25000;
  const ageDepreciation = 2000;

  const sqftTotal = sqft * sqftRate;
  const bedroomsTotal = bedrooms * bedroomPrice;
  const bathroomsTotal = bathrooms * bathroomPrice;
  const ageTotal = age * ageDepreciation;

  const finalPrice =
    basePrice + sqftTotal + bedroomsTotal + bathroomsTotal - ageTotal;
  const price = Math.max(finalPrice, 50000);
  document.getElementById("resultPrice").textContent =
    "$" + price.toLocaleString("en-US", { maximumFractionDigits: 0 });


  document.getElementById("sqftCalc").textContent = sqft;
  document.getElementById("sqftTotal").textContent = sqftTotal.toLocaleString();

  document.getElementById("bedroomsCalc").textContent = bedrooms;
  document.getElementById("bedroomsTotal").textContent =
    bedroomsTotal.toLocaleString();

  document.getElementById("bathroomsCalc").textContent = bathrooms;
  document.getElementById("bathroomsTotal").textContent =
    bathroomsTotal.toLocaleString();

  document.getElementById("ageCalc").textContent = age;
  document.getElementById("ageTotal").textContent = ageTotal.toLocaleString();

  document.getElementById("resultCard").classList.add("show");
}
