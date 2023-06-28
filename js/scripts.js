

const apiKey =  process.env.WEATHER_API_KEY; //Key da Api que retorna o clima OpwnWeather
const accessKeyImg = process.env.UNSPLASH_API_KEY; //Key API que retorna imagem UnSplash

const apiCountryURL = "https://flagsapi.com/"; //Api que retorna o icone da bandeira FlagsApi
const apiCountryURLEnd = "/flat/32.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

//Funções
const getWeatherData = async (city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`; //Api que retorna o clima OpwnWeather

    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    console.log(data);
    return data;
}

const showWeatherData = async (city) => {
   const data =  await getWeatherData(city);

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

    weatherContainer.classList.remove("hide");

    let el = document.getElementById('body');   


   const cidade = data.name;   
   const urlApiImg = `https://api.unsplash.com/photos/random?query=${cidade}&client_id=${accessKeyImg}`;// API que retorna imagem UnSplash

    // Requisição GET para a API do Unsplash
    fetch(urlApiImg)
      .then(response => response.json())
      .then(data => {
        // URL da imagem retornada pela API
        const imagemUrl = data.urls.regular;
    
        // Elemento <img> para exibir a imagem
        const imagemCidade = document.createElement('img');
    
        // Atributo 'src' da imagem com a URL da imagem do Unsplash
        imagemCidade.src = imagemUrl;
    
        // Imagem ao seu documento HTML
        //document.body.appendChild(imagemCidade);
        document.body.style.backgroundImage = `url(${imagemUrl})`;
        document.body.style.backgroundRepeat = "none"; 
      })
      .catch(error => {
        console.log('Ocorreu um erro:', error);
      });
}

// Eventos
searchBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
})

cityInput.addEventListener("keyup", e =>{

    if(e.code === "Enter"){
        const city = e.target.value;
        showWeatherData(city);
    }

});