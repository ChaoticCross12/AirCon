var z = new XMLHttpRequest();

function info() {
  document.getElementById("l1").innerHTML = "locating . . .";

	z.open("GET", "//api.airvisual.com/v2/nearest_city?key=pWJrvDbBDbhoQjqhj", true);
	z.send();
  z.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      var leObj = JSON.parse(this.responseText);
      k = leObj.data.current.pollution.aqius;
      city = leObj.data.city
      country = leObj.data.country
      p = (k * 100) / 600
      m = 100 - p - 10
      document.getElementById("l1").innerHTML = city +", "+ country +". ";

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
  }
  };

    document.getElementById("progress").style.display="block";
    var elem = document.getElementById("bar");
    var width = 0;
    var id = setInterval(frame, 0);
    function frame() {
      if (width >= m) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';

        if(m < 40) {
          document.getElementById("bar").style.backgroundColor="#b700b7";
          elem.innerHTML = "Hazardous";
        } else if (m < 57) {
          elem.innerHTML = "Very Unhealthy";
          document.getElementById("bar").style.backgroundColor="#ff0000";
        } else if (m < 74) {
          elem.innerHTML = "Unhealthy";
          document.getElementById("bar").style.backgroundColor="#ff8000";
        } else if (m < 82) {
          document.getElementById("bar").style.backgroundColor="#dddd00";
          elem.innerHTML = "Modetarate";
        } else if (m < 100) {
          document.getElementById("bar").style.backgroundColor="#00a800";
          elem.innerHTML = "Good";
        } else {
          document.getElementById("bar").style.backgroundColor="#00a800";
          elem.innerHTML = "Good";
        }
      }
    }
}
