const btnParent = document.querySelector(".btn");
const win = document.querySelector(".win");
const turn = document.querySelector(".turn");
const winannounce = document.querySelector(".winner");
const restart = document.querySelector(".restart");

for (let i = 0; i < 9; i++) {
  const crtElem = document.createElement("button");
  btnParent.appendChild(crtElem);

  crtElem.setAttribute("id", i);
  crtElem.setAttribute("class", "button");
}

const clickOnBtn = document.querySelectorAll(".button");

let pattern1 = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
];

let num = 0;
let count = true;

clickOnBtn.forEach((btn) => {
  btn.addEventListener('mouseover', () => {
    if (!btn.classList.contains('disabled')) {
      btn.innerHTML = count ? "👌" : "🍑";
    }
  });

  btn.addEventListener('mouseout', () => {
    if (!btn.classList.contains('disabled')) {
      if (btn.innerHTML === '' && !btn.classList.contains('clicked')) {
        btn.innerHTML = '';
      }
    }
  });



  btn.addEventListener("click", () => {
    if (btn.innerHTML !== "") {
      return; // Prevent clicking on a filled cell
    }

    num++;

    if (count) {
      turn.innerHTML = "Player 2nd Turn";
      btn.innerHTML = "X";
    } else {
      btn.innerHTML = "O";
      turn.innerHTML = "Player 1's Turn";
    }

    btn.disabled = true;
    count = !count; // Toggle the turn

    if (num >= 9) {
      win.innerHTML = "Draw 🤣🤣🤣🤣🤣";
      winannounce.style.visibility = "visible";
    }

    check();
  });
});

restart.addEventListener("click", () => {
  location.reload();
});

const check = () => {
  for (const iterator of pattern1) {
    let val1 = clickOnBtn[iterator[0]].innerHTML;
    let val2 = clickOnBtn[iterator[1]].innerHTML;
    let val3 = clickOnBtn[iterator[2]].innerHTML;

    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        win.innerHTML = `Player ${val1} Winner !`;
        winannounce.style.visibility = "visible";
        if (val1 === "O") {
          turn.innerHTML = `Player Second Win ! `;
        } else {
          turn.innerHTML = `Player First Win !`;
        }
      }
    }
  }
};
