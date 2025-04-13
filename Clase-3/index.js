import fs from "fs"

// 2 Formas de importar modulos en Node (funcionan los 2 igual)

// 1) common js   --> vieja escuela
// const fs = require("fs")

// 2) module  +++ --> > nuevo / < problemas xa importar. Necesitas agregar en JSON el type
// import fs from "fs"
// En el archivo package.json le tenes que agregar despues de main --> "type": "module",

// ----------------------------------------------------------------------------

//  console.log("// ------- FS SINCRONICO: BLOQUEANTE -------- //")
//  console.log()

//  function fsSync() {
//      const data = fs.readFileSync("doc.txt","utf-8") // --> lee documento con = nombre que este en la = carpeta. Necesito guardarlo en una variable
//      console.log("Data en fs sincronico: ", data)
//      const writeData = fs.writeFileSync("doc.txt","Bienvenidos") // --> permite reescribir un archivo pero no lo muestra
//      const dataupdate = fs.readFileSync("doc.txt","utf-8")     // --> recien ahi te lo pone en pantalla
//      console.log("Data actualizada: ", dataupdate)
//  }

//  console.log()
//  console.log("// ------- FIN FS SINCRONICO -------- //")
//  fsSync()

// ----------------------------------------------------------------------------

// console.log("// ------- FS CALLBACK -------- //");
// console.log()

// Callback: Fx que se pasa como parametro de otra Fx. Es la que recibe una Fx aparte de otros parametros
// Callback hell: se hace una piramide complicada, facil de perderse, consume mucho y es dificl de mantener. 
// Se usa pero solo 1/2 veces.

//  function callback(a, b, cb) { // --> 2) Que se pasa x parametros
//      return cb(a,b)
//  }

//  function suma(x,y) {  // --> 1) Esta seria la Fx callback
//      return x + y
// }

//  console.log("Callback: ", callback(10,5, suma))

//  function fscallback() {

// //    Parametros: si o si primero err y luego res. Los nombres pueden cambiar.
//    fs.readFile("doc.txt", "utf-8", (err, res) => {  // --> No necesito guardarlo en una variable como en Sync
//      if (res) console.log("Data en fs callback: ", res);
//      if (err) console.log("Error en la operacion de callback con FS.", err);
//     fs.writeFile("doc.txt", "Sobreescribiendo...", (err, data) => { 
//        fs.readFile("doc.txt", "utf-8", (err, data) => {
//          console.log("Data actualizada en fs callback: ", data);
//        });
//      });
//    })
//  }
//  fscallback()

// console.log()
// console.log("// ------- FIN FS CALLBACK -------- //")

// ----------------------------------------------------------------------------

// *** Promesas ****

//  console.log("// ------- Objeto basico de Promesas -------- //");
//  console.log("");

//  function promisesJS(data) {
//   return new Promise((resolve, reject) => {
//       if (data) console.log("La promesa se resolvio")
//         else if (reject) console.log("Error")
//  })    
//  }
//  promisesJS(true)

//  console.log("// ------- Peticion a una API c/ Promesas -------- //");
//  console.log("");

// (API = Servicios publicos que disponene de Objs para que podamos interactuar)* +++
// La peticion te devuelve una promesa 
// fetch --> Fx JS que permite realizar consultas a servicio externos. Se puede hacer con aync/await tmb

//  const fetchApi = fetch("https://rickandmortyapi.com/api/character")
//                   .then(res => console.log(res)) // --> Cuando se resuelve la promesa, va a hacer lo qe diga ahi
//                // .then(res => {mas logica aca})
//                   .catch(err => console.log("Error: ",err))
//                   .finally(() => console.log("Finally...")) // --> Opcional. Se ejecuta sea exitosa o no

//  console.log("fetch API R y M: ", fetchApi)

//  console.log("// ------- FS c/ Promesas -------- //");
//  console.log("");

//  function fsPromises() {
//    fs.promises.readFile("doc.txt", "utf-8")
//        .then((res) => console.log(res)) // res: lo que tenes en el txt
//        .then(() =>{fs.promises.writeFile("doc.txt", "Funcion con Promesas y FS")
//        })
//        .catch((err) => console.log("Error: ",err))
// }

// Version ChatGPT

// function fsPromises() {
//   fs.promises.readFile("doc.txt", "utf-8")
//       .then((res) =>{ console.log("Lo primero: ",res) // res: lo que tenes en el txt
//       return fs.promises.writeFile("doc.txt", "Funcion con Promesas y FS")
//       })
//       .then(() =>{ 
//         return fs.promises.readFile("doc.txt", "utf-8")
//       })
//       .then((res) => console.log("Despues de escribir: ",res))
//       .catch((err) => console.log("Error: ",err))
// }

//  fsPromises()

//  console.log("");
//  console.log("// ------- FIN FS c/ Promesas -------- //");

// ----------------------------------------------------------------------------

// ASYNC (Siempre una Fx, no puede ser una variable) / AWAIT
// Es una promesa pero se escribe de otra manera
// Consulta BD

console.log("// ------- FS c/ Async/Await -------- //");
console.log()

 async function fsAsyncAwait() {  
 try {
    const readData = await fs.promises.readFile("doc.txt", "utf-8")
     console.log("Read Data: ",readData)
      const writeData = await fs.promises.writeFile("doc.txt", "Nuevo texto")
      const data = await fs.promises.readFile("doc.txt", "utf-8")
      console.log("Nueva data: ", data) 
 } catch (error) {
    console.log("Error en el catch de async: ", error)
}
}

 fsAsyncAwait()

 console.log("// ------- FIN FS c/ Async/Await -------- //")
