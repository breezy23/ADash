let curImage = "";

function getImage() {
	fetch('http://localhost:8000/image')
  		.then((response) => response.blob())
  		.then((img) => {
  			var objectURL = URL.createObjectURL(img);
  			document.getElementById("img").src = objectURL;
  		})
}