import{a as q,i as d,S as L}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const w="44946151-dc02d84f49eea13b7d5c48659",S="https://pixabay.com/api/",T=document.querySelector(".search-form"),m=document.querySelector(".input-field"),f=document.querySelector(".gallery-result-list"),x=document.querySelector(".query-word"),E=document.querySelector(".more"),P=document.querySelector(".top"),n=t=>({enable:()=>document.querySelector(t).classList.remove("disabled"),disable:()=>document.querySelector(t).classList.add("disabled")}),c=n(".spinner"),u=n(".loading-text"),b=n(".query-text"),a=n(".more"),p=n(".top");T.addEventListener("submit",t=>{t.preventDefault();const r=m.value;g=1,v(r,g),x.textContent=m.value});let $=1,g=1,h=0;async function v(t,r=1){c.enable(),u.enable(),r===1&&(f.innerHTML="");try{const s=await q.get(S,{params:{key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:30}});return s.data.hits?(h=s.data.totalHits,B(s.data.hits),c.disable(),u.disable(),b.enable(),g=r):(a.disable(),p.disable(),d.warning({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff"})),s.data}catch(s){throw c.disable(),u.disable(),a.disable(),p.disable(),console.error(s),d.warning({title:"Error",message:"An error occurred while fetching images"}),new Error(`Error! status: ${res.status}`)}}const C="Sorry, there are no images matching your search query. Please try again!";function B(t,r){if(r===1&&(f.innerHTML=""),h>t.length&&(a.enable(),p.enable()),t.length===0){c.disable(),u.disable(),b.disable(),a.disable(),p.disable(),d.warning({message:C,backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",timeout:2e3}),setTimeout(y,2e3);return}const s=t.map(M).join("");f.insertAdjacentHTML("beforeend",s),setTimeout(y,500),I.refresh()}function y(){m.value=""}const I=new L(".gallery-result-list a",{captions:!0,captionsData:"alt",captionDelay:250,close:!0,className:"simpleLightboxGallery",doubleTapZoom:2,scrollZoom:!0,overlay:!0});function M({webformatURL:t,largeImageURL:r,tags:s,downloads:l,likes:e,comments:o,views:i}){return`<li class="list-container">
    <div>
      <div class="image-container">
        <a href="${r}">
          <img src="${t}" alt="${s}" />
        </a>
      </div>
      <div class="descr-element">
        <ul class="descr-list">
          <li>
            <h3>Likes</h3>
              <p>${e}</p>
          </li>
          <li>
            <h3>Views</h3>
              <p>${i}</p>
          </li>
          <li>
            <h3>Comments</h3>
            <p>${o}</p>
          </li>
          <li>
            <h3>Downloads</h3>
              <p>${l}</p>
          </li>
        </ul>
      </div>
    </div>
  </li>`}E.addEventListener("click",()=>{const t=m.value;v(t,g+1)});const O=Math.ceil(100/h);$>O&&(a.disable(),d.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."}));f.getBoundingClientRect();P.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
