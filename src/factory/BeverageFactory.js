"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeverageFactory = void 0;
const Coffee_1 = require("../beverages/Coffee");
const Tea_1 = require("../beverages/Tea");
class BeverageFactory {
    static createBeverage(type) {
        if (type === 'coffee')
            return new Coffee_1.Coffee();
        else
            return new Tea_1.Tea();
    }
}
exports.BeverageFactory = BeverageFactory;
