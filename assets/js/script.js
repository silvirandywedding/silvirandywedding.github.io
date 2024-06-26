const rootElement = document.querySelector(":root");
const cover = document.querySelector(".hero");
const btnOpen = document.querySelector(".undangan");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
const song = document.querySelector("#song");
let isPlaying = false;

function disableScroll() {
  scrollTop = document.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = document.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  // localStorage.setItem("opened", "true");

  playAudio();
}

function playAudio() {
  song.volume = 0.3;
  audioIconWrapper.style.display = "flex";
  song.play();
  isPlaying = true;
}

audioIconWrapper.addEventListener("click", () => {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("fa-compact-disc");
    audioIcon.classList.add("fa-circle-pause");
  } else {
    song.play();
    audioIcon.classList.add("fa-compact-disc");
    audioIcon.classList.remove("fa-circle-pause");
  }

  isPlaying = !isPlaying;
});

// if (!localStorage.getItem("opened")) {
//   disableScroll();
// } else {
//   cover.classList.add("d-none");
// }

disableScroll();

btnOpen.addEventListener("click", () => {
  cover.setAttribute("data-aos", "fade-down");

  setTimeout(() => {
    cover.classList.add("hero-out");
  }, 1000);
});

const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "";
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i, ";
const namaRsvp = document.querySelectorAll(".rsvp #nama");

const namaContainer = document.querySelector(".hero h4 span");
namaContainer.innerText = `${pronoun} ${nama}`;
namaRsvp.forEach((n) => (n.value = nama));
