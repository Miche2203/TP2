// Con promesas

function apiFetchPromises() {
    const data = fetch("https://swapi.dev/api/films/")
 .then((res) => console.log("res: ", res))
 .catch((err) => console.log(err))
 return data
 }

// Con Async/Await

 async function apiFetchAsyncAwait() {
     const data = await fetch("https://swapi.dev/api/films/")
    return data
 }

//Forma de exportar con common js
module.exports = {
   apiFetchPromises, 
   apiFetchAsyncAwait
}
// module.exports = apiFetchAsyncAwait --> Si solo quiero exportar esa Fx