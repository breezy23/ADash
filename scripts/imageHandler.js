let curImage = "";

function getImage() {
	fetch('http://192.168.1.39:8080/image')
  		.then((response) => response.blob())
  		.then((img) => {
  			var objectURL = URL.createObjectURL(img);
  			document.getElementById("img").src = objectURL;
  		})
}
