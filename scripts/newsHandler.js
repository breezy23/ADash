const test = [
	"Rawr x3 nuzzles",
	"Pounces on you",
	"uwu you so warm",
	"Couldn't help but notice your bulge from across the floor",
	"Nuzzles your necky wecky ~murr~ hehe",
	"Unzips your baggy ass pants",
	"oof baby you so musky",
	"Take me home, pet me, and make me yours and don't forget to stuff me",
	"See me wag my widdle baby tail all for your bulgy-wulgy",
	"Kissies and lickies your neck",
	"I hope daddy likies",
	"Nuzzles and wuzzles your chest",
	"I be getting thirsty"
];

let articles;
let i;

// Update the news headline
setInterval(() => {
	if(i < articles.length) {
		document.getElementById("news").textContent = articles[i].title;
		i++
	} else {
		i = 0;
	}
}, 10*1000)

async function getNews() {
	fetch('http://localhost:8000/news')
  		.then((response) => response.json())
  		.then((data) => {
  			articles = data;
  			newsInit();
  		})
}

function newsInit() {
	i = 0;
	document.getElementById("news").textContent = articles[0].title;
}