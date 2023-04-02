// // Code your solution here

function findMatching(drivers, names){
    const result = drivers.filter(input => input.toLowerCase() === names.toLowerCase())
    return result;
}

function fuzzyMatch(drivers, letters){
    const result = drivers.filter(input => input.startsWith(letters) === true)
    return result;
}

function matchName(drivers, names){
    const result = drivers.filter(input => input.name === names)
    return result;
}


