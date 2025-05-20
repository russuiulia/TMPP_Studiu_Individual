import { Coffee } from '../beverages/Coffee';
import { Tea } from '../beverages/Tea';
import { Beverage } from '../beverages/Beverage';

export class BeverageFactory {
  static createBeverage(type: 'coffee' | 'tea'): Beverage {
    if (type === 'coffee') return new Coffee();
    else return new Tea();
  }
}
