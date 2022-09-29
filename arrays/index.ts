var array : number[];

array = [1, 2, 3, 4, 5];
var array_string : string[];
array_string = ["1", "2", "3", "4", "5"];

console.log(array);
getMinNumber(array);
// getMinNumber(array_string);
function getMinNumber(array : number[]){
    let minNumber = array[0];
    for(var index = 1; index < array.length; index++){
        if(array[index] < minNumber){
            minNumber = array[index];
        }
    }
    console.log(minNumber);
}

//array.concat(array_string);
var array_2 = [-1, 0, 8, 9, 4]

array = array.concat(array_2);

console.log(array);
getMinNumber(array);