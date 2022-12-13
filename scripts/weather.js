const url = "https://api.open-meteo.com/v1/forecast?latitude=42.03&longitude=-93.62&current_weather=true&daily=weathercode,temperature_2m_max,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago";
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const w0 = document.getElementById("weather0");
const w1 = document.getElementById("weather1");
const w2 = document.getElementById("weather2");

let weather;

// There is *probably* a better way to do this but oh well
function buildWeather() {
	const date = new Date();
	const res = weather;
	const daily = res.daily;
	let temp;
	let code;
	let day;
	let icon;

	// Create weather containers
	for (let i = 0; i < 3; i++) {
		let styles;

		day = days[(date.getDay()+i)%7];
		temp = daily.temperature_2m_max[i];i

		document.getElementById("d"+i).innerHTML = day;
		document.getElementById("t"+i).innerHTML = temp+"\u00B0F";

		// Oh boy time to select the icon for the weather code
		document.getElementById("i"+i).className = getStyles(daily, i);

		getStyles(daily, i);
	}
}

// Get response from open-meteo
function getWeather() {
	fetch(url)
	.then(res => res.json())
	.then((out) => {
		weather = out;
		buildWeather();
		console.log("Weather: ", weather);
	}).catch(err => console.error(err));
}

// :(
function getStyles(daily, index) {
	let code = daily.weathercode[index];
	let styles = "wi ";

	// Not an effeicient way, but I'm a simple man who doesn't
	// understand the nuances of weathercodes
	if(code < 3) {
		styles += "wi-day-sunny";
	} else if (code < 20) {
		styles += "wi-day-cloudy";
	} else if (code < 22) {
		styles += "wi-day-sprinkle";
	} else if (code == 22) {
		styles += "wi-day-snow";
	} else if (code < 25) {
		styles += "wi-day-rain-mix";
	} else if (code == 25) {
		styles += "wi-day-rain";
	} else if (code < 28) {
		styles += "wi-day-rain-mix";
	} else if (code == 28) {
		styles += "wi-day-fog";
	} else if (code == 29) {
		styles += "wi-day-thunderstorm";
	} else if (code < 40) {
		styles += "wi-day-snow-wind";
	} else if (code < 50) {
		styles += "wi-day-fog";
	} else if (code < 60) {
		styles += "wi-day-sprinkle";
	} else if (code < 70) {
		styles += "wi-day-rain";
	} else if (code < 80) {
		styles += "wi-day-snow-wind";
	} else if (code < 83) {
		styles += "wi-day-rain-wind";
	} else if (code < 85) {
		styles += "wi-day-rain-mix";
	} else if (code < 91) {
		styles += "wi-day-snow-wind";
	} else {
		styles += "wi-day-thunderstorms";
	}

	return styles;

}
