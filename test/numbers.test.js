const twelve = require("../src/numbers");
const assert = require('assert');

describe("Twelve", () => {
    it ("is a function", () => {
       assert.strictEqual(typeof twelve, "function");
    });

    // See README and then Simply uncomment the lines below:
/*
    it("should return the number 12", () => {
        assert.strictEqual(twelve(), 12);
    });
*/
})
