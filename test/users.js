"use strict";
const expect    = require("chai").expect;
const users = require('../routes/users.js');
const TIMEOUT_MS = 5000;

describe("Users tests", function() {
    it("user is a function", function() {
        this.timeout(TIMEOUT_MS);
        let expected = 'function';
        expect(typeof(users)).to.deep.equal(expected);
    });
});
