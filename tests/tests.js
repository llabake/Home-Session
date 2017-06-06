const getPrimes = require('../app/library.js');

describe("getPrimes ", function () {

    describe("When checking for prime number from 0 to a number", function () {
        
        it("should return '[]' for -4", function () {
            expect(getPrimes(-4)).toEqual([]);
        });


        it("should return '[]' for 0", function () {
            expect(getPrimes(0)).toEqual([]);
        });
        
        it("should return '[2]' for 2", function () {
            expect(getPrimes(2)).toEqual([2]);
        });

        it("should return '[2,3]' for 3", function () {
            expect(getPrimes(3)).toEqual([2, 3]);
        });
        
        
        it("should return '[]' for typeof(0.5)", function () {
            expect(getPrimes(0.5)).toEqual([]);
            });

        it("should return '[]' for typeof(true)", function() {
            expect(getPrimes(true)).toEqual([]);
            });

        

                
    });
 });

