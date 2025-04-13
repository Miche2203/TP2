// common js
// "services" es un nombre que yo elijo
// Este modulo de importacion es viejo. Ya no se usa tanto.
// Se usa sin type en JSON

const services = require("./api.service.js")// --> para importar al index  
                                        // "./"" xq esta a la misma altura que index
                                        // "../" para ir mas atras

console.log("services: ", services)