const screens = document.querySelectorAll(".screen");

function showScreen(id) {
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo(0, 0);
}


// ENTER SURPRISE
function startSurprise() {

    const music = document.getElementById("music");

    if (music) {
        music.play().catch(() => {
            console.log("Music could not start.");
        });
    }

    showScreen("giftScreen");
}


// OPEN GIFT
function openGift() {

    const gift = document.querySelector(".gift");

    if (gift) {
        gift.classList.add("opening");
    }

    setTimeout(() => {
        showScreen("birthdayScreen");
    }, 1000);
}


// MEMORIES
function showMemories() {
    showScreen("memoryScreen");
}


// LETTER
function showLetter() {

    showScreen("letterScreen");

    const text = `
Dear Patalu 💗,

Thank you for being one of those people who can turn an ordinary day into a beautiful memory. 🥹✨

Thank you for all the laughs 😂, stupid conversations 🤣, random moments, secrets and all those little things that made our friendship so special. 💕

We may have thousands of photos, but some of my favourite memories are the moments that were never captured. 🌸

I hope this new year of your life brings you everything you've been wishing for. 🌷✨

Keep smiling, keep shining and please never stop being the crazy Patalu I know. 😂💖

Happy Birthday once again, Bestie! 🎂🎉

No matter how many birthdays come and go, I hope we always have another crazy memory to add here. ♾️❤️

You are truly special. Never forget that. 🥹💗
`;

    const element = document.getElementById("letterText");

    element.innerHTML = "";

    let i = 0;

    function type() {

        if (i < text.length) {

            if (text[i] === "\n") {
                element.innerHTML += "<br>";
            } else {
                element.innerHTML += text[i];
            }

            i++;

            setTimeout(type, 15);
        }
    }

    type();
}


// SECRET
function showSecret() {
    showScreen("secretScreen");
}


// FINAL SURPRISE
function finalSurprise() {

    showScreen("finalScreen");

    createConfetti();
    createConfetti();
}


// CONFETTI
function createConfetti() {

    const symbols = [
        "🎉",
        "🎊",
        "💗",
        "💕",
        "✨",
        "🌸",
        "🎀"
    ];

    for (let i = 0; i < 60; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti-piece";

        piece.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.fontSize =
            Math.random() * 20 + 12 + "px";

        piece.style.animationDuration =
            Math.random() * 3 + 3 + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 7000);
    }
}