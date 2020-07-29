var fortune = require('../lib/fortune.js');
var expect = require('chai').expect;

suite("fortune Func test", function () {
    test("functune func return a ABC", function () {
        expect(typeof fortune.getFortune() === 'string');
    })
})