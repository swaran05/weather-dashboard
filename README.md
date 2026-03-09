# 🌦 Real-Time Weather Dashboard

A responsive web application that automatically detects the user’s location and displays real-time weather conditions, hourly forecasts, and a 7-day forecast. The application integrates weather data APIs and interactive visualizations to provide an intuitive weather monitoring dashboard.

---

## 🚀 Features

* 📍 **Automatic Location Detection**
  Uses the browser Geolocation API to detect the user’s current location.

* 🌡 **Real-Time Weather Data**
  Displays current temperature, wind speed, and weather conditions.

* ⏰ **Hourly Weather Forecast**
  Shows temperature predictions for upcoming hours.

* 📅 **7-Day Forecast**
  Provides maximum and minimum temperature predictions for the next week.

* 🌍 **Interactive Weather Map**
  Displays the user’s location on an interactive map.

* 📊 **Temperature Visualization**
  A dynamic chart visualizing temperature trends using graphical representation.

* 📱 **Responsive Dashboard UI**
  Works smoothly on desktop, tablet, and mobile devices.

---

## 🛠 Technologies Used

* **HTML5** – Structure of the web application
* **CSS3** – Styling and responsive layout
* **JavaScript (ES6)** – Core application logic
* **Leaflet.js** – Interactive map visualization
* **Chart.js** – Temperature trend charts
* **Open-Meteo API** – Weather data provider
* **OpenStreetMap / Nominatim API** – Reverse geolocation (city detection)

---

## 📂 Project Structure

```
weather-dashboard
│
├── index.html    # Main webpage structure
├── style.css     # Application styling
├── script.js     # Weather API logic and UI updates
└── README.md     # Project documentation
```

---

## ⚙ How It Works

1. The browser requests the user’s location using the **Geolocation API**.
2. Latitude and longitude coordinates are obtained.
3. These coordinates are sent to the **Open-Meteo API**.
4. Weather data is retrieved and displayed on the dashboard.
5. The **Leaflet map** shows the user's location visually.
6. **Chart.js** visualizes temperature changes over time.

---

## 🌐 APIs Used

* Open-Meteo Weather API
* OpenStreetMap Nominatim Reverse Geocoding API

---

## 📸 Example Dashboard

```
Weather Dashboard
📍 Dundigal, Telangana

☀ Temperature: 36°C
Wind Speed: 11 km/h

[ Interactive Weather Map ]

[ Temperature Chart ]

[ Hourly Forecast ]

[ 7 Day Forecast ]
```

---

---

## 📈 Future Improvements

* 🔎 Search weather for any city
* 🌙 Dark mode theme
* 🌧 Rain radar visualization
* 📊 Additional weather analytics
* 🌦 Animated weather icons

---

## 👨‍💻 Author

Developed by **Swaran**
