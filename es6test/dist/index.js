'use strict';

var _temp = require('/temp');

console.log(_temp.name); //不一样的声明方式
/*
let a = "chenxin"
const a = "aaaaa";
var a = "aaa"
console.log(a)*/

//变量的解构赋值
/*
let [a,[b,c],d] = [0,[1,2],3]
console.log(a, b, c,d)

let [a1,b2="chenxin"] = ['陈鑫']
console.log(a1+b2)

let {foo,bar} ={foo:'chenxin',bar:'陈鑫'}
console.log(foo+bar)

let faa;
({faa} = {faa:'chenxin'});
console.log(faa)

const [h,i,j,k,e,f,g] = 'chenxin';
console.log(h, i, j, k, e, f,g)
*/

//对象扩展运算符
/*
function chen(...arg) {
    console.log(arg[0])
    console.log(arg[1])
    console.log(arg[2])
}
chen(1,2,3)
let arr1=["www",'chen','com']
console.log(arr1)
//let arr2 = arr1
let arr2=[...arr1]
arr2.push("cc")
console.log(arr2)
console.log(arr1)*/

//rest运算符   ... 直译：剩余的
/*
function chen(first,...arg) {
    console.log(arg.length)
    for(let val of arg){
        console.log(val)
    }
}
chen(1,2,3,4)
*/

//模块化操作

//import    引入
