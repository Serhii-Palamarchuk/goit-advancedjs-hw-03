import{S as l,i as a}from"./assets/vendor-Cau1Iyua.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();async function u(s){const t=`https://pixabay.com/api/?key=49211573-98fed09fb52bd65ccaa252580&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await fetch(t);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){return console.error(e),{hits:[]}}}function f(s){const o=document.querySelector(".gallery");o.innerHTML=s.map(t=>`
        <a href="${t.largeImageURL}" class="gallery-item">
            <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy"/>
            <div class="info">
                <p>👍 ${t.likes}</p>
                <p>👁 ${t.views}</p>
                <p>💬 ${t.comments}</p>
                <p>⬇️ ${t.downloads}</p>
            </div>
        </a>
    `).join(""),new l(".gallery a").refresh()}const d=document.querySelector("#search-form"),p=document.querySelector(".gallery"),c=document.querySelector(".loader");d.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.search.value.trim();if(!o){a.error({title:"Error",message:"Please enter a search query!"});return}c.style.display="block",p.innerHTML="",await new Promise(t=>setTimeout(t,350));const n=await u(o);c.style.display="none",n.hits.length===0?a.warning({title:"No Results",message:"Sorry, no images found!",position:"center"}):f(n.hits)});
//# sourceMappingURL=index.js.map
