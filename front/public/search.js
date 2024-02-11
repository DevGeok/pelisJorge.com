(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){let t=document.createElement("section");t.classList.add("card","cardSize","shadow-lg","p-3","mx-4","rounded","bg-opaco-90","my-2");let n=`https://www.imdb.com/title/${e.imdbID}/`;return t.innerHTML=`\n      <h5 class="card-title text-center movieTitle">\n        <a class="noSubrayado text-monospace" target="_blank" href=${n}>${e.Title}</a>\n      </h5>\n      <div>\n        <a target="_blank" href=${n}><img class="card-img-top" src="${e.Poster}" alt="Poster de ${e.Title}"/></a>\n      </div>\n      <ul class="card-body list-group p-1 m-1">\n        <li class="list-group-item">Año: <strong>${e.Year}</strong></li>\n        <li class="list-group-item">Ver en IMBD: click <a target="_blank" href=${n}><strong>aquí</strong></a></li>\n      </ul>\n    `,t}function n(e,n){if(!function(e){return e&&"string"==typeof e&&e.trim().length>0}(e))return void console.error("Error: El título de búsqueda es inválido o está vacío.");const o=`https://www.omdbapi.com/?s=${encodeURIComponent(e)}&apikey=95cfef3e&page=${n}`;$.get(o).done((e=>{"True"===e.Response?function(e,t){const n=document.getElementById("cardsContainer");n.innerHTML="",e.forEach((e=>{const o=t(e);n.appendChild(o)}))}(e.Search,t):console.error("Error obteniendo movies:",e.Error)})).fail(((e,t,n)=>{console.error(`Error al obtener las movies debido a un error: ${t}`,n)}))}e.d({},{Qt:()=>o,Ww:()=>a,qM:()=>r}),document.getElementById("nextPage").addEventListener("click",(function(e){e.preventDefault(),a+=1,n(r,a),o.classList.remove("d-none")}));const o=document.getElementById("lastPage");o.addEventListener("click",(function(e){a-=1,e.preventDefault(),n(r,a),1===a&&o.classList.add("d-none")}));let r="",a=1;document.getElementById("searchButton").addEventListener("click",(function(e){e.preventDefault(),r=document.querySelector('[name="titleWanted"]').value,""!==r&&nextPage.classList.remove("d-none"),n(r,a),o.classList.add("d-none")}))})();