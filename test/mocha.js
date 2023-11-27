const { assert } = require('chai')
const { add, mul, cover } = require('../src/math.js')


//#math相当于标记的id
describe('#math', () => {

    //describe是写法的开始
    describe('#add()', function () {

        //it表示对一个测试的开始
        it('add(2,3) equal 5', function () {
            assert.equal(add(2, 3), 5);
        })


        //后面还有一个测试，但是我不测试，后面那个it不会被执行
        // it.only('add(2,3) equal 5',function(){
        //     assert.equal(add(2,3),5);
        // })


        //会跳过这个测试
        it.skip('add(2,2) equal 4', function () {
            assert.equal(add(2, 2), 4);
        })


        it('add(2,-3) equal -1', function () {
            assert.equal(add(2, -3), -1);
        })


    })



    //这个也要测试，争取覆盖率到100%
    describe('#mul()',function(){
        it('mul(2,3) equal 6', function () {
            assert.equal(mul(2, 3), 6);
        })
    })


    describe('#cover()', function () {

        it('cover(3,2) equal 1', function () {
            assert.equal(cover(3, 2), 1);
        })


        it('cover(3,3) equal 3', function () {
            assert.equal(cover(3, 3), 3);
        })


        it('cover(2,4) equal 6', function () {
            assert.equal(cover(2, 4), 6);
        })

    })


})

