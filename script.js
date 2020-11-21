const API_Key = "bcc010f896794a1c8fc52341202111";

getWeatherData = (city) => {
  const url = "http://api.weatherapi.com/v1/current.json";
  const FullUrl = `${url}?key=${API_Key}&q=${city}`;

  const weatherPromise = fetch(FullUrl);
  return weatherPromise.then((response) => {
    return response.json();
  });
};

searchCity = () => {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
    .then((response) => {
      console.log(response);
      showWeatherData(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

showWeatherData = (data) => {
  document.getElementById("city-name").innerText = data.location.name;
  document.getElementById("weather-type").innerText =
    data.current.condition.text;
  document.getElementById("temp-c").innerText = data.current.temp_c;
  document.getElementById("temp-f").innerText = data.current.temp_f;
};
