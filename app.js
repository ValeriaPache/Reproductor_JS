const playList = [
    {
      title: 'Set Fire to the Rain',
      artist: 'Adele',
      img: 'img/adele.webp',
      song: 'audio/set fire to the rain.mp3'
    },
    {
      title: 'Forever Alone',
      artist: 'Paulo Londra',
      img: 'img/Paulo Londra.jfif',
      song: 'audio/Forever Alone.mp3'
    },
    {
      title: 'Aprovecha',
      artist: 'Daddy Yankee',
      img: 'img/Daddy Yankee.jfif',
      song: 'audio/Aprovecha (feat. Daddy Yankee).mp3'
    },
    {
      title: 'Mirame',
      artist: 'Blessd',
      img: 'img/Blessd.webp',
      song: 'audio/Mírame.mp3'
    },
    {
      title: 'A poca luz',
      artist: 'Ryan Castro',
      img: 'img/Ryan Castro.jpeg',
      song: 'audio/a poca luz.mp3'
    },
  ]
let currentIndex = 0;

const return1 = document.getElementById('return1');
const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');
const pass = document.getElementById('pass');
const artistName = document.getElementById('artist-name');
const songTitle = document.getElementById('song-title');
const albumCover = document.getElementById('album-cover');

// Load the first song
loadSong(playList[currentIndex]);

function loadSong(song) {
  songTitle.innerText = song.title;
  artistName.innerText = song.artist;
  albumCover.src = song.img;
  audio.src = song.song;
}

play.addEventListener('click', () => audio.play());

pause.addEventListener('click', () => audio.pause());

rewind.addEventListener('click', () => audio.currentTime -= 10);

forward.addEventListener('click', () => audio.currentTime += 10);

stop.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

// Botón para retroceder canción (return1)
return1.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : playList.length - 1;
  loadSong(playList[currentIndex]);
  audio.play();
});

// Botón para avanzar canción (pass)
pass.addEventListener('click', () => {
  currentIndex = (currentIndex < playList.length - 1) ? currentIndex + 1 : 0;
  loadSong(playList[currentIndex]);
  audio.play();
});