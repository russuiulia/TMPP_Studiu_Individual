import { Beverage } from '../beverages/Beverage';

export class SugarDecorator implements Beverage {
  constructor(private beverage: Beverage) { }

  getDescription(): string {
    return this.beverage.getDescription() + ", zahăr";
  }

  getCost(): number {
    return this.beverage.getCost() + 1;
  }
}
