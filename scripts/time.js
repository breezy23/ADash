const m = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const w = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const t = document.getElementById("t_value");
const s = document.getElementById("t_suffix");
const d = document.getElementById("date");

function updateTime() {
	const dte = new Date();
	const month = dte.getMonth();
	const date = dte.getDate();
	const day = dte.getDay();
	const year = dte.getFullYear();

	t.innerHTML = undefined;
	d.innerHTML = undefined;

	let suffix;
	let hour = dte.getHours();
	let minute = dte.getMinutes().toString();

	if(hour < 12) {
		suffix = "AM";
	} else {
		suffix = "PM";
		hour -= 12;
	}

	if(hour == 0) {
		hour = 12;
	}

	if(minute.length < 2) {
		minute = "0"+minute;
	}

	t.textContent = hour+":"+minute;
	s.textContent = suffix;
	d.textContent = w[day]+", "+m[month]+" "+date+", "+year;
}
