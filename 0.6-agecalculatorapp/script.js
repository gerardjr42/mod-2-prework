let userInput = document.getElementById("date");

//disable future dates
userInput.max = new Date().toISOString().split("T")[0];

//calculate age
function calculateAge() {
  let birthDate = new Date(userInput.value);

  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1; //month starts at 0 index, so +1
  let birthYear = birthDate.getFullYear();

  let today = new Date();

  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  let calculateDay, calculateMonth, calculateYear;
  calculateYear = currentYear - birthYear;

  if(currentMonth >= birthMonth) {
    calculateMonth = currentMonth -birthMonth;
  } else {
    calculateYear--;
    calculateMonth = 12 + currentMonth - birthMonth;
  }
  if(currentDay >= birthDay) {
    calculateDay = currentDay - birthDay;
  } else {
    calculateMonth--;
    calculateDay = getDaysInMonth(birthYear,birthMonth) + currentDay - birthDay;
  }
  if(calculateMonth < 0) {
    calculateMonth = 11;
    calculateYear--;
  }
  //returns our calculations and uses that as our result.
  //Create a span to customize in css
  result.innerHTML = `You are <span>${calculateYear}</span> years, <span>${calculateMonth}</span> months and <span>${calculateDay}</span> days old`;
}

//gives us the last day of the month which we use above
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

//displaying the result of calculateAge;
let result = document.getElementById("result");