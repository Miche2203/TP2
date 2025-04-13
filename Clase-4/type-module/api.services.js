// Con promesas
function apiFetchPromises() {
    const data = fetch("https://swapi.dev/api/films/")
  .then((res) => res.json())    // --> Para que te muestre las peliculas. traduce JS a JSON
  .catch((err) => console.log(err))
 return data
 }

// Con Async/Await

 async function apiFetchAsyncAwait() {
     const data = await fetch("https://swapi.dev/api/films/")
     const dataParser = data.json()  // ---> Traduce a JSON
     return dataParser
 }

//Forma de exportar con type: module

export default{
   apiFetchPromises, 
   apiFetchAsyncAwait   
}
