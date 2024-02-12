function calculateAge() {
  var birthday = new Date(document.getElementById("birthday").value);
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);

  var years = ageDate.getUTCFullYear() - 1970;
  var months = ageDate.getUTCMonth();
  var days = ageDate.getUTCDate() - 1; // Adjust days

  // Leap year calculation
  var leapYears = 0;
  for (var i = birthday.getUTCFullYear(); i < ageDate.getUTCFullYear(); i++) {
    if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
      leapYears++;
    }
  }

  // Adjust days for leap years
  if (
    (birthday.getMonth() < 1 ||
      (birthday.getMonth() === 1 && birthday.getDate() < 29)) &&
    (ageDate.getMonth() > 1 ||
      (ageDate.getMonth() === 1 && ageDate.getDate() >= 29))
  ) {
    leapYears--;
  }

  days -= leapYears;

  document.getElementById("show-age").innerText =
    "Your age is " +
    years +
    " years, " +
    months +
    " months, and " +
    days +
    " days.";
}
