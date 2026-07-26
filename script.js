const loadingText = document.getElementById("loadingText");
const continueBtn = document.getElementById("continueBtn");
const loadingScreen = document.getElementById("loadingScreen");
const mainWebsite = document.getElementById("mainWebsite");

const loadingLines = [
    { text: "Initializing...", delay: 1000 },
    { text: "Searching database...", delay: 800 },
    { text: "Checking if visitor is...", delay: 700 },
    { text: "My ultra super cool daddy...", delay: 1000 },
    { text: "Checking coolness level...", delay: 1000 },
    { text: "Results:", delay: 500 },
    { text: "Debatable.", delay: 800 },
    { text: "Identity confirmed.", delay: 500 },
    { text: "Welcome, Shawn.", delay: 800 }
];

let line = 0;

function typeLine(text, speed = 45) {
    return new Promise(resolve => {
        let i = 0;

        function type() {
            if (i < text.length) {
                loadingText.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                loadingText.innerHTML += "<br><br>";
                resolve();
            }
        }

        type();
    });
}

async function startLoading() {

    for (const item of loadingLines) {

        await typeLine(item.text);

        await new Promise(resolve =>
            setTimeout(resolve, item.delay)
        );

    }

    continueBtn.style.display = "block";
}

startLoading();

continueBtn.onclick = () => {

    loadingScreen.style.display = "none";

    mainWebsite.classList.remove("hidden");

};
