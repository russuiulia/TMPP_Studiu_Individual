```
npm i
cd src
npx tsc
node index.js
```

# Studiu Individual
## Aplicație pentru cafenele

Această aplicație folosește 5 șabloane diferite pentru a ajuta o cafenea să efectueze comenzi pentru diferite băuturi:

1. Factory Pattern – Crearea băuturilor (Creațional)

*src/factory/BeverageFactory.ts*

Separă logica de creare a obiectelor Coffee și Tea de restul aplicației. Permite crearea de băuturi în funcție de tipul ales de utilizator, fără ca partea principală a aplicației (index.ts) să cunoască detalii despre clasele concrete.

2. Singleton Pattern – Gestionarea comenzilor (Creațional)

*src/singleton/OrderManager.ts*

Asigură că există o singură instanță globală de OrderManager care reține comenzile și permite notificarea observatorilor. Previne conflictele în gestionarea comenzilor multiple.

3. Decorator Pattern – Adăugarea de toppinguri (lapte, zahăr) (Structural)

*src/decorators/MilkDecorator.ts, SugarDecorator.ts*

Permite adăugarea dinamică de funcționalități (toppinguri) la o băutură fără a modifica clasele de bază. Fiecare topping este o "decorare" a băuturii inițiale.

4. Observer Pattern – Notificarea la adăugarea comenzilor (de Comportament)

*src/observer/OrderObserver.ts și în OrderManager*

Permite atașarea de observatori (ex: funcția logNewOrder) care sunt notificați automat când se plasează o comandă nouă. Este util pentru a extinde comportamentul aplicației fără a o modifica (ex: trimiterea unui email, logare, etc.).

5. Strategy Pattern – Calculul prețului în funcție de context (de Comportament)

*src/strategy/PricingStrategy.ts*

Permite folosirea diferitelor metode de calcul al prețului (ex: preț normal vs. reducere Happy Hour) fără a modifica logica de comandă. Se pot adăuga strategii noi fără a afecta codul existent.