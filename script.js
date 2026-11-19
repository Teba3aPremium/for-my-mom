const loginForm=document.getElementById("loginForm");
const passwordInput=document.getElementById("password");
const errorMsg=document.getElementById("errorMsg");
const loginScreen=document.getElementById("loginScreen");
const introScreen=document.getElementById("introScreen");
const siteScreen=document.getElementById("siteScreen");
const flowerField=document.getElementById("flowerField");

loginForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  if(passwordInput.value.trim().toUpperCase()!=="MOM"){errorMsg.textContent="كلمة السر مش مظبوطة، جرّبي تاني ❤️";passwordInput.focus();return;}
  errorMsg.textContent="";loginScreen.style.display="none";introScreen.classList.add("active");launchFlowers();
  setTimeout(()=>{introScreen.style.display="none";siteScreen.classList.add("visible");siteScreen.setAttribute("aria-hidden","false");startCounter();},3400);
});
function launchFlowers(){
  const flowers=["🌹","🌷","🌸","🌺","💐","🌼","❤️"];
  for(let i=0;i<95;i++){const f=document.createElement("span");f.className="flower";f.textContent=flowers[Math.floor(Math.random()*flowers.length)];f.style.left=Math.random()*100+"vw";f.style.fontSize=(22+Math.random()*34)+"px";f.style.animationDuration=(2.1+Math.random()*1.8)+"s";f.style.animationDelay=Math.random()*.8+"s";f.style.setProperty("--drift",(Math.random()*180-90)+"px");flowerField.appendChild(f);}
}
function startCounter(){
  const start=new Date();start.setFullYear(start.getFullYear()-16);start.setDate(start.getDate()-2);
  const els={years:document.getElementById("years"),days:document.getElementById("days"),hours:document.getElementById("hours"),minutes:document.getElementById("minutes"),seconds:document.getElementById("seconds")};
  function update(){
    const now=new Date();let years=now.getFullYear()-start.getFullYear();const anniversary=new Date(start);anniversary.setFullYear(start.getFullYear()+years);if(now<anniversary)years--;
    const afterYears=new Date(start);afterYears.setFullYear(start.getFullYear()+years);let remaining=Math.max(0,now-afterYears);
    const dayMs=86400000,hourMs=3600000,minuteMs=60000;const days=Math.floor(remaining/dayMs);remaining%=dayMs;
    const hours=Math.floor(remaining/hourMs);remaining%=hourMs;const minutes=Math.floor(remaining/minuteMs);const seconds=Math.floor((remaining%minuteMs)/1000);
    els.years.textContent=years;els.days.textContent=days;els.hours.textContent=String(hours).padStart(2,"0");els.minutes.textContent=String(minutes).padStart(2,"0");els.seconds.textContent=String(seconds).padStart(2,"0");
  }
  update();setInterval(update,1000);
}
