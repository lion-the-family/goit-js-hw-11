import{a as L,S as w,i as c}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const v="47612462-014047a9b5080d140b4034ede",S="https://pixabay.com/api/";async function h(r,t=1,o=15){const n={key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o};try{return(await L.get(S,{params:n})).data}catch(e){throw console.error("Error fetching images:",e),e}}let m;function q({webformatURL:r,largeImageURL:t,tags:o,likes:n,views:e,comments:a,downloads:i}){return`
      <div class="image-card">
        <a href="${t}" class="image-link">
          <img src="${r}" alt="${o}" loading="lazy" class="img"/>
        </a>
        <div class="info">
          <p><b>Likes:</b> ${n}</p>
          <p><b>Views:</b> ${e}</p>
          <p><b>Comments:</b> ${a}</p>
          <p><b>Downloads:</b> ${i}</p>
        </div>
      </div>`}function b(r,t){const o=t.map(q).join("");r.insertAdjacentHTML("beforeend",o),P()}function E(r){r.innerHTML=""}function P(){m&&m.destroy(),m=new w(".gallery a",{captionsData:"alt",captionDelay:250})}function d(r,t){r.style.display=t?"block":"none"}function l(r,t){r.style.display=t?"block":"none"}const $=document.querySelector("#search-form"),g=document.querySelector(".gallery"),f=document.querySelector(".loader"),s=document.querySelector(".load-more");let u=1,y="",p=0;$.addEventListener("submit",A);s.addEventListener("click",M);async function A(r){r.preventDefault();const t=r.target.elements.searchQuery.value.trim();if(!t){c.warning({title:"Warning",message:"Please enter a search query."});return}y=t,u=1,E(g),d(f,!0),l(s,!1);try{const o=await h(y,u);if(p=o.totalHits,o.hits.length===0){c.info({title:"No results",message:"Sorry, there are no images matching your search query."});return}b(g,o.hits),o.hits.length<p&&l(s,!0)}catch{c.error({title:"Error",message:"An error occurred while fetching images. Please try again."})}finally{d(f,!1)}}async function M(){u+=1,d(f,!0),l(s,!1);try{const r=await h(y,u);b(g,r.hits),u*15>=p?(l(s,!1),c.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."})):l(s,!0)}catch{c.error({title:"Error",message:"An error occurred while loading more images. Please try again."})}finally{d(f,!1)}}
//# sourceMappingURL=index.js.map
