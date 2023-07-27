let weather = {
    apiKey: "5f0ea025e693d00ea297a05b2199ee7c",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=Imperial&appid=" +
          this.apiKey
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { description } = data.weather[0];
      const { temp} = data.main;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".description").innerText =  description;
      document.querySelector(".temp").innerText = temp + "°F";
    },
   
  };
  
  
  weather.fetchWeather("Arcata");