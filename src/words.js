var ENGLISH_WORDS = [
  "cheese",
  "aloo",
  "biryani",
  "baati",
  "bhatura",
  "chaat",
  "chicken",
  "dal",
  "soup",
  "papad",
  "pepper",
  "poha",
  "jalebi",
  "kachori",
  "kheer",
  "kofta",
  "naan",
  "paneer",
  "palak",
  "rajma",
  "samosa",
  "halwa",
  "idli",
  "dosa",
  "omlet",
  "sambar",
  "barfi",
  "dabeli",
  "laddu",
  "puri",
  "thepla",
  "rice",
  "milk",
  "oats",
  "salt",
  "pepper",
  "figs",
  "bhindi",
  "butter",
  "coconut",
  "dhokla",
  "appam",
  "momo",
  "falooda",
  "pulao",
  "kheer",
  "khichdi",
  "lassi",
  "rasgulla",
  "korma"

];

function randomWord() {
  return ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)];
}

export { randomWord };
