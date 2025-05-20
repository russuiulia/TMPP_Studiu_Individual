"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderManager = void 0;
class OrderManager {
    constructor() {
        this.orders = [];
        this.observers = [];
    }
    static getInstance() {
        if (!OrderManager.instance) {
            OrderManager.instance = new OrderManager();
        }
        return OrderManager.instance;
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    notify(order) {
        this.observers.forEach(obs => obs(order));
    }
    addOrder(order) {
        this.orders.push(order);
        this.notify(order);
    }
    getOrders() {
        return this.orders;
    }
}
exports.OrderManager = OrderManager;
