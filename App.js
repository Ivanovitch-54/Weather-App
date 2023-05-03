function getWeather(e) {
  e.preventDefault();
  const input = document.querySelector(".searchInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=737e68c926740b104a6344cc3ba3369e&lang=fr&units=metric`;

  axios.get(url).then((res) => {
    showData(res.data)
  })
}

function showData(data) {
    const container = document.querySelector('.responseDiv');
    container.classList.add('shown');
    const weather = data;
    let content = `<div class="row"><h1 id="cityName">${weather.name}</h1></div>`
    content += `<div class="row"><span>Températures</span><span>${weather.main.temp}</span></div>`

    container.innerHTML = content;
}


// Rajouter un $ devant l'API Key et devant les variables d'URL
