
const ambient = document.querySelector(".ambient");

const symbols = ["♡", "✧", "♥", "✿", "୨୧"];

function makeFloaty() {
  if (!ambient) return;

  const element = document.createElement("span");

  element.className = "floaty";
  element.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];

  element.style.left = Math.random() * 100 + "%";
  element.style.fontSize = (12 + Math.random() * 15) + "px";
  element.style.animationDuration =
    (7 + Math.random() * 7) + "s";

  ambient.appendChild(element);

  setTimeout(() => element.remove(), 14500);
}

// Floating hearts and sparkles
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(makeFloaty, 850);
}

// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });
}


const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter-paper");
const letterBook = document.getElementById("letter-book");

const flipButton = document.getElementById("flip-button");
const flipBack = document.getElementById("flip-back");

// Open the envelope
if (envelope && letter) {
  envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");
    letter.classList.toggle("show");

    const isOpen = letter.classList.contains("show");

    letter.setAttribute(
      "aria-hidden",
      isOpen ? "false" : "true"
    );

    if (isOpen) {
      setTimeout(() => {
        letter.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 250);

      for (let i = 0; i < 12; i++) {
        setTimeout(makeFloaty, i * 90);
      }
    }
  });
}

// Flip to Japanese
if (flipButton && letterBook) {
  flipButton.addEventListener("click", () => {
    letterBook.classList.add("flipped");
  });
}

// Flip back to English
if (flipBack && letterBook) {
  flipBack.addEventListener("click", () => {
    letterBook.classList.remove("flipped");
  });
}


// Small heart burst when buttons are clicked
document.querySelectorAll(".button").forEach(button => {
  button.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(makeFloaty, i * 70);
    }
  });
});
