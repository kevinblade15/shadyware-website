// EDIT THIS FILE to add or update Shadyware products, changelogs, and FAQ entries.
const DISCORD_URL = "https://discord.gg/GSevFng2Ap";

const products = [
  {name:"Product One",category:"SHADYWARE PRODUCT",icon:"◈",description:"Add a short description of your first Shadyware product here.",status:"Details coming soon",actionLabel:"Ask in Discord"},
  {name:"Product Two",category:"SHADYWARE PRODUCT",icon:"⌘",description:"Add a short description of your second Shadyware product here.",status:"Details coming soon",actionLabel:"Ask in Discord"},
  {name:"Product Three",category:"SHADYWARE PRODUCT",icon:"✳",description:"Add a short description of your third Shadyware product here.",status:"Details coming soon",actionLabel:"Ask in Discord"}
];

const changelogs = [
  {date:"COMING SOON",version:"v1.0.0",title:"Initial website launch",notes:"The Shadyware website is being prepared. Product announcements and release notes will appear here."}
];

const faqs = [
  {q:"Where can I find Shadyware products?",a:"Browse the Scripts section on this website. Open a product card for its details and official links. Check the Discord for current availability."},
  {q:"Where do I get support?",a:"Join the official Shadyware Discord server and use its support channels or ticket system."},
  {q:"How do I become a content creator?",a:"Create one video showcasing a Shadyware product and submit your application through the official Discord. Applications are reviewed before acceptance."},
  {q:"What do accepted creators receive?",a:"Accepted creators receive free premium access, faster ticket responses, and access to special products."},
  {q:"Where are updates posted?",a:"Release notes are published in the Changelogs section. Join the Discord for announcements as well."}
];

const productGrid=document.getElementById("productGrid");
products.forEach((p,i)=>{
  const card=document.createElement("article");card.className="product-card reveal";card.tabIndex=0;card.setAttribute("role","button");card.setAttribute("aria-label",`View ${p.name}`);
  card.innerHTML=`<div class="card-top"><span>${String(i+1).padStart(2,"0")} / ${p.category}</span><span class="card-icon">${p.icon}</span></div><h3>${p.name}</h3><p>${p.description}</p><div class="card-bottom"><span>VIEW PRODUCT</span><span class="card-arrow">↗</span></div>`;
  const open=()=>showProduct(p);card.addEventListener("click",open);card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open();}});productGrid.appendChild(card);
});
const changelogList=document.getElementById("changelogList");
changelogs.forEach(log=>{const item=document.createElement("article");item.className="log-item reveal";item.innerHTML=`<div class="log-date">${log.date}</div><div class="log-content"><h3>${log.title}</h3><p>${log.notes}</p></div><div class="version">${log.version}</div>`;changelogList.appendChild(item);});
const faqList=document.getElementById("faqList");
faqs.forEach((f,i)=>{const item=document.createElement("div");item.className="faq-item";item.innerHTML=`<button class="faq-question" aria-expanded="false"><span>${f.q}</span><span>+</span></button><div class="faq-answer">${f.a}</div>`;item.querySelector("button").addEventListener("click",()=>{const wasOpen=item.classList.contains("open");faqList.querySelectorAll(".faq-item").forEach(x=>{x.classList.remove("open");x.querySelector("button").setAttribute("aria-expanded","false");});if(!wasOpen){item.classList.add("open");item.querySelector("button").setAttribute("aria-expanded","true");}});faqList.appendChild(item);});

const modal=document.getElementById("productModal");
function showProduct(p){document.getElementById("modalCategory").textContent=p.category;document.getElementById("modalTitle").textContent=p.name;document.getElementById("modalDescription").textContent=p.description;document.getElementById("modalStatus").textContent=p.status;document.getElementById("modalAction").textContent=p.actionLabel+" ↗";document.getElementById("modalAction").href=DISCORD_URL;modal.classList.add("show");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}
function closeProduct(){modal.classList.remove("show");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";}
document.getElementById("modalClose").addEventListener("click",closeProduct);document.getElementById("modalBack").addEventListener("click",closeProduct);modal.addEventListener("click",e=>{if(e.target===modal)closeProduct();});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeProduct();});
const menu=document.getElementById("menuToggle"),nav=document.getElementById("nav");menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
