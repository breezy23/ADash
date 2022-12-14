const url = "https://api.open-meteo.com/v1/forecast?latitude=42.03&longitude=-93.62&current_weather=true&daily=weathercode,temperature_2m_max,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago";
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const w0 = document.getElementById("weather0");
const w1 = document.getElementById("weather1");
const w2 = document.getElementById("weather2");

let condition
let weather;

// There is *probably* a better way to do this but oh well
function buildWeather() {
	const date = new Date();
	const res = weather;
	const daily = res.daily;
	const current = res.current_weather;
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

	// Create current weather
	// Should have thought ahead oh well
	document.getElementById("c_icon").className = getStyles(undefined, current.weathercode) + " current_icon";
	document.getElementById("c_condition").innerHTML = condition;
	document.getElementById("c_temp").innerHTML = current.temperature+"\u00B0F";
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
	let code;
	// Awful garbage trash ew ew
	if (daily != undefined ) {
		code = daily.weathercode[index];
	} else {
		code = index;
	}

	let styles = "wi ";

	// Not an effeicient way, but I'm a simple man who doesn't
	// understand the nuances of weathercodes
	if(code < 3) {
		styles += "wi-day-sunny";
		condition = "Taste the sun!";
	} else if (code < 20) {
		styles += "wi-day-cloudy";
		condition = "Cloudy";
	} else if (code < 22) {
		styles += "wi-day-sprinkle";
		condition = "Wet";
	} else if (code == 22) {
		styles += "wi-day-snow";
		condition = "Snow???";
	} else if (code < 25) {
		styles += "wi-day-rain-mix";
		condition = "Solid rain?";
	} else if (code == 25) {
		styles += "wi-day-rain";
		condition = "It's raining.";
	} else if (code < 28) {
		styles += "wi-day-rain-mix";
		condition = "Rain but also solid"
	} else if (code == 28) {
		styles += "wi-day-fog";
		condition = "Foggy :o"
	} else if (code == 29) {
		styles += "wi-day-thunderstorm";
		condition = "Thunderstorm! :D";
	} else if (code < 40) {
		styles += "wi-day-snow-wind";
		condition = "Snowing! :D"
	} else if (code < 50) {
		styles += "wi-day-fog";
		condition = "Foggy :o";
	} else if (code < 60) {
		styles += "wi-day-sprinkle";
		condition = "Sprinkling";
	} else if (code < 70) {
		styles += "wi-day-rain";
		condition = "Raining";
	} else if (code < 80) {
		styles += "wi-day-snow-wind";
		condition = "Snowing";
	} else if (code < 83) {
		styles += "wi-day-rain-wind";
		condition = "Raining";
	} else if (code < 85) {
		styles += "wi-day-rain-mix";
		condition = "Rainy mix";
	} else if (code < 91) {
		styles += "wi-day-snow-wind";
		condition = "Snowing";
	} else {
		styles += "wi-day-thunderstorms";
		condition = "Thunderstorms";
	}

	return styles;

}
