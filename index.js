import{i as s,S as f}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="47612462-014047a9b5080d140b4034ede",m="https://pixabay.com/api/";function g(r,o=1,n=20){const i=`${m}?key=${d}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${n}`;return fetch(i).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).catch(e=>{throw console.error("Error fetching images:",e),e})}function p({webformatURL:r,largeImageURL:o,tags:n,likes:i,views:e,comments:t,downloads:a}){return`
      <div class="image-card">
        <a href="${o}" class="image-link">
          <img src="${r}" alt="${n}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${i}</p>
          <p><b>Views:</b> ${e}</p>
          <p><b>Comments:</b> ${t}</p>
          <p><b>Downloads:</b> ${a}</p>
        </div>
      </div>`}function h(r,o){const n=r.map(p).join("");o.innerHTML=n}function y(r){r.innerHTML=""}const b=document.querySelector("#search-form"),l=document.querySelector(".gallery"),L=document.querySelector(".loader");let c;b.addEventListener("submit",$);function $(r){r.preventDefault();const o=r.target.elements.searchQuery.value.trim();if(!o){s.warning({title:"Warning",message:"Please enter a search query."});return}y(l),u(!0),g(o).then(n=>{n.hits.length===0?s.info({title:"No results",message:"Sorry, there are no images matching your search query."}):(h(n.hits,l),w())}).catch(n=>{s.error({title:"Error",message:"An error occurred while fetching images. Please try again."})}).finally(()=>{u(!1)})}function u(r){L.style.display=r?"block":"none"}function w(){c&&c.destroy(),c=new f(".gallery a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=index.js.map
