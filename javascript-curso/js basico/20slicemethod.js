const array= ['ana', 'maria', 'jose', 'david', 'joan', 'miriam']

const newArray= array.slice()
//console.log(newArray)

newArray[2] = 'perita'

//console.log(newArray)

arrayPrueba= ['x', 'o', null, 'x', 'x', 'x', null, 'o', 'o' ]

function calcularGanador(array) {
    const posibilidadesGanar = 
    [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]
    
    return null
}

const posibilidadesGanar2 = 
    [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]

  for(let i= 0; i<posibilidadesGanar2.length; i++){              
    let [d, e, f] = posibilidadesGanar2[i]
       if (arrayPrueba[d] && arrayPrueba [d] === arrayPrueba[e] && arrayPrueba[e] === arrayPrueba [f]){
            console.log(arrayPrueba[d])
       }
  }array