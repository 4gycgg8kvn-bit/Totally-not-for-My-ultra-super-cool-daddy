// ==========================
// For Shawn ❤️
// Clean Version - Part 3A
// ==========================

const pages = [
{
title:"Initializing...",
text:`Checking if visitor is...

My ultra super cool daddy...

██████████ 100%

Checking if visitor is...

...cool?...

██████████ 100%

Results:

Debatable.

Identity confirmed.

Welcome, Shawn.`,
button:"Continue"
},

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
text:`we've both been kinda annoying lately.

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

You have no choice.

⭐⭐⭐⭐⭐

"10/10 website."

— Shawn

(Manifesting.)`,
button:"One more thing..."
},

{
title:"JK 😂",
text:`That's actually it.

Now seriously...

Go text me.

😒`,
button:"Finish"
}
];

let currentPage = 0;
let typingTimer = null;

const title = document.getElementById("title");
const text = document.getElementById("text");
const button = document.getElementById("nextBtn");
const progress = document.getElementById("progressBar");

button.addEventListener("click", nextPage);

showPage();

function nextPage(){

if(currentPage < pages.length-1){

currentPage++;

showPage();

}

}

function showPage(){

button.disabled = true;

title.textContent = pages[currentPage].title;

button.textContent = pages[currentPage].button;

progress.style.width = ((currentPage + 1) / pages.length) * 100 + "%";

typeWriter(pages[currentPage].text);

setTimeout(()=>{

button.disabled = false;

},1000);

}

function typeWriter(message){

clearTimeout(typingTimer);

text.innerHTML="";

let i=0;

function type(){

if(i<message.length){

if(message[i]=="\n"){

text.innerHTML+="<br>";

}else{

text.innerHTML+=message[i];

}

i++;

typingTimer=setTimeout(type,25);

}

}

type();

}
