


function myEach(collection, callback) {
    for (let accessor of collection) {
        callback(collection[accessor])
    
    }
    return collection
}

function myMap(collection, callback) {
    let modArr = []
    for (let elem of collection) {
        modArr.push(callback(collection[elem]))
    }
    return modArr
}

function myReduce(collection, callback, accumulator) {
    acc = acc || collection [0]
     
    for (let accessor of collection) {
      accumulator = callback(accumulator, collection[accessor], collection)
    
    }
    return accumulator
}