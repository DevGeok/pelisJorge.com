(()=>{"use strict";function e(e){let t=document.createElement("section");t.classList.add("card","cardSize","shadow-lg","p-1","mx-2","rounded","bg-opaco-90","my-4","position-relative");const n=`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${e.poster_path}`,a=`https://www.themoviedb.org/movie/${e.id}/watch?translate=false&locale=MX`;let s=`<div class="sinopsis">${e.overview}</div>`;t.innerHTML=`\n      <h5 class="card-title text-center">\n          <a class="noSubrayado text-monospace" target="_blank" href="${n}">${e.title}</a>\n      </h5>\n      <div class="image-container" style="position: relative;">\n          <img class="card-img-top" src="${n}" alt="El poster de ${e.title}"/>\n          ${s}\n      </div>\n      <ul class="card-body list-group p-1 m-1">\n          <li class="list-group-item">Calificación: <strong>${parseFloat(e.vote_average.toFixed(1))}</strong></li>\n          <li class="list-group-item">Lanzamiento: <strong>${e.release_date}</strong></li>\n          <li class="list-group-item">¿Dónde ver?: <a class="noSubrayado text-monospace" target="_blank" href="${a}"><strong> CLICK AQUÍ</strong></a></li>\n      </ul>\n      `;const i=t.querySelector(".image-container"),o=t.querySelector(".sinopsis");return o.style.display="none",i.addEventListener("click",(function(){o.style.display="none"===o.style.display?"block":"none"})),t}let t=1;function n(){$.ajax({url:`https://api.themoviedb.org/3/trending/movie/week?language=es-US&page=${t}`,method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzI5MDJjOTNhM2EzZjc1MmNiYzQ1MzMzMDU1M2U4YyIsInN1YiI6IjY1Y2EyZWFjNDM1MDExMDE4M2ViMWYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eYiUyh8VEHIV-uN868CbUPFSM_O3I3hOhRjMjtemKTE"},success:function(t){!function(e,t){const n=document.getElementById("cardsContainer");n.innerHTML="",e.forEach((e=>{const a=t(e);n.appendChild(a)}))}(t.results,e)},error:function(e,t,n){console.error(`Error al obtener las películas debido a: ${t}`,n)}})}document.addEventListener("DOMContentLoaded",n),document.getElementById("nextPage").addEventListener("click",(function(e){e.preventDefault(),t+=1,n(),lastPage.classList.remove("d-none")})),document.getElementById("lastPage").addEventListener("click",(function(e){t-=1,e.preventDefault(),n(),1===t&&lastPage.classList.add("d-none")}))})();