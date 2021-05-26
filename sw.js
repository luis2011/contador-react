const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./style.css",
    "./components/Contador.js",
    "./index.js"
]

const CACHE_NAME= "v3_cache_contador_react"

//self hace referencia a this, esto es igual a decir  const self = this

self.addEventListener("install", (e) =>{// instala todas las cache serviceWorke
    e.waitUntil( // waitUntil espera a que algo suceda
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS).then( ()=>{// me permite agregar todas las rutas de cache_elements
                self.skipWaiting()
            }).catch(console.log)
        })
    )
}); 

self.addEventListener("activate", (e) =>{// activa todas las cache serviceWorke
const cacheWhitelist = [CACHE_NAME];

    e.waitUntil( // waitUntil espera a que algo suceda
        caches.keys().then(cacheNames => {
            return Promise.all(cacheNames.map(cacheName =>{
                 return (
                     cacheWhitelist.indexOf(cacheName) === -1 && caches.delete(cacheName)
                 );
            })
        );
        }).then( () => self.clients.claim()) // esto reclama la nueva version
    );
}); 


self.addEventListener("fetch", (e) =>{// fetch cachea mis archivos verificando si hay cambios en mis cache_elements
    
    e.respondWith(
        caches.match(e.request).then((res) => {
            if (res){
                return res
            }
            return fetch(e.request) // sino existe retorno la respuesta
    })
   );
}); 