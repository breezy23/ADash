// This class controls the dash, which is why it's called controller! :D
// Basically a lot of definitions and timers

// URL Apis
// One for forecast and another for weather alerts! :D
const wa = "https://api.weather.gov/alerts/active?point=41.99,-93.62";

let weatherAlert;

init();

setInterval(() => {
	getImage();
}, 500);

// Start a lot of timers
// 1 second timer
setInterval(() => {
	updateTime();
}, 1000);

// 60 Second timer for weather alerts
setInterval(() => {
	weatherAlertCheck();
}, 60*1000)

// 30 min timer
setInterval(() => {
	getWeather();
}, 1800000);

// Random functions
function init() {
	updateTime();
	getWeather();
	getNews();
	weatherAlertCheck();
	getImage();

	// Resize twitter widget so that view isn't broken
	// Hacky solution but should work :^)
	document.getElementById("twitter").setAttribute("data-height", "100%"); // Holy shit that worked
}
