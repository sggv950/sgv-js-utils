"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = exports.isNumber = exports.isNil = void 0;
var isNil_1 = require("./value/isNil");
Object.defineProperty(exports, "isNil", { enumerable: true, get: function () { return isNil_1.isNil; } });
var isNumber_1 = require("./value/isNumber");
Object.defineProperty(exports, "isNumber", { enumerable: true, get: function () { return isNumber_1.isNumber; } });
var isString_1 = require("./value/isString");
Object.defineProperty(exports, "isString", { enumerable: true, get: function () { return isString_1.isString; } });
