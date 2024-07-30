import{S as d,i as a}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u="44930065-b56e1482fbed5c821691768f3";function f(n){return fetch(`https://pixabay.com/api/?key=${u}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}let s;function m(n){const r=document.getElementById("gallery");r.innerHTML=n.map(t=>`
      <div class="image-container">
    <a href="${t.largeImageURL} class="gallery-item"">
      <img src="${t.webformatURL}" alt="${t.tags}" />
      <div class="info">
        <div><p>Likes:</p> ${t.likes}</div>
        <div><p>Views:</p> ${t.views}</div>
        <div><p>Comments:</p> ${t.comments}</div>
        <div><p>Downloads:</p> ${t.downloads}</div>
      </div>
    </a>
    </div>
  `).join(""),s||(s=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})),s.refresh()}function y(){document.getElementById("gallery").innerHTML=""}function c(){document.getElementById("loader").style.display="block"}function p(){document.getElementById("loader").style.display="none"}document.getElementById("search-form").addEventListener("submit",function(n){n.preventDefault();const r=document.getElementById("search-input").value.trim();if(!r){a.error({title:"Error",message:"Please enter a search query"});return}y(),c(),f(r).then(t=>{t.hits.length===0?a.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):m(t.hits)}).catch(t=>{a.error({title:"Error",message:"Failed to fetch images"})}).finally(()=>{p(),document.getElementById("search-form").reset()})});const h=document.querySelector(".search-button");h.addEventListener("click",function(){c()});
//# sourceMappingURL=commonHelpers.js.map
