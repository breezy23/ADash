let curImage = "";

function getImage() {
	fetch('http://localhost:8000/image')
  		.then((response) => response.text())
  		.then((img) => {
  			document.getElementById("img").src = img;
  		})
}