let films = [ "star wars","totoro","rocky","pulp fiction", "la vida es bella",];

function arrayAMayusculas(array) {
    let allfilms = []
    for (let i = 0; i < array.length; i++){
    films[i] += array[i].toUpperCase();
    }
    return allfilms
}

console.log (arrayAMayusculas(films))
console.log (films)



   