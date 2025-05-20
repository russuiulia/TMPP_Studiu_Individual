import { Beverage } from '../beverages/Beverage';

export function logNewOrder(order: Beverage) {
  console.log(`Comandă nouă: ${order.getDescription()} - ${order.getCost()} lei`);
}
