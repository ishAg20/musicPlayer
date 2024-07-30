document.querySelector("#left").style.backgroundImage = "url('poster.jpg')";
var songs = [
  {
    name: "This Town",
    duration: "3:56",
    image: "thistown.jpeg",
    url: "This-Town.mp3",
  },
  {
    name: "About Love",
    duration: "3:56",
    image: "aboutlove.png",
    url: "ab-aankhe-meri-tujhe-dhoonda-kare-tu-mile-na-agar-to-yeh-54824.mp3",
  },
  {
    name: "Lose You To Love Me",
    duration: "4:20",
    image: "loveme.jpeg",
    url: "Selena_Gomez_-_Lose_You_To_Love_Me_HipHopTone.com.mp3",
  },
  {
    name: "Perfect",
    duration: "3:45",
    image: "perfect.jpeg",
    url: "Perfect Ed Sheeran-(PagalSongs.Com.IN).mp3",
  },
  {
    name: "Photograph",
    duration: "3:50",
    image: "photograph.jpeg",
    url: "suniyan-suniyan-1-ringtone-62779-63017.mp3",
  },
];
function renderSongs() {
  songs.forEach(function (song, index) {
    document.querySelector(
      "#all-songs"
    ).innerHTML += `    <div class="song-card" id="${index}">
            <div class="part1">
              <img
                src="${song.image}"
              />
              <h2>${song.name}</h2>
            </div>
            <h6>${song.duration}</h6>
          </div>`;
  });
}
renderSongs();
var audio = new Audio();
var selectedSong;
document.querySelector("#all-songs").addEventListener("click", function (dets) {
  if (dets.target.classList.contains("song-card")) {
    selectedSong = dets.target.id;
    playSong(selectedSong);
  }
});
function playSong(index) {
  document.querySelector(
    "#left"
  ).style.backgroundImage = `url(${songs[index].image})`;
  audio.src = songs[index].url;
  document.querySelector(
    "#player"
  ).innerHTML = `<h4>${songs[index].name}</h4><h3 class="backward"><i class="ri-skip-back-mini-fill backward"></i></h3>
      <h3 id="play"><i class="ri-pause-fill toggle-icon"></i></h3>
      <h3 class="forward"><i class="ri-skip-forward-mini-fill forward"></i></h3>`;
  audio.play();
  selectedSong = index;
}

function togglePlayPause() {
  var icon = document.querySelector("#play i");
  if (icon.classList.contains("ri-pause-fill")) {
    icon.classList.remove("ri-pause-fill");
    icon.classList.add("ri-play-fill");
    audio.pause();
  } else {
    icon.classList.remove("ri-play-fill");
    icon.classList.add("ri-pause-fill");
    audio.play();
  }
}

document.querySelector("#player").addEventListener("click", function (event) {
  if (event.target.id === "play" || event.target.parentElement.id === "play") {
    togglePlayPause();
  }
  if (selectedSong !== undefined) {
    if (event.target.classList.contains("forward")) {
      if (selectedSong < songs.length - 1) {
        playSong(selectedSong + 1);
      }
    }
    if (event.target.classList.contains("backward")) {
      if (selectedSong > 0) {
        playSong(selectedSong - 1);
      }
    }
  }
});
