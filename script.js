const clickSpot = document.querySelector("div.clicker");
const mob = document.querySelector("div.mob");
const crosshairs = [...document.querySelectorAll("div.crosshair")];

const animations = () => {
  document.querySelector("h1.click").classList.add("animation");
  mob.classList.toggle("animation");
  mob.classList.toggle("animation2");
  document.querySelector("div.click.one").classList.toggle("animation");
  document.querySelector("div.click.two").classList.toggle("animation2");
  crosshairs.forEach((crosshair) => crosshair.classList.toggle("animation"));
  crosshairs.forEach((crosshair) => crosshair.classList.toggle("animation2"));
};
const createOrb = () => {
  const orb = document.createElement("div");
  orb.classList.add("weaponOrb");
  document.querySelector("div.fakeOrb").appendChild(orb);
  const removeOrb = () => {
    document.querySelector("div.fakeOrb").removeChild(orb);
  };
  setTimeout(removeOrb, 200);
};

const removeH2 = () => {
  document.querySelector("h2.lvlUp").classList.remove("animation");
};
let counter = 1;
let lvl = 1;
const count = () => {
  counter++;
  const exp = document.querySelector("div.exp");
  const lvlText = document.querySelector("div.lvl span");
  exp.textContent = `XP ${counter}/100`;
  lvlText.textContent = lvl;
  if (counter === 100) {
    counter = 0;
    lvl++;
  }
  if (counter === 1) {
    document.querySelector("h2.lvlUp").classList.add("animation");
    setTimeout(removeH2, 3000);
  }
};
let seconds = 0;
let minutes = 0;
const timerH2 = document.querySelector("h2.timer");
const timer = () => {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes >= 10 && seconds >= 10) {
    timerH2.textContent = `${minutes}:${seconds}`;
  } else if (minutes >= 10 && seconds <= 10) {
    timerH2.textContent = `${minutes}:0${seconds}`;
  } else if (minutes <= 10 && seconds >= 10) {
    timerH2.textContent = `0${minutes}:${seconds}`;
  } else if (minutes <= 10 && seconds <= 10) {
    timerH2.textContent = `0${minutes}:0${seconds}`;
  } else {
    timerH2.textContent = `0${minutes}:0${seconds}`;
  }
};
setInterval(timer, 1000);

let gem = 0;

const removeGem = () => {
  document.querySelector("div.plusGem").classList.remove("animation");
};
const gems = () => {
  let number = Math.floor(Math.random() * 100);
  if (number == 0) {
    gem++;
    document.querySelector("div.plusGem").classList.add("animation");
    setTimeout(removeGem, 3000);
  }
  document.querySelector("div.gem span").textContent = gem;
};
clickSpot.addEventListener("click", animations);
clickSpot.addEventListener("click", createOrb);
clickSpot.addEventListener("click", count);
clickSpot.addEventListener("click", gems);
const span4 = document.querySelector(
  "div.openMenu div.quests section.quest span.four"
);
let questCounter = 0;
const spanQuestCounter = document.querySelector("span.questCounter");
document.querySelector("div.flyClicker").addEventListener("click", function () {
  document.querySelector("div.catch").classList.add("animation");
  document.querySelector("div.flyBody").classList.remove("animation");
  gem = gem + 5;
  document.querySelector("div.plusGem").classList.add("animation");
  setTimeout(removeGem, 3000);
  span4.textContent = "Completed";
  span4.style.color = "lime";
  document.querySelector("div.gem span").textContent = gem;
  const lvlText = document.querySelector("div.lvl span");
  lvlText.textContent = lvl;
  questCounter++;
  spanQuestCounter.textContent = `${questCounter}/4`;
});

const menu = document.querySelector("div.openMenu");
const closeMenu = document.querySelector("div.openMenu i");
const menuIcons = [...document.querySelectorAll("nav.menu ul li")];

const openMenu = () => {
  menu.classList.add("animation");
};

const divRules = document.querySelector("div.openMenu div.rules");
const divQuests = document.querySelector("div.openMenu div.quests");
const divShop = document.querySelector("div.openMenu div.shop");

closeMenu.addEventListener("click", function () {
  menu.classList.add("animation2");
  const removeOpacity = () => {
    divRules.style.opacity = 0;
    divQuests.style.opacity = 0;
    divShop.style.opacity = 0;
  };
  setTimeout(removeOpacity, 1000);
  setTimeout(removeMenuAnimation, 1000);
});
const removeMenuAnimation = () => {
  [...document.querySelectorAll("button.buy")].forEach(
    (btn) => (btn.style.zIndex = "-1")
  );
  menu.classList.remove("animation");
  menu.classList.remove("animation2");
};

menuIcons.forEach((icon) => icon.addEventListener("click", openMenu));

const showRules = () => {
  divRules.style.opacity = 1;
};
const showQuests = () => {
  divQuests.style.opacity = 1;
};

const showShop = () => {
  divShop.style.opacity = 1;
  [...document.querySelectorAll("button.buy")].forEach(
    (btn) => (btn.style.zIndex = "1")
  );
};

document
  .querySelector("nav.menu ul li.rules")
  .addEventListener("click", showRules);
document
  .querySelector("nav.menu ul li.quests")
  .addEventListener("click", showQuests);
document
  .querySelector("nav.menu ul li.shop")
  .addEventListener("click", showShop);

const span1 = document.querySelector(
  "div.openMenu div.quests section.quest span.one"
);
const span2 = document.querySelector(
  "div.openMenu div.quests section.quest span.two"
);
const span3 = document.querySelector(
  "div.openMenu div.quests section.quest span.three"
);

let i = 0;
const waitingOnQuests = () => {
  if (lvl === 5) {
    for (i; i === 0; i++) {
      gem = gem + 5;
      document.querySelector("div.plusGem").classList.add("animation");
      setTimeout(removeGem, 3000);
      span1.textContent = "Completed";
      span1.style.color = "lime";
      questCounter++;
      spanQuestCounter.textContent = `${questCounter}/4`;
    }
  }
  if (lvl === 10) {
    for (i; i === 1; i++) {
      gem = gem + 10;
      document.querySelector("div.plusGem").classList.add("animation");
      setTimeout(removeGem, 3000);
      span2.textContent = "Completed";
      span2.style.color = "lime";
      questCounter++;
      spanQuestCounter.textContent = `${questCounter}/4`;
    }
  }
  if (lvl === 20) {
    for (i; i === 2; i++) {
      gem = gem + 20;
      document.querySelector("div.plusGem").classList.add("animation");
      setTimeout(removeGem, 3000);
      span3.textContent = "Completed";
      span3.style.color = "lime";
      questCounter++;
      spanQuestCounter.textContent = `${questCounter}/4`;
    }
  }
  if (questCounter === 4) {
    spanQuestCounter.style.color = "lime";
  }
};

setInterval(waitingOnQuests, 1);

const btnBuy1 = document.querySelector("button.one");
const btnBuy2 = document.querySelector("button.two");
const btnBuy3 = document.querySelector("button.three");
const buyOne = () => {
  if (gem >= 10) {
    btnBuy1.textContent = "SOLD";
    btnBuy1.classList.remove("hover");
    btnBuy1.style.backgroundColor = "red";
    gem = gem - 10;
    document.querySelector("div.gem span").textContent = gem;
    document.querySelector("div.flyBody").style.background = "rgb(0,255,252)";
    document.querySelector("div.flyBody").style.boxShadow =
      "0px 0px 5px 4px rgb(0,255,252)";
    [...document.querySelectorAll("div.flyWing")].forEach(
      (wing) => (wing.style.backgroundColor = "blue")
    );
    [...document.querySelectorAll("div.flyWing")].forEach(
      (wing) => (wing.style.boxShadow = "0px 0px 4px 4px blue")
    );
  }
};
const buyTwo = () => {
  if (gem >= 20) {
    btnBuy2.textContent = "SOLD";
    btnBuy2.classList.remove("hover");
    btnBuy2.style.backgroundColor = "red";
    gem = gem - 20;
    document.querySelector("div.gem span").textContent = gem;
    mob.style.background = "lime";
    mob.style.boxShadow = "0px 0px 40px 10px lime";
  }
};
const buyThree = () => {
  if (gem >= 30) {
    btnBuy3.textContent = "SOLD";
    btnBuy3.classList.remove("hover");
    btnBuy3.style.backgroundColor = "red";
    gem = gem - 30;
    document.querySelector("div.gem span").textContent = gem;
    document.body.classList.add("newColor");
  }
};
btnBuy1.addEventListener("click", buyOne);
btnBuy2.addEventListener("click", buyTwo);
btnBuy3.addEventListener("click", buyThree);
