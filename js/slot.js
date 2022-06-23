// Please like <3 and share if you enjoyed!

let reelContents = ["🥵", "😍", "😈", "🔥", "😜", "🍆", "🍑", "👄"];
let reelLength = 3;
let reelContainers = document.querySelectorAll(".reel-container");
let spinningReels = [];
let spinning = false;
let reelDelay = 100;

let money = 100;
let moneyToAdd = 0;

let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

let getReelItem = () => {
  let newReel = document.createElement("div");
  newReel.innerHTML =
    reelContents[Math.floor(Math.random() * reelContents.length)];
  newReel.classList.add("reel-item");
  setTimeout(() => {
    newReel.classList.add("active");
  }, 0);

  return newReel;
};

document.getElementById("startcontainer").onclick = function() {startSpin()};

let startSpin = () => {
  if (!spinning && money > 0) {
    document.querySelectorAll(".prize-item.active").forEach(s => {
      s.classList.remove("active");
    });
    spinningReels.push(0);
    setTimeout(() => {
      spinningReels.push(1);
    }, reelDelay);
    setTimeout(() => {
      spinningReels.push(2);
    }, reelDelay * 2);

    spinning = true;
    spinUpdate(15);
  }
};

let spinUpdate = spinsLeft => {
  spinningReels.forEach(n => {
    moveReel(n);
  });
  if (spinsLeft > 0) {
    setTimeout(() => {
      spinUpdate(spinsLeft - 1);
    }, reelDelay);
  } else {
    if (spinningReels.length > 0) {
      spinningReels.shift();

      setTimeout(() => {
        spinUpdate(0);
      }, reelDelay);
    } else {
      spinning = false;
    }
  }
};

let moveReel = reelIndex => {
  let selectedReel = reelContainers[reelIndex];
  selectedReel.prepend(getReelItem());
  if (selectedReel.children.length > reelLength) {
    selectedReel.lastElementChild.classList.add("deactivate");
    setTimeout(() => {
      selectedReel.removeChild(selectedReel.lastElementChild);
    }, reelDelay);
  }
};

let setChange = change => {
  let changes = document.querySelector(".changes");
  let newChange = document.createElement("div");
  newChange.innerHTML = change > 0 ? `+${change}` : change;
  newChange.classList.add("change");
  if (change < 0) newChange.classList.add("negative");
  changes.prepend(newChange);
  if (changes.children.length > 6) {
    changes.removeChild(changes.lastElementChild);
  }
};

let findWins = () => {
  let winline = [];
  let symbols = {};
  reelContainers.forEach(reel => {
    let symbol = reel.children[1].innerText;
    winline.push(symbol);
    if (symbols[symbol]) symbols[symbol]++;
    else symbols[symbol] = 1;
  });

  if (
    winline.filter(s => {
      return s === winline[0];
    }).length === 3
  ) {
    win(3, winline[0]);
    document
      .querySelector(".triples")
      .children[reelContents.indexOf(winline[0])].classList.add("active");
  } else {
    for (s in symbols) {
      if (symbols[s] == 2) {
        win(2, s);
        document
          .querySelector(".doubles")
          .children[reelContents.indexOf(s)].classList.add("active");
      }
    }
  }
};

//fills reels
reelContainers.forEach((reel, i) => {
  for (let n = 0; n < reelLength; n++) {
    moveReel(i);
  }
});

