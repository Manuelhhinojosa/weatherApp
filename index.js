axios
  .get(
    "https://api.openweathermap.org/data/2.5/weather?q=guadalajara&appid=afbc9faec46c485aa8bcf901003e200f&units=metric"
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
