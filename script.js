const loadingText = document.getElementById("loadingText");
const continueBtn = document.getElementById("continueBtn");
const loadingScreen = document.getElementById("loadingScreen");
const mainWebsite = document.getElementById("mainWebsite");

const loadingLines = [
    { text: "Initializing...", delay: 1000 },
    { text: "Searching database...", delay: 800 },
    { text: "Checking if visitor is...", delay: 700 },
    { text: "My ultra super cool... daddy?...", delay: 1000 },
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

loadingScreen.style.display="none";

mainWebsite.classList.remove("hidden");

function showPage(){

const page = pages[currentPage];

// Fade out
pageTitle.style.opacity = "0";
pageText.style.opacity = "0";

setTimeout(()=>{

pageTitle.textContent = page.title;

nextButton.textContent = page.button;

progressBar.style.width =
((currentPage+1)/pages.length)*100+"%";

// Fade back in
pageTitle.style.opacity = "1";
pageText.style.opacity = "1";

typePage(page.text);

},250);

}

// ======================
// MAIN WEBSITE
// ======================

const pageTitle = document.getElementById("pageTitle");
const pageText = document.getElementById("pageText");
const nextButton = document.getElementById("nextButton");
const progressBar = document.getElementById("progressBar");

const pages = [

{
title:"⚠️ Shawn.",
text:`Stop scrolling.

Yes...

You.

Click the button.`,
button:"yes mommy 🙄"
},

{
title:"Congratulations.",
text:`You clicked a button.

Good boy.

Here's your gold star.

⭐

That'll be the last compliment you get today.`,
button:"Next"
},

{
title:"This website exists because...",
text:`We've both been kinda annoying lately.

And because I felt like making something.

So...

here we are.`,
button:"Continue"
},

{
title:"Daily Checklist",
text:`🍔 Eat something.

💧 Drink water.

😴 Sleep.

🧠 Tell Ella she's pretty.

That's it.

Not asking.

Telling.`,
button:"Next"
},

{
title:"New Rules",
text:`❌ Ignoring me.

❌ Fighting me.

❌ Keeping everything to yourself.

❌ Forgetting you're actually cool.

(sometimes)`,
button:"I accept"
},

{
title:"🏆 Achievement Unlocked!",
text:`Website Completed

+100 Happiness

+500 Aura

+1 Cool Website`,
button:"Continue"
},

{
title:"Okay...",
text:`That's all.

Hope this made your day

at least

1%

better.

:)

Now go text me

and tell me how amazing I am.

You have no choice.`,
button:"One more thing..."
},

{
title:"JK 😂",
text:`That's actually it.

Now text me.

😒`,
button:"Finish"
}

];

let currentPage = 0;
let typingTimer;

function typePage(message){

clearTimeout(typingTimer);

pageText.innerHTML="";

let i=0;

function type(){

if(i<message.length){

if(message[i]=="\n"){

pageText.innerHTML+="<br>";

}else{

pageText.innerHTML+=message[i];

}

i++;

typingTimer=setTimeout(type,40);

}

}

type();

}

function showPage(){

const page = pages[currentPage];

// Fade out
pageTitle.style.opacity = "0";
pageText.style.opacity = "0";

setTimeout(()=>{

pageTitle.textContent = page.title;

nextButton.textContent = page.button;

progressBar.style.width =
((currentPage+1)/pages.length)*100+"%";

// Fade back in
pageTitle.style.opacity = "1";
pageText.style.opacity = "1";

typePage(page.text);

},250);

}
nextButton.onclick = ()=>{

if(currentPage < pages.length-1){

currentPage++;

showPage();

if(currentPage===5){

createConfetti();

}

};
function createConfetti(){

for(let i=0;i<120;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.animationDelay=Math.random()*2+"s";

confetti.style.background=
["#ffffff","#9ecbff","#c9b6ff","#ffe08a"][Math.floor(Math.random()*4)];

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},5000);

}
