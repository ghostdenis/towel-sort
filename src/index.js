module.exports = function towelSort (matrix = []) {
    let result = [];

    for(let i = 0; i < matrix.length; i++) {
        const currentValue = matrix[i];
        if (i % 2 === 0) {
           result.push(currentValue);
        } else {
           result.push(currentValue.reverse());
        }
    }
    return result.flat();
}
