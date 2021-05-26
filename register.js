if("serviceWorker" in navigator){
   navigator.serviceWorker.register("./sw.js")
   //sw: serviceWorker
}


// otra forma
/*if(navigator.serviceWorker){
    console.log("si existe nuevamente")
}*/