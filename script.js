var file = new XMLHttpRequest();

function info() {
  //change text
  document.getElementById("l1").innerHTML = "locating . . .";
  //collect json
	file.open("GET", "//api.airvisual.com/v2/nearest_city?key=pWJrvDbBDbhoQjqhj", true);
	file.send();
  file.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      var leObj = JSON.parse(this.responseText);
      var k = leObj.data.current.pollution.aqius;
      var city = leObj.data.city
      var country = leObj.data.country
      p = 100 - ((k * 100) / 600) - 10  //percentage calculation taking 600 as max AQI //-10 for stability
  //show location
  document.getElementById("l1").innerHTML = city +", "+ country +". ";
  //show AQI
  if(k < 50) {
      document.getElementById("a1").innerHTML = k;
      document.getElementById("b1").innerHTML = "Good";
  } else if (k < 100) {
      document.getElementById("a2").innerHTML = k;
      document.getElementById("b2").innerHTML = "Moderate";
  } else if (k < 150) {
      document.getElementById("a3").innerHTML = k;
      document.getElementById("b3").innerHTML = "Unhealthy for sensitive groups";
  } else if (k < 200) {
      document.getElementById("a4").innerHTML = k;
      document.getElementById("b4").innerHTML = "Unhealthy";
  } else if (k < 300) {
      document.getElementById("a5").innerHTML = k;
      document.getElementById("b5").innerHTML = "Very Unhealthy";
  } else {
      document.getElementById("a6").innerHTML = k;
      document.getElementById("b6").innerHTML = "Hazardous";
  }
  }
  };
    //unhide progress bar
    document.getElementById("progress").style.display="block";
    var elem = document.getElementById("bar");
    var width = 0;
    var id = setInterval(frame, 20); //progress bar animation
    function frame() {
      if (width >= p) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        //progress bar text and colour
        if(p < 40) {
          document.getElementById("bar").style.backgroundColor="#b700b7";
          elem.innerHTML = "Hazardous";
        } else if (p < 57) {
          elem.innerHTML = "Very Unhealthy";
          document.getElementById("bar").style.backgroundColor="#ff0000";
        } else if (p < 74) {
          elem.innerHTML = "Unhealthy";
          document.getElementById("bar").style.backgroundColor="#ff8000";
        } else if (p < 82) {
          document.getElementById("bar").style.backgroundColor="#dddd00";
          elem.innerHTML = "Modetarate";
        } else if (p < 100) {
          document.getElementById("bar").style.backgroundColor="#00a800";
          elem.innerHTML = "Good";
        } else {
          document.getElementById("bar").style.backgroundColor="#00a800";
          elem.innerHTML = "Good";
        }
      }
    }
}
