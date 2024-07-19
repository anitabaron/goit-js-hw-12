import{a as g,i as u,S as y}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="44946151-dc02d84f49eea13b7d5c48659",b="https://pixabay.com/api/",q=document.querySelector(".search-form"),d=document.querySelector(".input-field"),m=document.querySelector(".gallery-result-list"),v=document.querySelector(".query-word"),c=r=>({enable:()=>document.querySelector(r).classList.remove("disabled"),disable:()=>document.querySelector(r).classList.add("disabled")}),n=c(".spinner"),l=c(".loading-text"),p=c(".query-text"),L=c(".more");q.addEventListener("submit",r=>{r.preventDefault();const o=d.value;S(o)});async function S(r,o=1){n.enable(),l.enable();try{const s=await g.get(b,{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:30}});return console.log("Posts: ",s.data),s.data.hits?(x(s.data.hits),n.disable(),l.disable(),p.enable(),L.enable(),v.textContent=d.value):u.warning({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff"}),s.data}catch(s){n.disable(),l.disable(),console.error(s),u.warning({title:"Error",message:"An error occurred while fetching images"})}}const w="Sorry, there are no images matching your search query. Please try again!";function x(r){if(m.innerHTML="",r.length===0){n.disable(),l.disable(),p.disable(),u.warning({message:w,backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",timeout:2e3}),setTimeout(f,2e3);return}const o=r.map(P).join("");m.insertAdjacentHTML("beforeend",o),setTimeout(f,500),T.refresh()}function f(){d.value=""}const T=new y(".gallery-result-list a",{captions:!0,captionsData:"alt",captionDelay:250,close:!0,className:"simpleLightboxGallery",doubleTapZoom:2,scrollZoom:!0,overlay:!0});function P({webformatURL:r,largeImageURL:o,tags:s,downloads:i,likes:e,comments:t,views:a}){return`<li class="list-container">
    <div>
      <div class="image-container">
        <a href="${o}">
          <img src="${r}" alt="${s}" />
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
              <p>${a}</p>
          </li>
          <li>
            <h3>Comments</h3>
            <p>${t}</p>
          </li>
          <li>
            <h3>Downloads</h3>
              <p>${i}</p>
          </li>
        </ul>
      </div>
    </div>
  </li>`}
//# sourceMappingURL=commonHelpers.js.map
