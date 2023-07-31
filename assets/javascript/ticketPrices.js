/** 
 * Ticket Price Constants:
 * !CHANGE TICKET PRICES HERE!
 */
const adult = { weekendPrice: 100, dayPrice: 55 };
const student = { weekendPrice: 90, dayPrice: 50 };
const youngPerson = { weekendPrice: 85, dayPrice: 45 };
const teen = { weekendPrice: 70, dayPrice: 40 };
const child = { weekendPrice: 60, dayPrice: 35 };
const infant = { weekendPrice: 0, dayPrice: 0 };

const parking = { price: 10 };
const camping = { price: 10 };
const liveInVehicle = { price: 50 };

const postageFee = { price: 3.99 };

/**
 * Displays Postage Price in Paper Tickets info <li>
 */
document.getElementById("postagePrice").innerText = `£${postageFee.price}`;

/**
 * Displays Prices in Ticket Prices Table
 */
document.getElementById("adultWeekendPrice").innerText = `£${adult.weekendPrice}`;
document.getElementById("adultDayPrice").innerText = `£${adult.dayPrice}`;
document.getElementById("studentWeekendPrice").innerText = `£${student.weekendPrice}`;
document.getElementById("studentDayPrice").innerText = `£${student.dayPrice}`;
document.getElementById("youngPersonWeekendPrice").innerText = `£${youngPerson.weekendPrice}`;
document.getElementById("youngPersonDayPrice").innerText = `£${youngPerson.dayPrice}`;
document.getElementById("teenWeekendPrice").innerText = `£${teen.weekendPrice}`;
document.getElementById("teenDayPrice").innerText = `£${teen.dayPrice}`;
document.getElementById("childWeekendPrice").innerText = `£${child.weekendPrice}`;
document.getElementById("childDayPrice").innerText = `£${child.dayPrice}`;
var infantWeekendPrice = document.getElementById("infantWeekendPrice");
var infantDayPrice = document.getElementById("infantDayPrice");
if (infant.weekendPrice === 0) { //Displays: 'FREE' if Infant Full Weekender Ticket Price = 0
  infantWeekendPrice.innerText = "FREE";
} else {
  infantWeekendPrice.innerText = `£${infant.weekendPrice}`;
};
if (infant.dayPrice === 0) {
  infantDayPrice.innerText = "FREE"; //Displays: 'FREE' if Infant Day Ticket Price = 0
} else {
  infantDayPrice.innerText = `£${infant.dayPrice}`;
};

document.getElementById("parkingPrice").innerText = `£${parking.price}`;
document.getElementById("campingPrice").innerText = `£${camping.price}`;
document.getElementById("liveInVehiclePrice").innerText = `£${liveInVehicle.price}`;

/**
 * Displays Prices in <form>
 */
document.getElementById("formAdultWeekendPrice").innerText = `£${adult.weekendPrice}`;
document.getElementById("formAdultDayPrice").innerText = `£${adult.dayPrice}`;
document.getElementById("formStudentWeekendPrice").innerText = `£${student.weekendPrice}`;
document.getElementById("formStudentDayPrice").innerText = `£${student.dayPrice}`;
document.getElementById("formYoungPersonWeekendPrice").innerText = `£${youngPerson.weekendPrice}`;
document.getElementById("formYoungPersonDayPrice").innerText = `£${youngPerson.dayPrice}`;
document.getElementById("formTeenWeekendPrice").innerText = `£${teen.weekendPrice}`;
document.getElementById("formTeenDayPrice").innerText = `£${teen.dayPrice}`;
document.getElementById("formChildWeekendPrice").innerText = `£${child.weekendPrice}`;
document.getElementById("formChildDayPrice").innerText = `£${child.dayPrice}`;
if (infant.weekendPrice === 0) {
  document.getElementById("formInfantWeekendPrice").innerText = "FREE";
} else {
  document.getElementById("formInfantWeekendPrice").innerText = `£${infant.weekendPrice}`;
};
if (infant.dayPrice === 0) {
  document.getElementById("formInfantDayPrice").innerText = "FREE";
} else {
  document.getElementById("formInfantDayPrice").innerText = `£${infant.dayPrice}`;
};

document.getElementById("formParkingPrice").innerText = `£${parking.price}`;
document.getElementById("formCampingPrice").innerText = `£${camping.price}`;
document.getElementById("formLiveInVehiclePrice").innerText = `£${liveInVehicle.price}`;

/**
 * Toggle Postage Price if Paper Tickets is selected
 */
function pTicketsPrice() {
  var paperTicketsForm = document.getElementById("paperTicketsForm");

  if (paperTicketsForm.innerHTML === "") {
    //Display Paper Tickets Total in readonly input field
    paperTicketsForm.innerHTML = `<strong>:</strong> £${postageFee.price}`;
  } else {
    //Remove paperTicketsPrice if e-tickets is checked
    paperTicketsForm.innerHTML = "";
  }
}

/**
 * Toggle Ticket Type
 */
function toggleTicketType() {
  const ticketTypeP = document.getElementById("paper-tickets")
  ticketTypeP.toggleAttribute("checked"); //Toggle Checks: 'ticketTypeP'
}

/**
 * Get Totals Functions
 */
function getAdultWkndTotal(val) {
  //Calculate Adult Full Weekender ticket total based on user-selected quantity
  var adultWkndTotal = val * adult.weekendPrice;
  //Display total in readonly input field
  var aWTotal = document.getElementById("a-w-total");
  aWTotal.value = adultWkndTotal;
}
function getAdultDayTotal(val) {
  //Calculate Adult Day ticket total based on user-selected quantity
  var adultDayTotal = val * adult.dayPrice;
  //Display total in readonly input field
  var adTotal = document.getElementById("a-d-total");
  adTotal.value = adultDayTotal;
}
function getStudentWkndTotal(val) {
  //Calculate Student Full Weekender Ticket Total
  var studentWkndTotal = val * student.weekendPrice;
  //Display total in readonly input field
  var stwTotal = document.getElementById("st-w-total");
  stwTotal.value = studentWkndTotal;
}
function getStudentDayTotal(val) {
  //Calculate Student Day Ticket Total
  var studentDayTotal = val * student.dayPrice;
  //Display total in readonly input field
  var stDTotal = document.getElementById("st-d-total");
  stDTotal.value = studentDayTotal;
}
function getYpWkndTotal(val) {
  //Calculate Young Person Full Weekender Ticket Total
  var youngPersonWkndTotal = val * youngPerson.weekendPrice;
  //Display total in readonly input field
  var yPwTotal = document.getElementById("yp-w-total");
  yPwTotal.value = youngPersonWkndTotal;
}
function getYpDayTotal(val) {
  //Calculate Young Person Day Ticket Total
  var youngPersonDayTotal = val * youngPerson.dayPrice;
  //Display total in readonly input field
  var yPdTotal = document.getElementById("yp-d-total");
  yPdTotal.value = youngPersonDayTotal;
}
function getTeenWkndTotal(val) {
  //Calculate Teen Full Weekender Ticket Total
  var teenWkndTotal = val * teen.weekendPrice;
  //Display total in readonly input field
  var tWTotal = document.getElementById("t-w-total");
  tWTotal.value = teenWkndTotal;
}
function getTeenDayTotal(val) {
  //Calculate Teen Day Ticket Total
  var teenDayTotal = val * teen.dayPrice;
  //Display total in readonly input field
  var tDTotal = document.getElementById("t-d-total");
  tDTotal.value = teenDayTotal;
}
function getChildWkndTotal(val) {
  //Calculate Child Full Weekender Ticket Total
  var childWkndTotal = val * child.weekendPrice;
  //Display total in readonly input field
  var cWTotal = document.getElementById("c-w-total");
  cWTotal.value = childWkndTotal;
}
function getChildDayTotal(val) {
  //Calculate Child Day Ticket Total
  var childDayTotal = val * child.dayPrice;
  //Display total in readonly input field
  var cDTotal = document.getElementById("c-d-total");
  cDTotal.value = childDayTotal;
}
function getInfantWkndTotal(val) {
  //Calculate Infant Full Weekender Ticket Total
  var infantWkndTotal = val * infant.weekendPrice;
  //Display total in readonly input field
  var iWTotal = document.getElementById("i-w-total");
  iWTotal.value = infantWkndTotal;
}
function getInfantDayTotal(val) {
  //Calculate Infant Day Ticket Total
  var infantDayTotal = val * infant.dayPrice;
  //Display total in readonly input field
  var iDTotal = document.getElementById("i-d-total");
  iDTotal.value = infantDayTotal;
}
function getParkingTotal(val) {
  //Calculate Parking Total
  var parkingTotal = val * parking.price;
  //Display total in readonly input field
  var prkngTotal = document.getElementById("parking-total");
  prkngTotal.value = parkingTotal;
}
function getCampingTotal(val) {
  //Calculate Camping Total
  var campingTotal = val * camping.price;
  //Display total in readonly input field
  var cmpngTotal = document.getElementById("camping-total");
  cmpngTotal.value = campingTotal;
}
function getLiveInVehicleTotal(val) {
  //Calculate Live in Vehicle Total
  var liveInVehicleTotal = val * liveInVehicle.price;
  //Display total in readonly input field
  var livTotal = document.getElementById("liv-total");
  livTotal.value = liveInVehicleTotal;
}


