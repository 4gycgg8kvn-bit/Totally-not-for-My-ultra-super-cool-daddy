// ======================================
// FOR SHAWN ❤️
// Part 3A
// ======================================

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
let typingTimeout;
const title = document.getElementById("title");
const text = document.getElementById("text");
const button = document.getElementById("nextBtn");
const progress = document.getElementById("progressBar");

showPage();

button.onclick = nextPage;

function showPage(){

title.textContent = pages[currentPage].title;

button.textContent = pages[currentPage].button;

progress.style.width = ((currentPage+1)/pages.length)*100 + "%";

typeWriter(pages[currentPage].text);


}

function nextPage(){

if(currentPage < pages.length-1){

currentPage++;

showPage();

}

}
function typeWriter(message){

text.innerHTML="";

clearTimeout(typingTimeout);

let i=0;

function type(){

if(i<message.length){

if(message.charAt(i)=="\n"){

text.innerHTML+="<br>";

}else{

text.innerHTML+=message.charAt(i);

}

i++;

typingTimeout=setTimeout(type,25);

}

}

type();

}
}else{

text.innerHTML+=message.charAt(i);

}
// ⭐ Create Stars

const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

star.style.animationDuration=(2+Math.random()*4)+"s";

stars.appendChild(star);

}

// 💙 Floating Hearts

const emojis=["💙","🤍","✨"];

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heartFloat";

heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-40px";

heart.style.fontSize=(18+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},1500);
i++;

setTimeout(type,speed);

}

}

type();

}
// 🤍 Secret Heart

const heart = document.getElementById("heart");

heart.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.className="popup";

popup.innerHTML=`
<h2>🤍 SECRET FOUND!</h2>

<br>

<p>

Reward:

<br><br>

One free hug.

<br><br>

Redeem whenever.

<br><br>

(No refunds.)

</p>
`;

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},3000);

});
// 😂 Click title 5 times

let titleClicks=0;

title.addEventListener("click",()=>{

titleClicks++;

if(titleClicks===5){

const popup=document.createElement("div");

popup.className="popup";

popup.innerHTML=`

<h2>😂</h2>

<p>

Bro...

<br><br>

Why are you clicking everything?

<br><br>

I know you miss me.

<br><br>

Relax.

</p>

`;

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},3500);

titleClicks=0;

}

});
