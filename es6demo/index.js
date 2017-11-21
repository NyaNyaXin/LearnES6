//字符串模板
/*let chenxin= '陈鑫'
let blog =`哈哈哈哈哈哈,陈鑫字符串模板`
document.write('chenxin|'.repeat(10))*/
/*document.write(blog.includes(chenxin))
document.write(blog.startsWith(chenxin))
document.write(blog.endsWith(chenxin))*/
/*
let a = 1;
let b = 2;
let result = `${a+b}`
document.write(result)*/

//ES6数字操作
//二进制声明 Binary
/*
let binary = 0B010101;
console.log(binary)
//八进制   Octal
let octal = 0o777
console.log(octal)*/
//判断是否为数字
/*let a=11;
console.log(Number.isFinite(a))
console.log(Number.isFinite('chenxin'))
console.log(Number.isFinite(NaN))
console.log(Number.isFinite(undefined))*/
//判断NaN
/*console.log(Number.isNaN(NaN))
console.log(Number.isNaN(123))*/
//判断整数
/*console.log(Number.isInteger(1.22))
console.log(Number.isInteger(1))*/
//转换
/*console.log(Number.parseInt(1.22))
console.log(Number.parseFloat(1))*/
//取值范围
/*
let chen = Math.pow(2,53)-1
console.log(chen)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.isSafeInteger(11))*/

//ES6数组
//json数组格式转换成数组
/*let json = {
    '0':'chen',
    '1':'xin',
    '2':'ding',
    length:3
}
let arr = Array.from(json)
console.log(arr)*/
//Array.of方法
/*let arr = Array.of('chen',4,5,6)
console.log(arr)*/
//find()实例方法
/*
* value当前查找的值
* index下标
* arr到哪里去查找
* */
/*let arr = [1,2,3,4,5,"xx",5,6,9,7,8]
console.log(arr.find(function (value,index,arr) {
    //return value>10;
    return value == 'xxx'
}))*/
//fill  数组元素替换
/*let arr = ['chenxin','陈鑫','呵呵']
arr.fill('web',1,3)
console.log(arr)*/
//数组循环 keys()数组的下标 entries()可以得到数组的下标和值
/*let arr = [1,2,3,4,5]
for (let [index,val] of arr.entries()){
    console.log(index+':'+val)
}*/
//entries()
/*
let arr= ['aa',1,2,3]
let list = arr.entries()
console.log(list.next().value)
console.log('*********************')
console.log(list.next().value)
console.log('!!!!!!!!!!!!1')
console.log(list.next().value)
*/

//扩展
/*function add(a,b) {
    //主动抛出异常
    /!*if (a ==0){
        throw new Error('A is Error')
    }*!/
    //严谨模式
    //'use strict'
    return a+b
}
console.log(add(1,2))
//获取参数个数
console.log(add.length)*/

//箭头函数
/*
var add=(a,b=1)=>{
    console.log('chenxin')
    return (a+b)
}
console.log(add(1))
*/

//对象的函数结构 json
/*
let json={
    a:'chenxin',
    b:'dingjianhui'
}
function fun({a,b='web'}) {
    console.log(a,b)
}
fun(json)
*/
//数组解构
/*let arr =['haha','chenxin','front']
function fun(a,b,c) {
    console.log(a, b, c)
}
fun(...arr)*/
//in的用法
/*
let obj = {
    a:'chenxin',
    b:'陈鑫'
}
console.log('a' in obj)

let arr = [1,2,3]
console.log(3 in arr)
*/
//数组遍历
/*let arr = ['aaa',1,2]
arr.forEach((value,index)=>console.log(value,index))
arr.filter(x=>console.log(x))
arr.some(x =>console.log(x))
console.log(arr.map(x=>'web'))*/
//数组变字符串
/*let arr = [1,2,3]
console.log(arr.toString())
console.log(arr.join('|'))*/

//对象
//赋值
/*
let name = "chenxin"
let skill ='java'
let obj = {
    name,
    skill
}
console.log(obj)
*/
//key值的构建
/*
var key ="skill"
var obj = {
    [key]:'web'
}
console.log(obj)
*/
//自定义对象的方法
/*let obj = {
    add:function (a,b) {
        return a+b
    }
}
console.log(obj.add(1,2))*/
//is()  ===同值相等 is()严格相等
/*let obj1 = {name:'chenxin'}
let obj2 = {name:'chenxin'}
console.log(Object.is(obj1.name,obj2.name))
console.log(+0===-0)
console.log(NaN===NaN)
console.log(Object.is(+0,-0))
console.log(Object.is(NaN,NaN))*/
//assign()  合并对象
/*let a = {a:'chenxin'}
let b = {b:'陈鑫'}
let c = {c:'java'}
let d = Object.assign(a, b, c)
console.log(d)*/

//Symbol对象的作用
/*let a = new String
let b = new Number
let c = new Boolean
let d = new Array
let e = new Object*/
//声明
/*let f = Symbol('chenxin')
console.log(f)
console.log(f.toString())*/
//应用
/*let chen = Symbol()
var obj = {
    [chen]:'chenxin'
}
console.log(obj[chen])
obj[chen]='web'
console.log(obj[chen])*/
/*
let obj = {name:'chen',skill:'java'}
let age = Symbol()
obj[age]=18
console.log(obj)
for (let item in obj){
    console.log(obj[item])
}
console.log(obj[age])
*/

//Set   数据结构
/*//声明
let setArr = new Set(['chenxin','陈鑫','web'])
//循环输出  for of
for (let item of setArr){
    console.log(item)
}
//forEach
setArr.forEach((value => console.log(value)))
//增
setArr.add('java')
//查看集合大小 size属性
console.log(setArr.size)
//查
console.log(setArr.has('java'))
//删
setArr.clear()
setArr.delete('chenxin')

console.log(setArr)*/

//WeakSet
/*let weakObj = new WeakSet()
let obj = {
    a:'chen',
    b:'陈鑫'
}
weakObj.add(obj)
console.log(weakObj)*/

//map
/*
let json= {
    name:'chenxin',
    age:22,
    skill:'java'
}
console.log(json)
var map = new Map();
map.set(json,'iam')
console.log(map)
map.set('chen',json)

//增删查
console.log(map.get(json));
console.log(map.has(json))
//map.delete(json)
//map.clear()
console.log(map.size)
console.log(map)
*/

//proxy 代理      ES6:增强 对象和函数    生命周期    钩子函数    预处理
/*let obj = {
    add:function (val) {
        return val+2
    },
    name:'I am chenxin'
}
console.log(obj.add(100),obj.name)
let proxy = new Proxy({
    add:function (val) {
        return val+2
    },
    name:'I am chenxin'
},{
    //get set apply
    get:function (target,key,property) {
        console.log('come in get')
        //console.log(target,key)
        return target[key]
    },
    set:function (target,key,value,receiver) {
        console.log(`setting ${key} = ${value}`)
        return target[key] = value
    }
});
console.log(proxy.name)
proxy.name='陈鑫'
console.log(proxy.name)*/
/*
let target = function () {
    return 'i am chen'
}
let handler = {
    apply(target,ctx,args){
        console.log('do apply')
        return Reflect.apply(...arguments)
    }
}
let pro  = new Proxy(target,handler)
console.log(pro())
*/

//promise es5回调地狱
/*let state = 1;
function step1(resolve,reject) {
    console.log('1.开始洗菜做饭')
    if (state==1){
        resolve('洗菜做饭完成')
    }else{
        reject('洗菜做饭出错')
    }
}
function step2(resolve,reject) {
    console.log('2.开始吃饭')
    if (state==1){
        resolve('吃饭完成')
    }else{
        reject('吃饭出错')
    }
}

function step3(resolve,reject) {
    console.log('3.开始收拾桌子')
    if (state==1){
        resolve('收拾桌子完成')
    }else{
        reject('收拾桌子出错')
    }
}

new Promise(step1).then(function (val) {
    console.log(val)
    return new Promise(step2)
}).then(function (val) {
    console.log(val)
    return new Promise(step3)
}).then(function (val) {
    console.log(val)
})*/

//class
/*class Coder{
    name(val){
        console.log(val);
        return val
    }
    skill(val){
        console.log(this.name('chenxin')+':'+'skill:'+val)
    }
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a+this.b
    }
}
let coder = new Coder(1,2);
coder.name('chenxin');
coder.skill('java')
console.log(coder.add())

class htmler extends Coder{

}
let p = new htmler();
p.skill('html')*/























































