function findmax() {

    var max=0
    for(i=0; i< arguments.length; i++) {
if (argumants[i]> max) {
    max = arguments[i]
}

    }
    return max
}
console.log(findmax(8,10,9,7,6,2))