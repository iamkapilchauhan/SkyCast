const BASE_URL = "http://localhost:8080/weather";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const themeBtn = document.getElementById("themeBtn");

const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const city = document.getElementById("city");
const region = document.getElementById("region");
const country = document.getElementById("country");

const forecastContainer = document.getElementById("forecastContainer");
const recentList = document.getElementById("recentList");

const loader = document.getElementById("loader");

let chart;

searchBtn.addEventListener("click", () => {

    const value = cityInput.value.trim();

    if (value === "") {
        alert("Enter City Name");
        return;
    }

    loadWeather(value);

});

cityInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        searchBtn.click();
    }

});

async function loadWeather(cityName) {

    loader.style.display = "block";

    try {

        const response = await fetch(
            `${BASE_URL}/forecast?city=${cityName}&days=7`
        );

        if (!response.ok) {
            throw new Error("Unable to fetch data");
        }

        const data = await response.json();

        displayCurrentWeather(data.weatherResponse);

        displayForecast(data.dayTemp);

        drawChart(data.dayTemp);

        saveRecent(cityName);

    } catch (err) {

        console.log(err);

        alert("Unable to fetch weather");

    }

    loader.style.display = "none";

}

function displayCurrentWeather(weather) {

    city.innerText = weather.city;

    region.innerText = weather.region;

    country.innerText = weather.country;

    condition.innerText = weather.condition;

    temperature.innerText = weather.temperature + " °C";

}

function displayForecast(days) {

    forecastContainer.innerHTML = "";

    days.forEach(day => {

        forecastContainer.innerHTML += `

        <div class="forecast-card">

            <h3>${day.date}</h3>

            <p>🌡 Avg : ${day.avgTemp}°C</p>

            <p>🔺 Max : ${day.maxTemp}°C</p>

            <p>🔻 Min : ${day.minTemp}°C</p>

        </div>

        `;

    });

}
function drawChart(days) {

    const labels = days.map(day => day.date);

    const temps = days.map(day => day.avgTemp);

    const ctx = document.getElementById("tempChart");

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {

        type: "line",

        data: {

            labels: labels,

            datasets: [{

                label: "Average Temperature",

                data: temps,

                borderColor: "#00e5ff",

                backgroundColor: "rgba(0,229,255,0.2)",

                borderWidth: 3,

                tension: 0.4,

                fill: true,

                pointRadius: 5

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    labels: {

                        color: "white"

                    }

                }

            },

            scales: {

                x: {

                    ticks: {

                        color: "white"

                    }

                },

                y: {

                    ticks: {

                        color: "white"

                    }

                }

            }

        }

    });

}

function saveRecent(cityName) {

    let cities = JSON.parse(localStorage.getItem("cities")) || [];

    cities = cities.filter(c => c !== cityName);

    cities.unshift(cityName);

    if (cities.length > 5) {

        cities.pop();

    }

    localStorage.setItem("cities", JSON.stringify(cities));

    loadRecent();

}

function loadRecent() {

    recentList.innerHTML = "";

    const cities = JSON.parse(localStorage.getItem("cities")) || [];

    cities.forEach(cityName => {

        const li = document.createElement("li");

        li.innerText = cityName;

        li.addEventListener("click", () => {

            cityInput.value = cityName;

            loadWeather(cityName);

        });

        recentList.appendChild(li);

    });

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

window.onload = () => {

    loadRecent();

    loadWeather("Moradabad");

};