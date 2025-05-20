import { Beverage } from './Beverage';

export class Coffee implements Beverage {
  getDescription(): string {
    return "Cafea";
  }

  getCost(): number {
    return 10;
  }
}

