function renderWeather(){
    let Input_City = document.querySelector('#City')
    City=Input_City.value
    console.log(City);
    APIKey='6b06d39d6d3c10cff9bca13d222eeea1';
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+ City+'&appid='+APIKey;
    fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const { 
        main: {temp}, 
        name
        } = data;
     const weatherHTML = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${ Math.trunc(temp-273) }</p>
    </div>
    </div>`;
    console.log(data);
    weatherContainer.innerHTML=weatherHTML;
  });

}
const weatherContainer = document.querySelector('.weather'); 
document.querySelector('.btn-weather-generate').addEventListener('click', renderWeather);