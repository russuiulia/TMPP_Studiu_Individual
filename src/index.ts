import { BeverageFactory } from './factory/BeverageFactory';
import { MilkDecorator } from './decorators/MilkDecorator';
import { SugarDecorator } from './decorators/SugarDecorator';
import { OrderManager } from './singleton/OrderManager';
import { logNewOrder } from './observer/OrderObserver';
import { HappyHourPricing, NormalPricing, PricingStrategy } from './strategy/PricingStrategy';
import readlineSync from 'readline-sync';
import { Beverage } from './beverages/Beverage';

const orderManager = OrderManager.getInstance();
orderManager.addObserver(logNewOrder);

console.log("=== BUN VENIT LA CAFENEA ===");

let running = true;

while (running) {
  const beverageChoice = readlineSync.question('Alege bautura (1 - Cafea, 2 - Ceai): ');
  let beverage: Beverage;

  if (beverageChoice === '1') {
    beverage = BeverageFactory.createBeverage('coffee');
  } else if (beverageChoice === '2') {
    beverage = BeverageFactory.createBeverage('tea');
  } else {
    console.log('Optiune invalida!');
    continue;
  }

  const addMilk = readlineSync.keyInYNStrict('Vrei sa adaugi lapte?');
  if (addMilk) beverage = new MilkDecorator(beverage);

  const addSugar = readlineSync.keyInYNStrict('Vrei sa adaugi zahar?');
  if (addSugar) beverage = new SugarDecorator(beverage);

  const priceChoice = readlineSync.question('Alege tipul de pret (1 - Normal, 2 - Happy Hour): ');
  let pricingStrategy: PricingStrategy;

  if (priceChoice === '2') {
    pricingStrategy = new HappyHourPricing();
  } else {
    pricingStrategy = new NormalPricing();
  }

  const finalPrice = pricingStrategy.calculatePrice(beverage);
  console.log(`Comanda: ${beverage.getDescription()} | Total: ${finalPrice.toFixed(2)} lei`);

  orderManager.addOrder(beverage);

  running = readlineSync.keyInYNStrict('Vrei sa mai comanzi?');
}

console.log('\n=== Comenzile tale ===');
orderManager.getOrders().forEach((order, index) => {
  console.log(`${index + 1}. ${order.getDescription()} - ${order.getCost()} lei`);
});

console.log('\nMultumim pentru vizita!');
