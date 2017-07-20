	function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
   
    function toggleSong() {
        var song = document.querySelector('audio');
        if (song.paused == true) {
            console.log('Playing');
            $('.play-icon').removeClass('fa-play').addClass('fa-pause');
            song.play();
        }
		else {
            console.log('Pausing');
            $('.play-icon').removeClass('fa-pause').addClass('fa-play');
            song.pause();
        }
    }
	        function updateCurrentTime() {
            var song = document.querySelector('audio');
           var currentTime = Math.floor(song.currentTime);
    currentTime = fancyTimeFormat(currentTime);
    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)
    $('.time-elapsed').text(currentTime);
    $('.song-duration').text(duration);
}



function addSongNameClickEvent(songName,position) {
    var id = '#song' + position;
$(id).click(function() {
var audio = document.querySelector('audio');
var currentSong = audio.src;
if(currentSong.search(songName) != -1)
{
toggleSong();
}
else {
audio.src = songName;

toggleSong();
}
});
}

            window.onload = function() {
	
			updateCurrentTime();
			setInterval(function() {
            updateCurrentTime()
           },1000);
		   //var songName1 = 'Tamma Song';
		   //var songName2 = 'humma Song';
		   //var songName3 = 'Nashe si chadh gayi';
		   //var songName4 = 'The breakup Song';
		   var songList = ['Tamma Song','Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song']; 
		    var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
			var artistList = [' Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi'];]; 
var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
var durationList = ['2:56','3:15','2:34','2:29'];
window.onload = function() {		
		for(var i =0; i < songList.length;i++) {
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(songList[i]);
        song.find('.song-artist').text(artistList[i]);
        song.find('.song-album').text(albumList[i]); // Added
        song.find('.song-length').text(durationList[i]); // Added
    }

			
		
           //addSongNameClickEvent(fileNames[0],1);
           //addSongNameClickEvent(fileNames[1],2);
           //addSongNameClickEvent(fileNames[2],3);
           //addSongNameClickEvent(fileNames[3],4);
             for (var i=0;  i< fileNames.length ;i++) {
			 addSongNameClickEvent(fileNames[i],i+1);
        }
            }
			  $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
	$(',play-icon').on('click',function() {
	toggleSong();
	});
	
	$('body').on('keypress',function(event) {
	if (event.keycode== 32) {
	toggleSong();
	}
	});