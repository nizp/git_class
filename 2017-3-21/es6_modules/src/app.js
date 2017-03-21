// import {firstName,age} from './a.js';

// * 导入所有内容  as 取个别名  叫 fn1 到 './a.js'去引资源
//使用: let obj = fn1;  obj.aaa -> 111
import * as fn1 from './a.js';
import b from './b';
import {cc} from './b';
// import {b} from './b.js';

// let ccc = '123';
// import {foo} from ccc;  //会报错

console.log(b);

// console.log(fn1.aaa());
// console.log(firstName,age);
// console.log(a(),b());
