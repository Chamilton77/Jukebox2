//every time you reference a key in an object refer to it as this
function Jukebox(){
	this.myAudio = document.getElementById("myAudio");
	this.isPlaying = false;

	this.play = function(){
		if (this.myAudio.paused) {
			this.myAudio.play();
		}else{
			this.myAudio.pause()
		}
	};
	this.onplaying = function(){
		this.isPlaying = true;
	};
	this.onpause = function(){
		this.isPlaying = false;
	};
};	
var music = new Jukebox();

document.getElementById('playsong').addEventListener('click', function(){
	music.play();
});
document.getElementById('change').addEventListener('click', function(){
	document.getElementById('myAudio').src="song2.mp3";
});