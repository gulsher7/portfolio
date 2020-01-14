
var text = document.getElementById('text');
var word = document.getElementsByTagName('span');
var i = 0;

function rotator() {
	word[i].style.display = 'none';
	i = (i + 1) % 6;
	word[i].style.display = 'initial';
	}
setInterval(rotator, 800);
	
