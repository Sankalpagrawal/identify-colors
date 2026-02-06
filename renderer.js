const colors = [
  { name: "Red", color: "#ff6b6b", emoji: "🍎" },
  { name: "Blue", color: "#74c0fc", emoji: "🫐" },
  { name: "Yellow", color: "#ffd43b", emoji: "🌼" },
  { name: "Green", color: "#69db7c", emoji: "🐢" },
  { name: "Orange", color: "#ffa94d", emoji: "🍊" },
  { name: "Purple", color: "#b197fc", emoji: "🍇" },
  { name: "Pink", color: "#faa2c1", emoji: "🌸" },
  { name: "Brown", color: "#d2b48c", emoji: "🧸" }
];

let index = 0;

const emojiEl = document.getElementById("emoji");

function showColor() {
  const c = colors[index];
  emojiEl.textContent = c.emoji;
  document.body.style.backgroundColor = c.color;
}

function speakColor() {
  window.say(colors[index].name);
}

showColor();

// Tap / click → hear color
document.body.addEventListener("click", speakColor);

// Swipe support
let startX = null;

document.body.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.body.addEventListener("touchend", e => {
  if (!startX) return;
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) prev();
  if (startX - endX > 50) next();
  startX = null;
});

// Keyboard (parent use)
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

function next() {
  index = (index + 1) % colors.length;
  showColor();
}

function prev() {
  index = (index - 1 + colors.length) % colors.length;
  showColor();
}
