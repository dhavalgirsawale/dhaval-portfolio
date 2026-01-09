// TYPING
const roles=[
"Software Developer",
"Java & Spring Boot Developer",
"Backend Engineer"
];
let i=0,j=0,del=false;
const typing=document.getElementById("typing");

function type(){
if(!del && j<=roles[i].length){
typing.textContent=roles[i].slice(0,j++);
}
else if(del && j>=0){
typing.textContent=roles[i].slice(0,j--);
}
if(j===roles[i].length) del=true;
if(del && j===0){ del=false; i=(i+1)%roles.length; }
setTimeout(type, del?80:120);
}
type();

// SCROLL REVEAL
document.querySelectorAll(".reveal").forEach(el=>{
new IntersectionObserver(e=>{
if(e[0].isIntersecting) el.classList.add("active");
},{threshold:.15}).observe(el);
});

// ACTIVE NAV
const sections=document.querySelectorAll("section,header");
const links=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{
let current="";
sections.forEach(s=>{
if(scrollY>=s.offsetTop-120) current=s.id;
});
links.forEach(l=>{
l.classList.toggle("active",l.getAttribute("href")==`#${current}`);
});
});

// MOUSE LIGHT
const light=document.querySelector(".cursor-light");
document.addEventListener("mousemove",e=>{
light.style.left=e.clientX+"px";
light.style.top=e.clientY+"px";
});

// MAGNETIC BUTTONS
document.querySelectorAll(".btn").forEach(btn=>{
btn.addEventListener("mousemove",e=>{
const r=btn.getBoundingClientRect();
btn.style.transform=`translate(
${(e.clientX-r.left-r.width/2)*0.2}px,
${(e.clientY-r.top-r.height/2)*0.2}px)`;
});
btn.addEventListener("mouseleave",()=>btn.style.transform="");
});

// DEMO MODAL
function openDemo(p){
document.getElementById("demoModal").style.display="block";
document.getElementById("demoTitle").textContent=
p==="sql"?"Voice Based SQL Assistant":"Voting Management System";
document.getElementById("demoText").textContent=
p==="sql"?"NLP powered voice to SQL system":"JWT secured Spring Boot REST API";
}
function closeDemo(){
document.getElementById("demoModal").style.display="none";
}

// CERT MODAL
function openCert(img){
document.getElementById("certModal").style.display="block";
document.getElementById("certPreview").src=img.src;
}
function closeCert(){
document.getElementById("certModal").style.display="none";
}

// ROCKET
const rocket=document.getElementById("rocket");
window.addEventListener("scroll",()=>{
rocket.style.display=scrollY>400?"block":"none";
});
rocket.onclick=()=>scrollTo({top:0,behavior:"smooth"});
