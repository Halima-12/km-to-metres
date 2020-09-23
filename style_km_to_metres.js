function convertKilometres() {
  var chosenValue = document.getElementById("dropdown").value;
  var inputValue = document.getElementById("numInput").value;
  
  if (inputValue === "") {
    alert("type number in km/m can not be empty");
  }
  
  if (chosenValue === "kilometrestometres") {
    convertKilometresToMetres(inputValue);
  } else {
    convertMetresToKilometres(inputValue);
  }
}

function convertKilometresToMetres(inputVal) {
  var output;
  if (inputVal != "") {
    output = inputVal * 1000;
    document.getElementById("output").innerHTML = ["answer: " + output];
  }
}

function convertMetresToKilometres(inputVal) {
  var output;
  if (inputVal != "") {
    output = inputVal / 1000;
    document.getElementById("output").innerHTML = ["answer: " + output];
  }
}

