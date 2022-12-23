// This class controls the dash, which is why it's called controller! :D
// Basically a lot of definitions and timers

// URL Apis
// One for forecast and another for weather alerts! :D
const wa = "https://api.weather.gov/alerts/active?point=41.99,-93.62";

let weatherAlert;

init();

// Start a lot of timers
// 1 second timer
setInterval(() => {
	updateTime();
}, 1000);

// 30 min timer
setInterval(() => {
	getWeather();
}, 1800000);

// Random functions
function init() {
	updateTime();
	getWeather();
	getNews();
	weatherAlert();

	// Resize twitter widget so that view isn't broken
	// Hacky solution but should work :^)
	document.getElementById("twitter").setAttribute("data-height", document.getElementById("body").clientHeight); // Holy shit that worked
}
