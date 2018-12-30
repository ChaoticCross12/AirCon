var y = new XMLHttpRequest();
function info() {
    document.getElementById("data1").innerHTML = "locating . . .";
    document.getElementById("data3").innerHTML = " ";	  
y.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("data1").innerHTML = myObj.data.city +", "+ myObj.data.country+". ";
  }
};
y.open("GET", "http://api.airvisual.com/v2/nearest_city?key=pWJrvDbBDbhoQjqhj", true);
y.send();
var z = new XMLHttpRequest();
z.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("data3").innerHTML = myObj.data.current.pollution.aqius;
  }
};
z.open("GET", "http://api.airvisual.com/v2/nearest_city?key=pWJrvDbBDbhoQjqhj", true);
z.send();
}
