"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilkDecorator = void 0;
class MilkDecorator {
    constructor(beverage) {
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ", lapte";
    }
    getCost() {
        return this.beverage.getCost() + 2;
    }
}
exports.MilkDecorator = MilkDecorator;
