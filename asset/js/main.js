const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const papanSkor = document.querySelector(".papan-skor");
const final = document.querySelector("#final");
const ahh = document.querySelector(".ahh");
const end = document.querySelector(".game-over");

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(400, 600);
  tRandom.classList.add("muncul");

  setTimeout(() => {
    tRandom.classList.remove("muncul");
    if (!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanTikus();
  final.play();
  setTimeout(() => {
    selesai = true;
    end.play();
  }, 10000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove("muncul");
  ahh.play();
  papanSkor.textContent = skor;
}

tikus.forEach((t) => {
  t.addEventListener("click", pukul);
});
