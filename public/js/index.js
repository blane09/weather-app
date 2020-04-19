window.onload = function () {
  var button = document.getElementById('button')
  button.addEventListener('click', makeRequest)
  function makeRequest(){
    var weathermain = document.getElementById('weathermain')
    var weatherdescription = document.getElementById('weatherdescription')
    var weathertemperature = document.getElementById('weathertemperature')
    var weatherhumidity = document.getElementById('weatherhumidity')
    var weatherimage = document.getElementById('image')
    var cityInput = document.getElementById('cityinput')


    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value + "&APPID=d4739fa38770c49556b0bf322f0efb75", true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          console.log(data)
          weathermain.innerHTML = data.weather[0].main

          weatherdescription.innerHTML = data.weather[0].description
          weathertemperature.innerHTML = (data.main.temp - 273.15).toFixed() + "°C"
          weatherhumidity.innerHTML = data.main.humidity + "%"
          if (data.weather[0].main === "Clear") {
          weatherimage.src = "../../assets/images/clear.png"
        }
        if (data.weather[0].main === "Clouds") {
          weatherimage.src = "../../assets/images/clouds.png"
        }
        if (data.weather[0].main === "Rain") {
          weatherimage.src = "../../assets/images/rain.png"
        }
        if (data.weather[0].main === "Drizzle") {
          weatherimage.src = "../../assets/images/rain.png"
        }
        if (data.weather[0].main === "Snow") {
          weatherimage.src = "../../assets/images/snowflake.png"
        }
        }
      }
    }
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null)
  }
}
