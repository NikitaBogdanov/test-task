const arr1 = [[2],3,{},[1,2]];
const arr2 = [2,3,[1,{a:"text"}],[[[2]]], 5];
const arr3 = [5,{a:1},[1,[3,{},{c:"a",d:[2,2]}],[[6]]]];

Array.prototype.customFlat = function() {
    let flatArr = [];

    for(let i = 0; i < this.length; i++) {
        if(typeof this[i] === "object") {
            if(!Array.isArray(this[i])){
                this[i] = Object.values(this[i])
            }
            flatArr = flatArr.concat(this[i].customFlat());
        } else {
            flatArr.push(this[i]);
        }
    }
    return flatArr;
};

console.log("input:", JSON.stringify(arr1), "output:", arr1.customFlat());
console.log("input:", JSON.stringify(arr2), "output:", arr2.customFlat());
console.log("input:", JSON.stringify(arr3), "output:", arr3.customFlat());

const ex1 = document.querySelector('#ex1');
ex1.innerHTML = `[${arr1.customFlat()}]`;

const ex2 = document.querySelector('#ex2');
ex2.innerHTML = `[${arr2.customFlat()}]`;

const ex3 = document.querySelector('#ex3');
ex3.innerHTML = `[${arr3.customFlat()}]`;
