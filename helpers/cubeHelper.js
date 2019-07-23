const compareObjects = (firstObject, secondObject) => {
    let equalObjects = true;

    for (attr in firstObject) {
        if (firstObject[attr] !== secondObject[attr])
            equalObjects = false;
    }

    return equalObjects;
}
module.exports.compareObjects = compareObjects;

module.exports.compareCubes = (firstCube, secondCube) => {
    return firstCube.every((lines, lineIndex) => {
        return lines.every((columns, columnIndex) => {
            return columns.every((dimension, dimensionIndex) => {
                return compareObjects(dimension, secondCube[lineIndex][columnIndex][dimensionIndex]);
            })
        })
    })
}

module.exports.moveHorizontally = (cube, index) => {
    let oldRow = cube[index], newRow;

    console.dir(oldRow, {depth: null});

}