//every time you reference a key in an object refer to it as this
//This object sets it up so that a song plays on load and pauses 
//and plays when you press on the div.
//the if else statement controls the pause and play functions
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
	this.loadSong = function(songname){
		this.myAudio.src = songname;
	}
};
//this sets up a new instance of jukebox so that it can be set to play	
var music = new Jukebox();
//this is the function that adds the event listener to the div to 
//start the music
document.getElementById('playsong').addEventListener('click', function(){
	music.play();
});


document.getElementById('song2').addEventListener('change', function(){
	var songn = this.value.substr(this.value.lastIndexOf('\\') + 1);
	music.loadSong(songn);
});
