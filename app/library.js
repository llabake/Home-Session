
module.exports = {
    
    aritGeo : function  (array) {

       var difference = array[1] - array[0];
       var ratio = array[1] / array[0];

       var arit = false;
       var geo = false;
        
        if (array.length === 0){
           return 0;
        }
        for (var i = 0; i < array.length - 1; i++) {
           arit = (array[i + 1] - array[i] == difference);
           geo =  (array[i + 1] / array[i] == ratio);
        }

       if (arit === true)
           return "Arithmetic";
       else if (geo === true)
           return "Geometric";
       else if ((arit === false) && (geo === false)) {
           return -1;
       }

 },
    

    fizzBuzz: function (number) {
     
       if ((number%3 === 0 ) && (number%5 === 0)){
         return 'FizzBuzz';
       }

       else if  (number%5 === 0){
         return 'Buzz';
       }

       else if  (number%3 === 0){
         return 'Fizz';
       }

       else {
         return number;
       }
     }
}