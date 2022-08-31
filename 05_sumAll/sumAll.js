const sumAll = function(startNum, endNum) {
        let sum = 0
        i = startNum

        while (typeof startNum === "number" && typeof endNum === "number") {
            if (startNum < 0 || endNum < 0) {
                return "ERROR"
            }
            if (startNum < endNum) {
                for (i = startNum; i <= endNum; i++) {
                    sum += i
                }
                return sum
            }
            if (endNum < startNum) {
                for (i = endNum; i <= startNum; i++) {
                    sum += i
                }
                return sum
            }
            else return "ERROR";
        }
        return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
