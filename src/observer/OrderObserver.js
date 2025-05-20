"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logNewOrder = logNewOrder;
function logNewOrder(order) {
    console.log(`Comandă nouă: ${order.getDescription()} - ${order.getCost()} lei`);
}
