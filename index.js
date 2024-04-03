const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonRate = document.querySelector("#rate");
buttonRate.addEventListener("click",showRate);

function showRate (e) {
    e.preventDefault();
    price.style.display = (price.style.display=== "block") ? "none" : "block" ;
}

function calculateAmount(e) {
    e.preventDefault();
    const place = document.querySelector("#place").value;
    const people = document.querySelector("#number").value;
    const gas = document.querySelector("#gas").value;
    const electricity = document.querySelector("#electricity").value;
    const water = document.querySelector("#water").value;
    const waterHot = document.querySelector("#waterHot").value;
    const heating = document.querySelector("#heating").value;
    
    const ratePlace = document.querySelector(".ratePlace").value;
    const rateGas = document.querySelector(".rateGas").value;
    const rateElectr = document.querySelector(".rateElectr").value;    
    const rateWater = document.querySelector(".rateWater").value;
    const rateWaterHot = document.querySelector(".rateWaterHot").value;
    const rateHeating = document.querySelector(".rateHeating").value;

if (place==="" || people==="" || people < 1 || gas==="" || electricity===""|| water==="" || waterHot==="" || heating==="" ) {
        Swal.fire({
            title: "Ошибка!",
            text: "Пожалуйста введите всю информацию!",
            imageUrl: "znak.jpg",
            imageWidth: 300, 
            imageHeight: 300, 
            customClass: {
            popup: 'custom-popup-class',
                }               
                });
          return false      
    }

    let amountPlace =place*ratePlace;
    let amountGas =gas*rateGas;
    let amountElectr =electricity*rateElectr;
    let amountWater =water*rateWater;
    let amountWaterHot = waterHot*rateWaterHot;
    let amountHeating = heating*rateHeating;

let displayamountPlace =((place*ratePlace).toFixed(2));
let displayamountGas =( (gas*rateGas).toFixed(2));
let displayamountElectr =((electricity*rateElectr).toFixed(2));
let displayamountWater =((water*rateWater).toFixed(2));
let displayamountWaterHot = ((waterHot*rateWaterHot).toFixed(2));
let displayamountHeating = ((heating*rateHeating).toFixed(2));
let amountSum = (amountPlace + amountGas + amountElectr + amountWater + amountWaterHot + amountHeating).toFixed(2);


let amountPerPersonPlace = amountPlace/people;
let amountPerPersonGas = amountGas/people;
let amountPerPersonElectr = amountElectr/people;
let amountPerPersonWater = amountWater/people;
let amountPerPersonWaterHot = amountWaterHot/people;
let amountPerPersonHeating = amountHeating/people;

let displayamountPerPersonPlace = (amountPlace/people).toFixed(2);
let displayamountPerPersonGas = (amountGas/people).toFixed(2);
let displayamountPerPersonElectr = (amountElectr/people).toFixed(2);
let displayamountPerPersonWater = (amountWater/people).toFixed(2);
let displayamountPerPersonWaterHot = (amountWaterHot/people).toFixed(2);
let displayamountPerPersonHeating = (amountHeating/people).toFixed(2);
let amountSumPerson = (amountPerPersonPlace + amountPerPersonGas + amountPerPersonElectr + amountPerPersonWater + amountPerPersonWaterHot + amountPerPersonHeating).toFixed(2);


 
document.querySelector("#dividedPlace").textContent = displayamountPlace;
document.querySelector("#dividedGas").textContent = displayamountGas;
document.querySelector("#dividedElectric").textContent = displayamountElectr;
document.querySelector("#dividedWater").textContent = displayamountWater;
document.querySelector("#dividedWaterHot").textContent = displayamountWaterHot;
document.querySelector("#dividedHeatin").textContent = displayamountHeating;
document.querySelector("#dividedSum").textContent = amountSum;

document.querySelector("#dividedPlacePerson").textContent = displayamountPerPersonPlace;
document.querySelector("#dividedGasPerson").textContent = displayamountPerPersonGas;
document.querySelector("#dividedElectricPerson").textContent = displayamountPerPersonElectr;
document.querySelector("#dividedWaterPerson").textContent = displayamountPerPersonWater;
document.querySelector("#dividedWaterHotPerson").textContent = displayamountPerPersonWaterHot;
document.querySelector("#dividedHeatinPerson").textContent = displayamountPerPersonHeating;
document.querySelector("#dividedSumPerson").textContent = amountSumPerson;
}