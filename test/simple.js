const {add,mul}  = require('../src/math.js')
// const assert = require('assert')
// assert.equal(add(1,1),5,'结果不符合');


//使用chaijs测试
const {should,expect,assert} = require('chai')
/* 
//should要先执行一下
should()
// add(2,3).should.be.equal(5)//没有任何问题
add(2,3).should.be.equal(6)//AssertionError: expected 5 to equal 6 */


//这种方式也可以
// expect(add(2,3)).to.equal(5)


// 这个和默认的nodejs提供的是一样的。
// assert.equal(add(2,3),5)

//更多的参考https://www.chaijs.com/guide/styles/




