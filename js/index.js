let seatNumberElement = document.getElementById("seat-number-element");
let seatDecreaseElement = document.getElementById("seat-decrease");
let noBookedHeading = document.getElementById("no-booked");
let parentUL = document.getElementById("parentUl");
let ticketPrice = 0;
let totalPriceBDT = document.getElementById("total-price-bdt");
let couponInput = document.getElementById("coupon-input");
let couponApplyBtn = document.getElementById("coupon-apply-button");
let discountDivElement = document.getElementById("discount-div");
let discountPriceElement = document.getElementById("discount-price");
let grandTotalPrice = document.getElementById("grand-total");
let passengerName = document.getElementById("Passenger-name");
let passengerPhone = document.getElementById("Passenger-phone");
let passengerEmail = document.getElementById("Passenger-email");
let formBtn = document.getElementById("form-btn");
let modalBtn = document.getElementById("modal-btn");
let arr = [];
function ticketBooked(event) {
  let buttonClicked = event.target;

  if (arr.includes(buttonClicked.innerText)) {
    alert("This seat already booked");
    return;
  }

  buttonClicked.classList.add("bg-[#1DD100]");
  buttonClicked.style.color = "white";
  arr.push(buttonClicked.innerText);

  seatNumberElement.innerText = arr.length;

  let seatDecreaseElementNumber = parseInt(seatDecreaseElement.innerText);
  seatDecreaseElementNumber--;

  seatDecreaseElement.innerText = seatDecreaseElementNumber;

  noBookedHeading.classList.add("hidden");

  parentUL.innerHTML += `
         <div class=" space-y-3 h-9 flex justify-between items-center">
                <li>${buttonClicked.innerText}</li>
                <li>economy</li>
                <li>550</li>
              </div>
  `;

  ticketPrice = ticketPrice + 550;
  totalPriceBDT.innerText = ticketPrice;

  if (arr.length > 3) {
    couponInput.removeAttribute("disabled");
    couponApplyBtn.removeAttribute("disabled");
  }
  passengerName.removeAttribute("disabled");
  passengerPhone.removeAttribute("disabled");
  passengerEmail.removeAttribute("disabled");
}

couponApplyBtn.addEventListener("click", function () {
  if (couponInput.value !== "NEW15" && couponInput.value !== "Couple 20") {
    alert("wrong coupon provided");
    return;
  }

  if (couponInput.value === "NEW15") {
    let discount15 = ticketPrice * 0.15;
    ticketPrice = ticketPrice - discount15;
    discountPriceElement.innerText = discount15;
    couponInput.classList.add("hidden");
    couponApplyBtn.classList.add("hidden");
    discountDivElement.classList.remove("hidden");
    discountDivElement.classList.add("flex");
    grandTotalPrice.innerText = ticketPrice;
  }

  if (couponInput.value === "Couple 20") {
    let discount20 = ticketPrice * 0.2;
    ticketPrice = ticketPrice - discount20;
    discountPriceElement.innerText = discount20;
    couponInput.classList.add("hidden");
    couponApplyBtn.classList.add("hidden");
    discountDivElement.classList.remove("hidden");
    discountDivElement.classList.add("flex");
    grandTotalPrice.innerText = ticketPrice;
  }
});

passengerPhone.addEventListener("input", function () {
  if (passengerPhone.value.length > 10) {
    formBtn.removeAttribute("disabled");
  }
});

modalBtn.addEventListener("click", function () {
  window.location.reload();
});
