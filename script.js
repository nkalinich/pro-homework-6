// period = prompt("Winter or Summer?");
// category = prompt("Vegetables or fruits?");
// product = prompt("Cabbage, avocado or tomato?");
// product = prompt("Grapes, raspberry or coconut?");
// count = prompt("Enter count");

// debugger;

vegetables = ["cabbage","avocado","tomato"];
fruits = ["grapes","raspberry","coconut"];

priceOfVegetables = [8,30,10];
priceOfFruits = [20,25,50];

period = "";
category = "";
product = "";
img = "";
sum = 0;


do{
    period = prompt("Winter or summer?").replaceAll(" ", "").toLowerCase();
} while(period !== "winter" && period !== "summer");

console.log(period);

do{
    category = prompt("Vegetables or fruits?").replaceAll(" ", "").toLowerCase();
} while(category !== "vegetables" && category !== "fruits");

console.log(category);
    
    if(category === "vegetables") {
        
        do{
            product = prompt("Cabbage, avocado or tomato?").replaceAll(" ", "").toLowerCase();
        } while(product !== vegetables[0] && product !== vegetables[1] && product !== vegetables[2]);

            if(product === vegetables[0]) {
                img = "vegetables/cabbage.svg";
                sum += priceOfVegetables[0];
            } 
            else if(product === vegetables[1]) {
                img = "vegetables/avocado.svg";
                sum += priceOfVegetables[1];
            } 
            else if(product === vegetables[2]) {
                img = "vegetables/tomato.svg";
                sum += priceOfVegetables[2];
            }
    } 
    else if(category === "fruits") {
        do{
            product = prompt("Grapes, raspberry or coconut?").replaceAll(" ", "").toLowerCase();
        } while(product !== "grapes" && product !== "raspberry" && product !== "coconut");

            if(product === fruits[0]) {
                img = "fruits/grapes.svg";
                sum += priceOfFruits[0];
            } 
            else if(product === fruits[1]) {
                img = "fruits/raspberry.svg";
                sum += priceOfFruits[1];
            } 
            else if(product === fruits[2]) {
                img = "fruits/coconut.svg";
                sum += priceOfFruits[2];
            }
    }
    
console.log(product);
console.log(sum);

do{
    count = prompt("Enter count").replaceAll(" ", "");
} while(count >= 1 && isNaN(count));

console.log(count);

total = count * sum;

console.log(total);

if (period === "winter") {
        total *= 2;
} 
else if (period === "summer") {
        total *= 0.8;
}

console.log(total.toFixed(2));

document.write(`
    <div class="product" align="center"> 
        <img src=${img} width="100" height="100">
        <p>Selected product: <b>${product}</b></p>
        <p>Count: <b>${count}</b></p>
        <p>Selected period: <b>${period}</b></p>
        <p>Selected category: <b>${category}</b></p>
        <p>Final sum: <b>${total.toFixed(2)} UAH</b></p>
    </div>
`)