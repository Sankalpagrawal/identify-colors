const modes = {
  COLOR_ONLY: "color",
  SHAPE_ONLY: "shape",
  BOTH: "both"
};

let mode = modes.BOTH;

const items = [
  { colorName: "Red", color: "#ff6b6b", shape: "●" },
  { colorName: "Blue", color: "#74c0fc", shape: "■" },
  { colorName: "Yellow", color: "#ffd43b", shape: "▲" },
  { colorName: "Green", color: "#69db7c", shape: "◆" },
  { colorName: "Orange", color: "#ffa94d", shape: "●" },
  { colorName: "Purple", color: "#b197fc", shape: "■" },
  { colorName: "Pink", color: "#faa2c1", shape: "▲" },
  { colorName: "Brown", color: "#d2b48c", shape: "◆" }
];

let index = 0;
const emojiEl = document.getElementById("emoji");

function showItem() {
  const item = items[index];

  emojiEl.textContent = item.shape;

  if (mode === modes.COLOR_ONLY) {
    emojiEl.style.color = item.color;
    document.body.style.backgroundColor = "#fafafa";
  }

  if (mode === modes.SHAPE_ONLY) {
    emojiEl.style.color = "#555";
    document.body.style.backgroundColor = "#fafafa";
  }

  if (mode === modes.BOTH) {
    emojiEl.style.color = item.color;
    document.body.style.backgroundColor = "#fafafa";
  }
}

function speak() {
  if (mode !== modes.SHAPE_ONLY) {
    window.say(items[index].colorName);
  }
}

function next() {
  index = (index + 1) % items.length;
  showItem();
}

function prev() {
  index = (index - 1 + items.length) % items.length;
  showItem();
}

document.body.addEventListener("click", speak);

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();

  // Parent-only mode switches
  if (e.metaKey && e.key === "1") mode = modes.COLOR_ONLY;
  if (e.metaKey && e.key === "2") mode = modes.SHAPE_ONLY;
  if (e.metaKey && e.key === "3") mode = modes.BOTH;

  showItem();
});

showItem();
