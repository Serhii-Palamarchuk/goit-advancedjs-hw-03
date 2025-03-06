import{S as l,i as a}from"./assets/vendor-Cau1Iyua.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function u(s){const r=`https://pixabay.com/api/?key=49211573-98fed09fb52bd65ccaa252580&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await fetch(r);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){return console.error(e),{hits:[]}}}function f(s){const o=document.querySelector(".gallery");o.innerHTML=s.map(r=>`
        <a href="${r.largeImageURL}" class="gallery-item">
            <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy"/>
            <div class="info">
                <p>👍 ${r.likes}</p>
                <p>👁 ${r.views}</p>
                <p>💬 ${r.comments}</p>
                <p>⬇️ ${r.downloads}</p>
            </div>
        </a>
    `).join(""),new l(".gallery a").refresh()}const d=document.querySelector("#search-form"),p=document.querySelector(".gallery"),c=document.querySelector(".loader");d.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.search.value.trim();if(!o){a.error({title:"Error",message:"Please enter a search query!"});return}c.style.display="block",p.innerHTML="";const n=await u(o);c.style.display="none",n.hits.length===0?a.warning({title:"No Results",message:"Sorry, no images found!"}):f(n.hits)});
//# sourceMappingURL=index.js.map
