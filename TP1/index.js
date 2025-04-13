import fs from "fs"

const array = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false]
let condicion = {}

async function copiarArray(arr, condicion) {
    const viable = ["string", "number", "boolean"]
  try {
    if (condicion === null || condicion === undefined || !viable.includes(typeof condicion)) {
        throw new Error("La condición no existe o no es válida");
      }

    const copiaArray = arr.filter((x) => typeof x === typeof condicion)    // --> Filtro x condicion
    const copiaSinduplicado = [...new Set(copiaArray)]                    // --> Saco duplicados

let copiaOrdenada

    if (typeof condicion === "string") {                              // --> Los ordeno de < a > sea cual sea el tipo
      copiaOrdenada =  copiaSinduplicado.sort((a, b) =>              //
        a.localeCompare(b))}                                        //
    else { copiaOrdenada = copiaSinduplicado.sort((a, b) => a - b) //
    }

    const writeData = await fs.promises.writeFile("doc.txt", copiaOrdenada.join(", "),"utf8");  // --> Lo escribo en Txt

  } catch (error) {
    console.log(error)}
}

copiarArray(array, condicion)

