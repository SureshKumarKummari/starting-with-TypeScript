"use strict";
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else if (typeof n1 === 'string' && typeof n2 === 'string') {
        return n1 + ' ' + n2;
    }
    return +n1 + +n2;
}
//Array generics 
const numres = []; //const numres:number[]=[]
const textres = []; //const textres:string[]=[]
//object 
//function printObject(resultObj:{val:number,timestamp:Date})
//using interfaces
function printObject(result) {
    console.log(result);
}
document.addEventListener("DOMContentLoaded", function () {
    const ele1 = document.getElementById('n1');
    const ele2 = document.getElementById('n2');
    const butn = document.querySelector('button');
    butn.addEventListener("click", () => {
        const n1 = Number(ele1.value);
        const n2 = Number(ele2.value);
        console.log(n1, n2, add(+n1, +n2));
        printObject({ val: Number(add(n1, n2)), timestamp: new Date() });
    });
});
//we can specify promise with type
const newpromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It workes');
    }, 1000);
});
newpromise.then((res) => {
    console.log(res);
});
