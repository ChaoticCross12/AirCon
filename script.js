var z = new XMLHttpRequest();
function info() {
    document.getElementById("l1").innerHTML = "locating . . .";
	z.open("GET", "//api.airvisual.com/v2/nearest_city?key=pWJrvDbBDbhoQjqhj", true);
	z.send();
z.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var leObj = JSON.parse(this.responseText);
    document.getElementById("l1").innerHTML = leObj.data.city +", "+ leObj.data.country+". ";
    //document.getElementById("data3").innerHTML = leObj.data.current.pollution.aqius;
    k = leObj.data.current.pollution.aqius;


  if(k < 50) {
      document.getElementById("a1").innerHTML = k;
  } else if (k < 100) {
      document.getElementById("a2").innerHTML = k;
  } else if (k < 150) {
      document.getElementById("a3").innerHTML = k;
  } else if (k < 200) {
      document.getElementById("a4").innerHTML = k;
  } else if (k < 300) {
      document.getElementById("a5").innerHTML = k;
  } else {
      document.getElementById("a6").innerHTML = k;
  }

  if(k < 50) {
      document.getElementById("b1").innerHTML = "Good";
  } else if (k < 100) {
      document.getElementById("b2").innerHTML = "Moderate";
  } else if (k < 150) {
      document.getElementById("b3").innerHTML = "Unhealthy for sensitive groups";
  } else if (k < 200) {
      document.getElementById("b4").innerHTML = "Unhealthy";
  } else if (k < 300) {
      document.getElementById("b5").innerHTML = "Very Unhealthy";
  } else {
      document.getElementById("b6").innerHTML = "Hazardous";
  }
      // code block

  //  document.getElementById("data3").innerHTML = k;

  }
};
}
