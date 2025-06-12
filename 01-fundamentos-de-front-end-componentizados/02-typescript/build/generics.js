"use strict";
//Generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Iran, Goku"], ["vegeta"]);
numArray.push([4]);
console.log(numArray);
console.log(stgArray);
