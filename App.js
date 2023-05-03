function getWeather(e) {
  e.preventDefault();
  const input = document.querySelector(".searchInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=737e68c926740b104a6344cc3ba3369e&lang=fr&units=metric`;

  axios.get(url).then((res) => {
    showData(res.data);
  });
}

function showData(data) {
  const container = document.querySelector(".responseDiv");
  container.classList.add("shown");
  const weather = data;
  let content = `<div class="row"><h1 id="cityName">${weather.name}</h1></div>`;
  content += `<div class="row"><span>Températures</span><span>${weather.main.temp}</span></div>`;

  container.innerHTML = content;
}

function getVille() {
  const input = document.querySelector(".searchInput").value;
  const villeUrl = `https://api-adresse.data.gouv.fr/search/?q=${input}&limit=3&type=municipality`;

  axios.get(villeUrl).then((res) => {
    listeVille(res.data);
  });
}

function listeVille(dataVille) {
  const container = document.querySelector(".responseDiv");
  container.classList.add("shown");
  const ville = dataVille;
  console.log(ville);
  let content = `<br><div class="row"><h2>${ville.features[0].properties.city}</h2></div>`;
  content += `<br><div class="row"><h2>${ville.features[1].properties.city}</h2></div>`
  content += `<br><div class="row"><h2>${ville.features[2].properties.city}</h2></div>`
  
  container.innerHTML = content;
}

// Rajouter un $ devant l'API Key et devant les variables d'URL

// Utiliser des console.log pour retracer la route jusqu'a l'objet en question 