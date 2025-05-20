"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SugarDecorator = void 0;
class SugarDecorator {
    constructor(beverage) {
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ", zahăr";
    }
    getCost() {
        return this.beverage.getCost() + 1;
    }
}
exports.SugarDecorator = SugarDecorator;
