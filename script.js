console.log("Js is Working");

const musicAudio = document.getElementById("music-audio");
const playBtnIcon = document.getElementById("play-btn-icon");
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const previousBtn = document.getElementById("previous-btn");
const songDuration = document.getElementById("song-duration");
const volumeProgress = document.getElementById("volume-progress");
const musicPlayAnimation = document.getElementById("music-play-animation");
const songName = document.getElementById("song-name");
const artistName = document.getElementById("artist-name");
const albumCover = document.getElementById("album-cover");
const songStart = document.getElementById("song-start");
const songEnd = document.getElementById("song-end");
const lyricsContainer = document.getElementById("lyrics-container");
const bg = document.getElementById("bg");

let songs = [
  {
    title: "Finding Her",
    src: "songs/finding her.mp3",
    artist: "Alec Benjamin",
    albumImage: "covers/finding her.jpg",
    bg: "./covers/finding her.jpg",
    lyrics: [
      { time: 16.04, text: "Jaana tu aata nahin" },
      { time: 20.18, text: "Sapnon se jaata nahin" },
      { time: 24.45, text: "Mil jaaye kya hi baat thi" },
      { time: 28.7, text: "Kaamil ho jaata wahin" },
      { time: 32.41, text: "--------------------------------" },
      { time: 33.32, text: "Jaana mere sawaalon ka manzar tu" },
      { time: 37.54, text: "Haan main sookha sa saara samandar tu" },
      { time: 41.8, text: "Haan gulaabi si surkhi jo dikhti thi" },
      {
        time: 45.99,
        text: "Fir se dikh jaaye to jee bhar ke saanh bhar lun",
      },
      { time: 50.29, text: "Kaati kitni thi raatein nahin soya main" },
      { time: 54.48, text: "Tujhko kitna bulaaya fir roya main" },
      { time: 58.8, text: "Teri saari wo baatein kyoon sone nahin deti" },
      { time: 63.32, text: "Sataaye mujhe haan fir khoya main" },
      { time: 66.93, text: "--------------------------------" },
      { time: 67.78, text: "Tu aata nahin" },
      { time: 71.08, text: "Sapnon se jaata nahin" },
      { time: 75.3, text: "Mil jaaye kya hi baat thi" },
      { time: 79.53, text: "Kaamil ho jaata wahin" },
      { time: 83.69, text: "Jo bhi ho raaz tera" },
      { time: 87.95, text: "Mujhko batata nahi" },
      { time: 92.2, text: "Mil jaaye kya hi baat thi" },
      { time: 96.48, text: "Kaamil ho jaata wahin" },
      { time: 100.45, text: "--------------------------------" },
      { time: 118.52, text: "Sambhaal ke rakha wo phool mera tu" },
      { time: 122.84, text: "Meri shaayari mein zaroor raha tu" },
      { time: 127.05, text: "Jo aankhon mein pyaari si duniya basaai" },
      { time: 131.32, text: "Wo duniya bhi tha tu wo lamha bhi tha tu" },
      { time: 135.35, text: "Haan lagte hain mujhko ye kisse sataane" },
      { time: 139.86, text: "Deta na dil mera tujhko bhulaane" },
      { time: 144.02, text: "Adhoore se waade adhoori si raatein" },
      { time: 148.06, text: "Ab hisse mein daakhil meri bas wo yaadein" },
      { time: 152.28, text: "--------------------------------" },
      { time: 152.55, text: "Rehna tha ban ke humdam tera" },
      { time: 156.18, text: "Aise jaana hi tha fir tu kyoon thehra" },
      { time: 160.37, text: "Ab na maane mera dil ke na tere kaabil" },
      { time: 165.19, text: "Thi ik aarzoo ki main kehta raha par" },
      { time: 169.23, text: "--------------------------------" },
      { time: 169.23, text: "Tu aata nahin" },
      { time: 172.67, text: "Sapnon se jaata nahin" },
      { time: 176.88, text: "Mil jaaye kya hi baat thi" },
      { time: 181.2, text: "Kaamil ho jaata wahin" },
      { time: 185.38, text: "Jo bhi ho raaz tera" },
      { time: 189.65, text: "Mujhko batata nahi" },
      { time: 193.89, text: "Mil jaaye kya hi baat thi" },
      { time: 198.19, text: "Kaamil ho jaata wah" },
    ],
  },
  {
    title: "Dil Lagana Mana Tha",
    src: "songs/dil lagana mana tha.mp3",
    artist: "Krish Mondal and Kishore Mondal",
    albumImage: "covers/dil lagana mana tha.jpg",
    bg: "covers/dil\ lagana\ mana\ tha.jpg",
    lyrics: [
      { time: 0.54, text: "Zamaane ki tarah hum bhi tode hain gaye" },
      { time: 5.07, text: "Aise tanha to na the, tanha chhode hain gaye" },
      { time: 9.75, text: "(Tanha chhode hain gaye)" },
      {
        time: 12.85,
        text: "Na dil se wo yaadein jaayein, na raaton ko neendein aayein",
      },
      {
        time: 17.82,
        text: "Aate hain fir khwaab kyun? Aate hain kyun khwaab?",
      },
      {
        time: 22.44,
        text: "Jo thi tere ishq mein doobi, un aankhon mein tum le aaye",
      },
      { time: 27.29, text: "Aansu behisaab kyun? Aansu behisaab..." },
      {
        time: 31.29,
        text: "Khair hai, yaaron, kam-se-kam jaan se ja na paaye hum",
      },
      {
        time: 36.09,
        text: "Khair hai, yaaron, kam-se-kam jaan se ja na paaye hum",
      },
      { time: 41.39, text: "Inkaar ke bahaane kai baar karte-karte" },
      {
        time: 46.52,
        text: "Humne wahin lagaya dil, jahaan dil lagana mana tha",
      },
      {
        time: 51.26,
        text: "Aakhir wahin kiye sajde, jahaan sar jhukana mana tha",
      },
      {
        time: 55.76,
        text: "Kyun zindagi bita di, jahaan pe ik pal bitana mana tha?",
      },
      {
        time: 60.47,
        text: "Kyun us gali mein rehte the hum, jahaan roz jaana mana tha?",
      },

      { time: 70.22, text: "Zamaane ki tarah hum bhi tode hain gaye" },
      { time: 74.67, text: "Aise tanha to na the, tanha chhode hain gaye" },
      { time: 79.44, text: "Jo duaayein dete the, haan, usi ke hothon se" },
      { time: 84.26, text: "Aise-waise lafz bhi humse bole hain gaye" },
      { time: 89.69, text: "--------------------------------" },

      { time: 111.27, text: "Baitho kisi roz tanhaai mein" },
      { time: 115.82, text: "Rakho saamne waqt ke aaine" },
      { time: 120.51, text: "Jo aayega chehra nazar wo kahin" },
      { time: 125.39, text: "Tumhein 'Bewafa' keh ke hans na pade" },
      { time: 130.23, text: "Tujhe dil diya, istemaal hue" },
      { time: 134.97, text: "Hai tujh mein bhi dil, ye khayaal rahe" },
      { time: 139.82, text: "Tujhe dil diya, istemaal hue" },
      { time: 144.5, text: "Hai tujh mein bhi dil, ye khayaal rahe" },
      {
        time: 149.69,
        text: "Humne jalaya dil, jahaan diye bhi jalana mana tha",
      },
      {
        time: 154.47,
        text: "Kar baithe yaad wo chehra, jisko bhulana mana tha",
      },
      { time: 158.9, text: "Hum aazmaaye gaye, magar unhein aazmana mana tha" },
      {
        time: 163.98,
        text: "Humne wahin lagaya dil, jahaan dil lagana mana tha",
      },
      { time: 168.54, text: "(Pa ma pa, pa ma pa, ni dha pa, ma ga re ga)" },
      { time: 171.2, text: "(Pa, pa ma pa, ni dha pa)" },
      { time: 173.31, text: "Zamaane ki tarah hum bhi tode hain gaye" },
      { time: 177.85, text: "Aise tanha to na the, tanha chhode hain gaye" },
      { time: 182.82, text: "Jo duaayein dete the, haan, usi ke hothon se" },
      { time: 187.49, text: "Aise-waise lafz bhi humse bole hain gaye" },
    ],
  },
  {
    title: "Bairan",
    src: "songs/bairan.mp3",
    artist: "he musical duo Banjaare",
    albumImage: "covers/bairan.jpg",
    bg: "covers/bairan.jpg",
    lyrics: [
      { time: 6.25, text: "O manne sambh-sambh rakhe tere jhanjhara ke jode" },
      { time: 10.0, text: "Meri gail ro-roye bhi chhori bawle se hore" },
      {
        time: 13.5,
        text: "Manne aaye jaave khyaal tere, khaye jaave khyaal tere",
      },
      { time: 17.5, text: "Jeene koni deti haye bairi tanhaai manne" },
      { time: 20.8, text: "Geeta mein gayi kade chhaati ke lagayi manne" },
      { time: 24.25, text: "Jid bhi gaya re teri yaad khadi paayi manne" },
      { time: 27.6, text: "Sambh-sambh rakhi bahut chhaati ke lagayi manne" },
      { time: 31.0, text: "Jid bhi gaya re teri yaad khadi paayi manne" },
      { time: 35.5, text: "--------------------------------" },

      { time: 47.75, text: "O maara-maara phire dekh haal tu bechare ka" },
      { time: 51.65, text: "Tere bina jeena bhi ke jeena banjaare ka" },
      { time: 55.0, text: "Khoya rahun yaad teri karke nadaaniyan" },
      { time: 58.5, text: "Batue mein rakhun teri sambh ke nishaniyan" },
      { time: 61.9, text: "Tere bina kaal hora thik kona haal mera" },
      { time: 65.35, text: "Haath jodu Ram dede sasah te rihaayi manne" },
      { time: 68.75, text: "Geeta mein gayi kade chhaati ke lagayi manne" },
      { time: 72.2, text: "Jid bhi gaya re teri yaad khadi paayi manne" },
      { time: 75.6, text: "Sambh-sambh rakhi bahut chhaati ke lagayi manne" },
      { time: 79.0, text: "Jid bhi gaya re teri yaad khadi paayi manne" },
      { time: 82.5, text: "--------------------------------" },

      { time: 95.5, text: "Je tu thodi ghabra ja meri yaad tanne aajya" },
      { time: 99.2, text: "Tu de diye awaaz re main aajyunga" },
      { time: 102.42, text: "Todhu duniya ki reet re ke haar re ke jeet" },
      { time: 105.8, text: "Manne chahiye teri preet main nibha jayunga" },
      { time: 109.3, text: "Dekh bawla banagi manne likhna sikha gayi haye" },
      { time: 113.4, text: "Noch-noch kha gayi teri bairan judayi manne" },
      { time: 116.75, text: "Geeta mein gayi kade chhaati ke lagayi manne" },
      { time: 120.26, text: "Jid bhi gaya re teri yaad khadi paayi manne" },
      { time: 123.76, text: "Aaj te nibhaun jo si kasam thi khaayi manne" },
      { time: 127.12, text: "Zindagi saari aa meri tere lekhe laayi manne" },
    ],
  },
  {
  title: "Suniyan Suniyan",
  src: "songs/suniyan\ suniyan.mp3",
  artist: "Juss",
  albumImage: "covers/suniya\ suniya.jpg",
  bg: "covers/suniya\ suniya.jpg",

  lyrics: [
    { time: 14.46, text: "Ho suniyan suniyan raatan te raatan de vich tu" },
    { time: 18.38, text: "Jad vi tainu labhan te mil je mainu tu" },
    { time: 22.09, text: "Saare din diyan gallan behke dassan main tainu" },
    { time: 25.54, text: "Tu mainu bhulle na kade main na bhullan tainu" },

    { time: 36.34, text: "Ho suniyan suniyan raatan te raatan de vich tu" },
    { time: 40.48, text: "Jad vi tainu labhan te mil je mainu tu" },
    { time: 44.19, text: "Saare din diyan gallan behke dassan main tainu" },
    { time: 47.68, text: "Tu mainu bhulle na kade main na bhullan tainu" },

    { time: 62.63, text: "Tainu main manavaan tere te mari jaavan" },
    { time: 66.36, text: "Mere te tu mare hi na" },
    { time: 70.05, text: "Aidda nahio hunda main hi kari jaavan" },
    { time: 73.75, text: "Te tu mera kare hi na" },
    { time: 77.48, text: "Tainu main manavaan tere te meri jaavan" },
    { time: 81.11, text: "Mere te tu mare hi na" },
    { time: 84.77, text: "Aidda nahio hunda main hi kari jaavan" },
    { time: 88.51, text: "Te tu mera kare hi na" },

    { time: 91.74, text: "Oh chhaliya chhaliya baatan te baatan de vich tu" },
    { time: 95.76, text: "Jad vi tang koi karda bas karda tu mainu" },
    { time: 99.55, text: "Main hi kardi gallan kyu nahi karda tu" },
    { time: 102.99, text: "Tu mainu bhulle na kade main na bhullan tainu" },

    { time: 121.35, text: "Oh khela na kade vi tere dil naal main" },
    { time: 125.41, text: "Har velle rakha tainu mere naal main" },
    { time: 129.06, text: "Mar jaavan othe jithe tu na mile" },
    { time: 132.81, text: "Jhooth na main bola kade tere naal main" },
    { time: 136.55, text: "Meriyan jo gallan tainu buri lagge" },
    { time: 140.20, text: "Oh gallan karan hi na" },
    { time: 143.91, text: "Tera val vekha tainu hi main vekhan" },
    { time: 147.22, text: "Hor val muh kara hi na" },

    { time: 150.83, text: "Oh lammiya lammiya vaatan te vaatan de vich tu" },
    { time: 154.97, text: "Main taan chavan mera parchhavan banje tu" },
    { time: 158.72, text: "Nehde nehde rakh le hath fad ke mainu" },
    { time: 162.10, text: "Tu mainu bhulle na kade main na bhullan tainu" },

    { time: 169.27, text: "Ho suniyan suniyan raatan te raatan de vich tu" },
    { time: 173.42, text: "Jad vi tainu labhan te mil je mainu tu" },
    { time: 177.08, text: "Saare din diyan gallan behke dassan main tainu" },
    { time: 180.65, text: "Tu mainu bhulle na kade main na bhullan tainu (Aa)" }
  ]
},
  {
    title: "Sahiba",
    src: "songs/sahiba.mp3",
    artist: "Aditya Rikhari",
    albumImage: "covers/sahiba.jpg",
    bg: "covers/sahiba.jpg",
    lyrics: [
      { time: 10.1, text: "Sahiba, aaye ghar kaahe na? Aise to sataye na" },
      { time: 15.99, text: "Dekhu tujhko, chain aata hai" },
      {
        time: 19.62,
        text: "Sahiba, neendein-veendein aaye na, raatein kaati jaaye na",
      },
      { time: 25.63, text: "Tera hi khayaal din-rain aata hai" },
      { time: 30.38, text: "Sahiba, samundar meri aankhon mein reh gaye" },
      { time: 34.95, text: "Hum aate-aate, jaana, teri yaadon mein reh gaye" },
      {
        time: 39.94,
        text: "Ye palkein gawaahi hain, hum raaton mein reh gaye",
      },
      { time: 44.6, text: "Jo waade kiye saare bas baaton mein reh gaye" },
      {
        time: 48.49,
        text: "Baaton-baaton mein hi, khwaabon-khwaabon mein hi mere kareeb hai tu",
      },
      {
        time: 53.32,
        text: "Teri talab mujhko, teri talab, jaana, ho tu kabhi ru-ba-ru",
      },
      {
        time: 58.08,
        text: "Shor-sharaaba jo seene mein hai mere, kaise bayaan main karun?",
      },
      { time: 63.05, text: "Haal jo mera hai, main kis ko bataaun?" },
      {
        time: 67.03,
        text: "Mere Sahiba, dil na kiraye ka, thoda to sambhaalo na",
      },
      { time: 73.51, text: "Naazuk hai ye, toot jaata hai" },
      {
        time: 77.32,
        text: "Sahiba, neendein-veendein aaye na, raatein kaati jaaye na",
      },
      { time: 83.39, text: "Tera hi khayaal din-rain aata hai" },
      { time: 88.05, text: "--------------------------------" },

      {
        time: 110.97,
        text: "Kaisi bhala shab hogi wo sang jo tere dhalti hai?",
      },
      {
        time: 120.45,
        text: "Dil ko koi khwaahish nahin, teri kami khalti hai",
      },
      {
        time: 130.14,
        text: "Aaraam na ab aankhon ko, khwaab bhi na badalti hai",
      },
      {
        time: 139.51,
        text: "Dil ko koi khwaahish nahin, teri kami, jaana, khalti hai",
      },
      {
        time: 149.25,
        text: "Sahiba, tu hi mera aaina, haathon mein bhi mere, haan",
      },
      { time: 155.3, text: "Tera hi naseeb aata hai" },
      {
        time: 158.98,
        text: "Sahiba, neendein-veendein aaye na, raatein kaati jaaye na",
      },
      { time: 164.96, text: "Tera hi khayaal din-rain aata hai" },
      {
        time: 168.68,
        text: "Sahiba, neendein-veendein aaye na, raatein kaati jaaye na",
      },
      { time: 174.64, text: "Tera hi khayaal din-rain aata hai" },
    ],
  },
];

let currentSongIndex = 0;

// --------> Update play/pause icon
function pauseIconUpdate() {
  playBtnIcon.src = "icons/pause-icon.png";

  musicPlayAnimation.classList.remove("paused");
  musicPlayAnimation.classList.add("playing");
}

function playIconUpdate() {
  playBtnIcon.src = "icons/play-icon.png";

  musicPlayAnimation.classList.remove("playing");
  musicPlayAnimation.classList.add("paused");
}
// --------> Update player UI
function updateUI() {
  // activeSong();
  if (musicAudio.paused) {
    playIconUpdate();
    // activeSong();
  } else {
    pauseIconUpdate();
  }
  albumCover.style.backgroundImage = `url('${songs[currentSongIndex].albumImage}')`;
  bg.style.backgroundImage = `url('${songs[currentSongIndex].bg}')`;
}

// ---------> Play / Pause button
playBtn.addEventListener("click", () => {
  if (musicAudio.paused) {
    musicAudio.play();
  } else {
    musicAudio.pause();
  }
  updateUI();
});

// ---------> Next song button
nextBtn.addEventListener("click", () => {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
    playSong(currentSongIndex);
  } else {
    playSong(currentSongIndex);
  }
});

// ---------> Previous song button
previousBtn.addEventListener("click", () => {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
    playSong(currentSongIndex);
  } else {
    //  currentIndex++
    playSong(currentSongIndex);
  }
});

// --------> Update progress bar while song is playing
musicAudio.addEventListener("timeupdate", function () {
  songDuration.value = parseInt(
    (musicAudio.currentTime / musicAudio.duration) * 100,
  );
});

// --------> Update current playback time on progress bar click
songDuration.addEventListener("input", () => {
  if (!musicAudio.duration) return;

  musicAudio.currentTime =
    (songDuration.value / 100) * musicAudio.duration;

  updateActiveLyric();
});

// --------> Play selected song
function playSong(index) {
  currentSongIndex = index;
  // listItem.forEach((item) => {
  //   item.classList.remove("active");
  // });

  musicAudio.src = songs[currentSongIndex].src;
  musicAudio.load();
  musicAudio.play();
  updateUI();

  songName.innerText = songs[currentSongIndex].title;
  artistName.innerText = songs[currentSongIndex].artist;

  // if(musicAudio.currentTime == songs.lyrics.time){
  //   lyrics.innerText = songs[currentSongIndex].lyrics.text;

  // }

  createLyrics();
}

// --------> Auto play next song when current song ends
musicAudio.addEventListener("ended", () => {
  currentSongIndex++;

  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }

  playSong(currentSongIndex);
});

playSong(currentSongIndex);

musicAudio.volume = 0.1;
volumeProgress.value = 0.1;
volumeProgress.addEventListener("input", () => {
  // console.log(volumeProgress.value);

  musicAudio.volume = volumeProgress.value;
});

musicAudio.addEventListener("timeupdate", () => {
  let currentTime = musicAudio.currentTime;
  let inMin = Math.floor(currentTime / 60);
  let inSec = Math.floor(currentTime % 60);

  songStart.innerText = `${inMin}:${inSec}`;
  songEnd.innerText = `${Math.floor(musicAudio.duration / 60)}:${Math.floor(musicAudio.duration % 60)}`;
});

function createLyrics() {
  lyricsContainer.innerHTML = "";

  songs[currentSongIndex].lyrics.forEach((line, index) => {
    const p = document.createElement("p");

    p.innerText = line.text;

    p.dataset.index = index;

    lyricsContainer.appendChild(p);
  });
}
function updateActiveLyric() {
  let activeIndex = -1;
  songs[currentSongIndex].lyrics.forEach((line, index) => {
    if (musicAudio.currentTime >= line.time) {
      activeIndex = index;
    }
  });

  lyricsContainer.querySelectorAll("p").forEach((p) => {
    p.classList.remove("active");
  });

 if (activeIndex !== -1) {
const activeLine = lyricsContainer.children[activeIndex];

const top =
  activeLine.offsetTop -
  lyricsContainer.clientHeight / 2 +
  activeLine.clientHeight / 2;

lyricsContainer.scrollTo({
  top,
  behavior: "smooth",
});

activeLine.classList.add("active");
}
}

musicAudio.addEventListener("timeupdate", () => {
  updateActiveLyric();
});

// --------> KEYBOARD CONTROLS

document.addEventListener("keydown", (e) => {
  // Space = Play / Pause
  if (e.code === "Space") {
    e.preventDefault();
    playBtn.click();
  }

  // Previous Song
  if (e.code === "ArrowLeft") {
    previousBtn.click();
  }

  // Next Song
  if (e.code === "ArrowRight") {
    nextBtn.click();
  }

  // Volume Up
  if (e.code === "ArrowUp") {
    e.preventDefault();

    musicAudio.volume = Math.min(1, musicAudio.volume + 0.1);
    volumeProgress.value = musicAudio.volume;
  }

  // Volume Down
  if (e.code === "ArrowDown") {
    e.preventDefault();

    musicAudio.volume = Math.max(0, musicAudio.volume - 0.1);
    volumeProgress.value = musicAudio.volume;
  }
});


console.log(previousBtn);
console.log(previousBtn);
