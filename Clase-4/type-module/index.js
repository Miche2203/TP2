// type: module  --> Mas usado!!
 import services from "./api.services.js";
 import http from "http" // Permite crear un servidor en Node.js
import fs from "fs"

 let dataApi

// Como traerme los datos:

// A) Promesas ***

//  function getDataPromises() {
//    services.apiFetchPromises()
//           .then((data) => console.log(data))
//           .then((data) => dataApi = data)
//  }
//  getDataPromises()

// ----------------------------------------------------

// B) Async/ await ***

 async function getDataAsyncAwait() {
   const data = await services.apiFetchAsyncAwait();
   dataApi = data
   return data;
 }

getDataAsyncAwait()

// ---------------------------------------------------------

 const server = http.createServer(async(req, res) => { // --> Creo servidor
    const{ method, url} = req

console.log("method: ", method)

    if (url === "/" && method === "GET") {
        res.writeHead(200, {'Content-Type': 'application/json'})  // --> Setea codigo y tipo archivo que le vamos a mandar
    res.end(JSON.stringify({
message: "URL base"
    }))
    } else if (url === "/api" && method === "GET"){
        res.writeHead(200, {'Content-Type': 'application/json'})  
        res.end(JSON.stringify({
    message: dataApi     }))
        } else if(url === "/public" && method === "GET"){
        
       
        const data = await fs.promises.readFile("./public/index.html","utf-8")
        res.writeHead(400, {'Content-Type': 'text/html'})  
        res.end(data)
    
    } else {
        res.writeHead(200, {'Content-Type': 'application/json'})  
        res.end(JSON.stringify({
    message: dataApi     }))
    }
 })

// Asignacion de puertos en backend -> 8000 - 9000
 server.listen(8080, () => console.log("server running")) // --> Postman pongo GET http://localhost:8080
                            // Escucha el metodo que elegi y la URL en la cual estoy solicitando algo   
