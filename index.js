const call = () => {
  const city = document.querySelector(".inputValue").value;

  if (city === "") {
    document.querySelector(".city").innerHTML = "enter a city name";
  }

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=afbc9faec46c485aa8bcf901003e200f&units=metric`
    )
    .then((response) => {
      const data = response.data;
      console.log(data);
      document.querySelector(".temp").innerHTML = `${Math.floor(
        data.main.temp
      )}°C`;
      document.querySelector(
        ".city"
      ).innerHTML = `${data.name}, ${data.sys.country}`;
      document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
      document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;
      document.querySelector(
        ".desc"
      ).innerHTML = `${data.weather[0].description}`;
      document.querySelector(
        ".weatherIcon"
      ).src = `images/${data.weather[0].main.toLowerCase()}.png`;
      document.querySelector(".inputValue").value = "";
    })
    .catch((error) => {
      console.log(error);
      document.querySelector(".city").innerHTML = "City not found";
      document.querySelector(".temp").innerHTML = `°C`;
      document.querySelector(".humidity").innerHTML = `%`;
      document.querySelector(".wind").innerHTML = `km/h`;
      document.querySelector(".desc").innerHTML = "";
      document.querySelector(".weatherIcon").src = ``;

      document.querySelector(".inputValue").value = "";
    });
};

const button = document.getElementById("eventButton");
button.addEventListener("click", function () {
  call();
});
