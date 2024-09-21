let seatNumberElement = document.getElementById("seat-number-element");
let seatDecreaseElement = document.getElementById("seat-decrease");
let noBookedHeading = document.getElementById("no-booked");
let parentUL = document.getElementById("parentUl");
let arr = [];
function ticketBooked(event) {
  let buttonClicked = event.target;

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
  console.log(parentUL);
}
