document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    { title: "Bienvenidos", body: "Every year, families in Mexico prepare to welcome back their loved ones during Día de los Muertos. Altars are decorated, candles are lit, and music fills the streets. It’s a time of joy and remembrance.", image: "images/first.png" },
    { title: "When is it?", body: "Día de los Muertos is observed on Nov 1st & 2nd. The first day is dedicated to children and the second to adults. Communities gather, creating vibrant spaces full of flowers, food, and love.", image: "images/sec.png" },
    { title: "Building the Ofrenda", body: "Families construct an ofrenda filled with photos, candles, favorite foods, drinks, and personal items. These altars become a bridge between the living and the spirits they are welcoming home.", image: "images/3rd.png" },
    { title: "The Marigold Path", body: "Cempasúchil petals are spread to guide visiting spirits. Their bright orange and gold colors symbolize the sun and create a glowing path of light and love from the living to the departed.", image: "images/4th.jpg" },
    { title: "Foods & Symbols", body: "Traditional items include pan de muerto, sugar skulls, incense, and salt. Each carries its own meaning, showing love, protection, and the sweetness of life that continues to be celebrated.", image: "images/5th.png" },
    { title: "Community & Memory", body: "Families gather at cemeteries to clean graves, light candles, sing, and recount stories. These moments of togetherness create powerful connections across generations, keeping memories alive.", image: "images/6.jpg" },
    { title: "A Joyful Remembrance", body: "Día de los Muertos is a celebration of life and memory. Through music, food, flowers, and laughter, families honor their loved ones, ensuring their spirit never fades from their hearts.", image: "images/last.jpg" },
    { title: "Write a Letter", body: "", image: "" }
  ];

  const pageTitle = document.getElementById("pageTitle");
  const pageBody = document.getElementById("pageBody");
  const pageImage = document.getElementById("pageImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const flipSound = document.getElementById("flipSound");
  const bgMusic = document.getElementById("bgMusic");
  const startOverlay = document.getElementById("startOverlay");

  let currentPage = 0;

  function setPage(index) {
    const p = pages[index];
    pageTitle.textContent = p.title;
    pageBody.textContent = p.body;

    if (p.image) {
      pageImage.style.display = "block";
      pageImage.src = p.image;
    } else {
      pageImage.style.display = "none";
    }

    if (p.title === "Write a Letter") {
      document.querySelector(".letter-form").style.display = "block";
      document.querySelector(".letter-box").style.display = "flex";
    } else {
      document.querySelector(".letter-form").style.display = "none";
      document.querySelector(".letter-box").style.display = "none";
    }
  }

  function flip(direction) {
    if (direction === "next" && currentPage < pages.length - 1) {
      currentPage++;
      flipSound.play();
      setPage(currentPage);
    }
    if (direction === "prev" && currentPage > 0) {
      currentPage--;
      flipSound.play();
      setPage(currentPage);
    }
  }

  nextBtn.addEventListener("click", () => flip("next"));
  prevBtn.addEventListener("click", () => flip("prev"));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") flip("next");
    if (e.key === "ArrowLeft") flip("prev");
  });

  // Start overlay
  startOverlay.addEventListener("click", () => {
    bgMusic.volume = 0.45;
    bgMusic.play();
    startOverlay.style.display = "none";
  });

  // Send button
  document.getElementById("sendBtn").addEventListener("click", () => {
    const confirmation = document.getElementById("confirmationMsg");
    confirmation.textContent = "💌 Your message has been received by your loved ones. They are smiling with you 💖";
    confirmation.classList.add("show");
    document.getElementById("letterInput").value = "";
  });

  // Start over button
  document.getElementById("startOverBtn").addEventListener("click", () => {
    currentPage = 0;
    setPage(currentPage);
  });

  setPage(currentPage);
});

function createPetal() {
  const petal = document.createElement("div");
  petal.textContent = "🌼";
  petal.classList.add("petal");
  document.body.appendChild(petal);

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 3 + Math.random() * 2 + "s";

  setTimeout(() => petal.remove(), 5000);
}

setInterval(createPetal, 800);

document.getElementById("sendBtn").addEventListener("click", () => {
  const letter = document.getElementById("letterInput").value;
  if (!letter.trim()) return;

  const floating = document.createElement("div");
  floating.textContent = "💌 " + letter;
  floating.classList.add("floating-letter");
  document.body.appendChild(floating);

  setTimeout(() => floating.remove(), 4000);
});
 
startOverlay.addEventListener("click", () => {
  bgMusic.volume = 0.45;
  bgMusic.play();
  startOverlay.style.display = "none";

 
  gsap.from(".book", { duration: 1.2, scale: 0.5, opacity: 0, ease: "elastic.out(1, 0.5)" });
});








