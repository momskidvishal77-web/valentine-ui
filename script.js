let audio = null;

function startMusic() {
  if (!audio) {
    audio = new Audio("music.mp3");
    audio.loop = true;
    audio.volume = 0.6;
    audio.play();
    sessionStorage.setItem("musicStarted", "true");
  }
}

function initMusic() {
  if (sessionStorage.getItem("musicStarted")) {
    audio = new Audio("music.mp3");
    audio.loop = true;
    audio.volume = 0.6;
    audio.play();
  }
}

window.onload = initMusic;

function run(btnId) {
  const btn = document.getElementById(btnId);
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

function yesFinal() {
  document.body.innerHTML = `
    <h1 style="text-align:center; margin-top:40vh;">
      😊 I was really hoping it’d be you, Janhavi 💙
    </h1>
  `;
}
