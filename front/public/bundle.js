document.addEventListener("DOMContentLoaded",(function(){$.get("https://students-api.2.us-1.fl0.io/movies",((t,n)=>{const e=document.getElementById("cardsContainer");t.forEach((t=>{let n=document.createElement("section");n.classList.add("card","cardSize","shadow-lg","p-3","mx-4","rounded","bg-opaco-90","my-2");let s=t.genre.join(" ");n.innerHTML=`\n        <h5 class="card-title text-center">\n        <a class="noSubrayado text-monospace" href="${t.poster}">${t.title}</a>\n        </h5>\n        <div>\n        <img class="card-img-top" src="${t.poster}" alt="${t.title} Image broken"/>\n        </div>\n         <ul class="card-body list-group p-1 m-1">\n          <li class="list-group-item">Calificación: <strong>${t.rate}</strong></li>\n          <li class="list-group-item">Géneros: <strong>${s}</strong></li>\n          <li class="list-group-item">Duración: <strong>${t.duration}</strong></li>\n         </ul>\n          `,e.appendChild(n)}))}))}));