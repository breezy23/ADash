const fc = "https://api.open-meteo.com/v1/forecast?latitude=42.03&longitude=-93.62&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago";
const wa = "https://api.weather.gov/alerts/active?point=41.99,-93.62";

let weather;
let weatherAlert;

console.log("test");
// Get response from Open-Meteo
fetch(fc)
	.then(res => res.json())
	.then((out) => {
		weather = out;
	    	console.log('Forecast: ', weather);
}).catch(err => console.error(err));

// Get weather alerts from the government
// It's tin hat time! :D
fetch(wa)
     	.then(res => res.json())
	.then((out) => {
		weatherAlert = out;
		console.log('Alerts: ', weatherAlert);
}).catch(err => console.error(err));
