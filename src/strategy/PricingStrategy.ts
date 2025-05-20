import { Beverage } from '../beverages/Beverage';

export interface PricingStrategy {
  calculatePrice(beverage: Beverage): number;
}

export class NormalPricing implements PricingStrategy {
  calculatePrice(beverage: Beverage): number {
    return beverage.getCost();
  }
}

export class HappyHourPricing implements PricingStrategy {
  calculatePrice(beverage: Beverage): number {
    return beverage.getCost() * 0.8; // 20% reducere
  }
}
