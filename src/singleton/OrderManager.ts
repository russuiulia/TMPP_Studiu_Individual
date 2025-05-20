import { Beverage } from '../beverages/Beverage';

type Observer = (order: Beverage) => void;

export class OrderManager {
  private static instance: OrderManager;
  private orders: Beverage[] = [];
  private observers: Observer[] = [];

  private constructor() { }

  static getInstance(): OrderManager {
    if (!OrderManager.instance) {
      OrderManager.instance = new OrderManager();
    }
    return OrderManager.instance;
  }

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  notify(order: Beverage) {
    this.observers.forEach(obs => obs(order));
  }

  addOrder(order: Beverage) {
    this.orders.push(order);
    this.notify(order);
  }

  getOrders(): Beverage[] {
    return this.orders;
  }
}
