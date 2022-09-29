type Person = {
    name : string,
    age : number
}

var dictionary = new Map<string, Person>
var dictionary_2: {[key:string] : Person} = {};

dictionary.set("182457", {name : "John", age : 20});
dictionary_2['182457'] = {name : "John", age : 20};

console.log(dictionary.get("182457"));
console.log(dictionary_2['182457']);

dictionary.set("182458", {name : "Milena", age : 25});

seeAllPersons(dictionary);
function seeAllPersons(dictionary : Map<string, Person>){
    // 3 diff ways to iterate over a Map
    dictionary.forEach((value, key) => {
        console.log(key, " : ", value);
    });

    for(let [key, value] of dictionary){
        console.log(key, " : ", value);
    }

    for(let entry of Array.from(dictionary.entries())){
        console.log(entry[0], " : ", entry[1]);
    }

}