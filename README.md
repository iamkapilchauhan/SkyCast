🌤 SkyCast

A modern Weather Dashboard built with **Spring Boot**, **HTML**, **CSS**, and **JavaScript** that provides real-time weather information and a 7-day weather forecast using **WeatherAPI**.

### 📌 Project Overview

SkyCast is a full-stack weather application that allows users to search any city and view its current weather conditions along with a 7-day forecast. The backend is developed using Spring Boot and exposes REST APIs, while the frontend provides a responsive and interactive dashboard.

### ✨ Features

  🌍 Search weather by city<br>
  🌡 Current temperature<br>
  ☁️ Live weather condition<br>
  📍 City, Region & Country details<br>
  📅 7-Day weather forecast<br>
  📊 Interactive temperature chart<br>
  ⚡ RESTful API built with Spring Boot<br>
  💎 Responsive user interface<br>
  🔄 Real-time weather data using WeatherAPI<br>


🛠 Tech Stack

### Backend
- Java 21
- Spring Boot
- REST API
- RestTemplate

### Frontend
- HTML5
- CSS3
- JavaScript

### API
- WeatherAPI

### Libraries
- Chart.js

📂 Project Structure

```text
SkyCast
│
├── src
│   └── main
│       ├── java
│       │   └── com
│       │       └── skycast
│       │           ├── controller
│       │           ├── dto
│       │           ├── service
│       │           └── SkyCastApplication.java
│       │
│       └── resources
│           ├── static
│           │   ├── css
│           │   ├── js
│           │   ├── images
│           │   └── index.html
│           │
│           ├── templates
│           └── application.properties
│
├── pom.xml
├── README.md
└── .gitignore
```

 🚀 REST API Endpoints


### Get 7-Day Forecast

```http
GET /weather/forecast?city={city}&days=7
```

Example

```http
GET /weather/forecast?city=Moradabad&days=7
```

📄 Sample Response

```json
{
  "weatherResponse": {
    "city": "Moradabad",
    "region": "Uttar Pradesh",
    "country": "India",
    "condition": "Partly Cloudy",
    "temperature": 33.2
  },
  "dayTemp": [
    {
      "date": "2026-07-26",
      "avgTemp": 32.1,
      "maxTemp": 36.6,
      "minTemp": 27.6
    }
  ]
}
```

⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/SkyCast.git
```
### 2. Open the Project

Open the project using IntelliJ IDEA or your preferred IDE.

### 3. Configure WeatherAPI

Update your `application.properties` file.

```properties
weather.api.key=YOUR_API_KEY

weather.api.forecast.url=http://api.weatherapi.com/v1/forecast.json
```
### 4. Run the Application

Run

```text
SkyCastApplication.java
```

The backend will start on

```text
http://localhost:8080
```

## 🔮 Future Enhancements

📍 Detect current location<br>
🌙 Dark & Light theme<br>
🌬 Wind speed<br>
💧 Humidity<br>
🌅 Sunrise & Sunset<br>
🌫 Air Quality Index (AQI)<br>
⏰ Hourly weather forecast<br>
⭐ Favorite cities<br>

---

## 👨‍💻 Author

**Kapil Chauhan**

🌐 GitHub: [github.com/iamkapilchauhan](https://github.com/iamkapilchauhan)<br>
💼 LinkedIn: [linkedin.com/in/iamkapilchauhan](https://www.linkedin.com/in/iamkapilchauhan/)<br>


## 🙏 Acknowledgements

- WeatherAPI for providing real-time weather data.
- Spring Boot for simplifying backend development.
- Chart.js for interactive data visualization.

