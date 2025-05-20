"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BeverageFactory_1 = require("./factory/BeverageFactory");
const MilkDecorator_1 = require("./decorators/MilkDecorator");
const SugarDecorator_1 = require("./decorators/SugarDecorator");
const OrderManager_1 = require("./singleton/OrderManager");
const OrderObserver_1 = require("./observer/OrderObserver");
const PricingStrategy_1 = require("./strategy/PricingStrategy");
const readline_sync_1 = __importDefault(require("readline-sync"));
// Înregistrăm observatorul
const orderManager = OrderManager_1.OrderManager.getInstance();
orderManager.addObserver(OrderObserver_1.logNewOrder);
console.log("=== BUN VENIT LA CAFENEA ===");
let running = true;
while (running) {
    // 1. Alege băutura
    const beverageChoice = readline_sync_1.default.question('Alege bautura (1 - Cafea, 2 - Ceai): ');
    let beverage;
    if (beverageChoice === '1') {
        beverage = BeverageFactory_1.BeverageFactory.createBeverage('coffee');
    }
    else if (beverageChoice === '2') {
        beverage = BeverageFactory_1.BeverageFactory.createBeverage('tea');
    }
    else {
        console.log('Optiune invalida!');
        continue;
    }
    // 2. Adauga toppinguri
    const addMilk = readline_sync_1.default.keyInYNStrict('Vrei sa adaugi lapte?');
    if (addMilk)
        beverage = new MilkDecorator_1.MilkDecorator(beverage);
    const addSugar = readline_sync_1.default.keyInYNStrict('Vrei sa adaugi zahar?');
    if (addSugar)
        beverage = new SugarDecorator_1.SugarDecorator(beverage);
    // 3. Alege strategia de pret
    const priceChoice = readline_sync_1.default.question('Alege tipul de pret (1 - Normal, 2 - Happy Hour): ');
    let pricingStrategy;
    if (priceChoice === '2') {
        pricingStrategy = new PricingStrategy_1.HappyHourPricing();
    }
    else {
        pricingStrategy = new PricingStrategy_1.NormalPricing();
    }
    // 4. Plaseaza comanda
    const finalPrice = pricingStrategy.calculatePrice(beverage);
    console.log(`Comanda: ${beverage.getDescription()} | Total: ${finalPrice.toFixed(2)} lei`);
    orderManager.addOrder(beverage);
    // 5. Vrei sa mai comanzi?
    running = readline_sync_1.default.keyInYNStrict('Vrei sa mai comanzi?');
}
console.log('\n=== Comenzile tale ===');
orderManager.getOrders().forEach((order, index) => {
    console.log(`${index + 1}. ${order.getDescription()} - ${order.getCost()} lei`);
});
console.log('\nMultumim pentru vizita!');
