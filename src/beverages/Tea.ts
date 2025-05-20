import { Beverage } from './Beverage';

export class Tea implements Beverage {
  getDescription(): string {
    return "Ceai";
  }

  getCost(): number {
    return 8;
  }
}
