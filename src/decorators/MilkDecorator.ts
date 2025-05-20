import { Beverage } from '../beverages/Beverage';

export class MilkDecorator implements Beverage {
  constructor(private beverage: Beverage) { }

  getDescription(): string {
    return this.beverage.getDescription() + ", lapte";
  }

  getCost(): number {
    return this.beverage.getCost() + 2;
  }
}
