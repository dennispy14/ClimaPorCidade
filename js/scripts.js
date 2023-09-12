const apiKey = "a844eeb5c98602b46ec096912190ad6f"; //Key da Api que retorna o clima OpwnWeather
const accessKeyImg = "vlFv2yabnopOF2qAL5ZUBYyb8ztSpDZm3ts0Wdl2T9U"; //Key API que retorna imagem UnSplash
const apiKeyGeocode = '7561cc976aa04c0ab3f0c420a0b20c63'; //Key API que retorna cidade Geocode

const apiCountryURL = "https://flagsapi.com/"; //Api que retorna o icone da bandeira FlagsApi
const apiCountryURLEnd = "/flat/32.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");
const cityshome = document.querySelector("#citys");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");
const long = document.getElementById("long");
const lati = document.getElementById("lati");
const citys = document.getElementById("citys");
const weatherContainer = document.querySelector("#weather-data");

//Funções

function showLocalization(pos) {
  buscarCidadePais(pos.coords.longitude, pos.coords.latitude);
};

function errorLocalization() {
  console.log("Erro ao obter a localização!");
}

function buscarCidadePais(longitude, latitude) {

  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKeyGeocode}`)
    .then(response => response.json())
    .then(data => {
      const resultado = data.results[0];
      console.log(resultado);
      if (resultado) {
        const cidade = resultado.components.city || resultado.components.town || resultado.components.village;
        showWeatherData(cidade);

      } else {
        alert('Localização não encontrada.');
      }
    })
    .catch(error => {
      console.error('Erro ao buscar localização:', error);
    });
}

const getWeatherData = async (city) => {

  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`; //Api que retorna o clima OpwnWeather

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  return data;
}

const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  if (data.cod != 404) {
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
    countryElement.setAttribute(
      "src",
      apiCountryURL + data.sys.country + apiCountryURLEnd
    );
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    weatherContainer.classList.remove("hide");//Remove a div 

    citys.style.display = "none"; //Oculta a div

    let el = document.getElementById('body');

    const cidade = data.name;
    const urlApiImg = `https://api.unsplash.com/photos/random?query=${cidade}&client_id=${accessKeyImg}`;// API que retorna imagem UnSplash

    // Requisição GET para a API do Unsplash
    fetch(urlApiImg)
      .then(response => response.json())
      .then(data => {

        const imagemUrl = data.urls.regular;
        const imagemCidade = document.createElement('img');
        imagemCidade.src = imagemUrl;
        document.body.style.backgroundImage = `url(${imagemUrl})`;
        document.body.style.backgroundRepeat = "none";

      })
      .catch(error => {
        console.log('Ocorreu um erro:', error);
      });
  } else
    alert("Digite uma cidade valida!")
}

// Eventos
searchBtn.addEventListener("click", (e) => {

  e.preventDefault();
  const city = cityInput.value;
  if (city)
    showWeatherData(city);
  else
    alert("Digite uma cidade!");

});

cityshome.addEventListener("click", (e) => {

  e.preventDefault();
  const city = e.target.textContent;
  showWeatherData(city);

});

cityInput.addEventListener("keyup", e => {

  if (e.code === "Enter") {
    const city = e.target.value;
    showWeatherData(city);
  }

});

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showLocalization, errorLocalization);

} else {
  console.log("Geolocalização não suportada");
};
