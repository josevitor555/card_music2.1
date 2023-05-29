document.addEventListener("DOMContentLoaded", function() { 
    var musicas = [ 
      { 
        nome: "Self-Love",
        artista: "Ace Aura, Trinergy", 
        arquivo: "music/Ace Aura, Trinergy - Self-Love.mp3",
      },
      {
        nome: "Wait For Me", 
        artista: "Chime", 
        arquivo: "music/Chime - Wait For Me.mp3",
      },
      {
        nome: "MSHPT", 
        artista: "CYBRPNK & Sullivan King", 
        arquivo: "music/CYBRPNK & Sullivan King - MSHPIT.mp3",
      },
      {
        nome: "Nasty",
        artista: "Datsik & Virtual Riot",
        arquivo: "music/Datsik & Virtual Riot - Nasty.mp3",
      },
      {
       nome: "Vantablack",
       artista: "Dirtyphonics & Sullivan King",
       arquivo: "music/Dirtyphonics & Sullivan King - Vantablack.mp3"
     },
     {
       nome: "1 On 1",
       artista: "Excision & Space Laces",
       arquivo: "music/Excision & Space Laces - 1 On 1.mp3",
     },
     {
       nome: "Pray For Riddim",
       artista: "Virtual Riot",
       arquivo: "music/Virtual Riot - Pray For Riddim.mp3",
     }
    ];
    
    var currentSongIndex = 0; 
    var audio = document.getElementById("player-audio"); 
    var songName = document.getElementById("song-name"); 
    var artistName = document.getElementById("name-artist"); 
    var pButton = document.getElementById("play-pause"); 
    var backwardButton = document.querySelector(".fa-backward"); 
    var forwardButton = document.querySelector(".fa-forward"); 
    var currentTimeSpan = document.querySelector(".current-time"); 
    var durationSpan = document.querySelector(".duration"); 
    var seekSlider = document.getElementById("seek-slider"); 
    var rIcon = document.querySelector('.fa-repeat'); 
   
    function formatTime(timeInSeconds) { 
      var minutes = Math.floor(timeInSeconds / 60); 
      var seconds = Math.floor(timeInSeconds % 60); 
      var formattedTime = 
        (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds; 
      return formattedTime; 
    } 
     
    function updateSeekBar() { 
      seekSlider.value = audio.currentTime; 
    } 
     
    function onSeekBarChange() { 
      audio.currentTime = seekSlider.value; 
    } 
   
    function updateCurrentTime() { 
      currentTimeSpan.textContent = formatTime(audio.currentTime); 
    } 
   
    function updateDuration() { 
      durationSpan.textContent = formatTime(audio.duration); 
      seekSlider.max = audio.duration; 
    } 
   
    var isPlaying = false; 
   
    function updatePlayPauseIcon() { 
      if (isPlaying) { 
        pButton.classList.remove("fa-play"); 
        pButton.classList.add("fa-pause"); 
      } else { 
        pButton.classList.remove("fa-pause"); 
        pButton.classList.add("fa-play"); 
      } 
    } 
    function playPause() { 
      if (audio.paused) { 
        audio.play(); 
        isPlaying = true; 
      } else { 
        audio.pause(); 
        isPlaying = false; 
      } 
      updatePlayPauseIcon(); 
    }
   
    function playNextSong() { 
      currentSongIndex = (currentSongIndex + 1) % musicas.length; 
      loadSong(currentSongIndex);
      audio.play(); 
      isPlaying = true; 
      updatePlayPauseIcon();
    } 
   
    function playPreviousSong() { 
      currentSongIndex = (currentSongIndex - 1 + musicas.length) % musicas.length; 
      loadSong(currentSongIndex);
      audio.play(); 
      isPlaying = true; 
      updatePlayPauseIcon();
    }
   
    function toggleRepeat() { 
      rIcon.classList.toggle("active");
    } 
     
    function playNextOrFirstSong() { 
      if (rIcon.classList.contains('active')) { 
        audio.currentTime = 0; 
      } else { 
        if (currentSongIndex === musicas.length - 1) { 
          currentSongIndex = 0; 
        } else { 
          currentSongIndex++; 
        } 
      } 
      loadSong(currentSongIndex); 
      audio.play(); 
      isPlaying = true; 
      updatePlayPauseIcon();
    } 
   
    function loadSong(index) { 
      var musica = musicas[index]; 
      songName.textContent = musica.nome; 
      artistName.textContent = musica.artista; 
      audio.src = musica.arquivo; 
      audio.load();
    }
    
    audio.addEventListener("timeupdate", updateCurrentTime); 
    audio.addEventListener("timeupdate", updateSeekBar); 
    seekSlider.addEventListener("input", onSeekBarChange); 
    audio.addEventListener("durationchange", updateDuration); 
    audio.addEventListener("ended", playNextOrFirstSong); 
    pButton.addEventListener("click", playPause); 
    forwardButton.addEventListener("click", playNextSong); 
    backwardButton.addEventListener("click", playPreviousSong); 
    rIcon.addEventListener("click", toggleRepeat) 
     
    loadSong(currentSongIndex); 
  });
  