module.exports = function towelSort (matrix) {
        let result = [];
        if (matrix === undefined) {
            return result;
        }

        for (let i = 0; i < matrix.length; i++) {
            let array = matrix[i];  //array is an array(type)
            if (i % 2 == 1) {
                for (let j = array.length - 1; j >= 0; j--) {
                    result.push(array[j]);
                }
            } else {
                for (let k = 0; k < array.length; k++) {
                    result.push(array[k]);
                }
            }
        }

        return result;
}
