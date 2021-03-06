const eMath = require("./index");
const { test } = require("zora");

test("Test eMath.subtract()", (t) => {
	t.equal(eMath.add( 5, 5), 10);
});

test("Test eMath.mult()", (t) => {
	t.equal(eMath.mult( 5, 5), 25);
});

test("Test eMath.divide()", (t) => {
	t.equal(eMath.divide( 5, 5), 1);
});

test("Test eMath.percent()", (t) => {
	t.equal(eMath.percent( 5, 5), 100);
});

test("Test eMath.mod()", (t) => {
	t.equal(eMath.mod( 5, 5), 0);
});


