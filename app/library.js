var checkPrimes = function (num) {
    if (typeof (num) != "number") {
        return [];
    }
    else if (num<=0){
        return [];
    }
    else {
        var temp = [];
        if (num < 2) {
            return false;
        }
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                temp.push(i);
            }
        }
        return temp.length === 0;
    }

};

var getPrimes = function (number) {
    var primes = [];
    for (var i = 1; i <= number; i++) {
        if (checkPrimes(i)) {
            primes.push(i);
        }
    }
    return primes;
};

module.exports = getPrimes;
