navigator.geolocation.getCurrentPosition(getWeather);

function getWeather(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

getCity(lat,lon);

initMap(lat,lon);

let url =
`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min`;

fetch(url)

.then(res=>res.json())

.then(data=>{

showCurrent(data);
showHourly(data);
showDaily(data);
createChart(data);

});

}

/* CITY + STATE */

function getCity(lat,lon){

fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)

.then(res=>res.json())

.then(data=>{

let city =
data.address.city ||
data.address.town ||
data.address.village ||
data.address.suburb ||
data.address.municipality ||
data.address.county;

let state = data.address.state;

document.getElementById("city").innerText =
"📍 " + city + ", " + state;

});

}

/* CURRENT WEATHER */

function showCurrent(data){

let temp=data.current_weather.temperature;
let wind=data.current_weather.windspeed;

document.getElementById("icon").innerText="☀️";

document.getElementById("temperature").innerText=
"Temperature: "+temp+"°C";

document.getElementById("wind").innerText=
"Wind Speed: "+wind+" km/h";

}

/* HOURLY FORECAST */

function showHourly(data){

let temps=data.hourly.temperature_2m;
let time=data.hourly.time;

let html="";

for(let i=0;i<12;i++){

let hour=time[i].split("T")[1];

html+=`
<div>
<b>${hour}</b><br>
${temps[i]}°C
</div>
`;

}

document.getElementById("hourly").innerHTML=html;

}

/* DAILY FORECAST */

function showDaily(data){

let max=data.daily.temperature_2m_max;
let min=data.daily.temperature_2m_min;
let time=data.daily.time;

let html="";

for(let i=0;i<7;i++){

let day=new Date(time[i]).toDateString().split(" ")[0];

html+=`
<div>
<b>${day}</b><br>
${max[i]}° / ${min[i]}°
</div>
`;

}

document.getElementById("daily").innerHTML=html;

}

/* MAP */

function initMap(lat,lon){

let map=L.map('map').setView([lat,lon],10);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

L.marker([lat,lon])
.addTo(map)
.bindPopup("Your Location")
.openPopup();

}

/* TEMPERATURE CHART */

function createChart(data){

let temps=data.hourly.temperature_2m.slice(0,12);

let labels=data.hourly.time
.slice(0,12)
.map(t=>t.split("T")[1]);

let ctx=document.getElementById("tempChart");

new Chart(ctx,{
type:'line',
data:{
labels:labels,
datasets:[{
label:'Temperature °C',
data:temps,
borderWidth:3
}]
}
});

}