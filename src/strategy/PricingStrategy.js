"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HappyHourPricing = exports.NormalPricing = void 0;
class NormalPricing {
    calculatePrice(beverage) {
        return beverage.getCost();
    }
}
exports.NormalPricing = NormalPricing;
class HappyHourPricing {
    calculatePrice(beverage) {
        return beverage.getCost() * 0.8; // 20% reducere
    }
}
exports.HappyHourPricing = HappyHourPricing;
