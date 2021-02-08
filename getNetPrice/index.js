Number.prototype.netPrice = function(taxRate) {
    return (this/(1+taxRate/100)).toFixed(2);
};

const price = 10350;

console.log("(100).netPrice(20)", (100).netPrice(20));
console.log("(500).netPrice(13)", (500).netPrice(13));
console.log("price.netPrice(17), (price=10350)", price.netPrice(17));

const ex1 = document.querySelector('#ex1');
ex1.innerHTML = `${(100).netPrice(20)}`;

const ex2 = document.querySelector('#ex2');
ex2.innerHTML = `${(500).netPrice(13)}`;

const ex3 = document.querySelector('#ex3');
ex3.innerHTML = `${price.netPrice(17)}`;