self.addEventListener("install",e=>{
e.waitUntil(
caches.open("flashcards").then(cache=>{
return cache.addAll([
"./",
"./index.html",
"./manifest.json"
]);
})
);
});

