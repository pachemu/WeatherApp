const API = "";
const button = document.getElementById('button')
const temp = document.getElementById('temp')
const speed = document.getElementById('speed')
const humidity = document.getElementById('humidity')
const city = document.getElementById('city')
async function checkWeather() {
    try {
        let cityValue = document.querySelector('input').value;
        if(cityValue) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        await console.log('Данные о погоде', responseData)
        let nowTemp = Math.round(responseData.main.temp - 273.15)
        let nowSpeed = responseData.wind.speed
        let nowHumidity = responseData.main.humidity
        let nowCity = responseData.name
        city.innerHTML = `${nowCity}`
        speed.innerHTML = `${nowSpeed}km/h`
        temp.innerHTML = `${nowTemp}&#176; `
        humidity.innerHTML = `${nowHumidity}%`
        await console.log(nowTemp, nowHumidity, nowSpeed)
    }} catch (error) {
        console.error('Fetch error:', error);
    }
}
button.addEventListener('click', checkWeather)

async function searchCities() {
    try {
        let cityValue = document.querySelector('input').value;
        if(cityValue) {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            await console.log('Данные о погоде', responseData);
            let nowTemp = Math.round(responseData.main.temp - 273.15);
            let nowSpeed = responseData.wind.speed;
            let nowHumidity = responseData.main.humidity;
            let nowCity = responseData.name;
            city.innerHTML = `${nowCity}`;
            speed.innerHTML = `${nowSpeed}km/h`;
            temp.innerHTML = `${nowTemp}&#176; `;
            humidity.innerHTML = `${nowHumidity}%`;
            await console.log(nowTemp, nowHumidity, nowSpeed);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

