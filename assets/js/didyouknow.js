var facts = [
  "Coffee is consumed in such great quantities, it is the world’s 2nd largest traded commodity, surpassed only by crude oil. It is our most beloved beverage after water. It’s worth well over $100 billion worldwide.",
  "Brazil couldn’t afford to send its athletes to Los Angeles for the 1932 Olympics, so the government sent them in a ship full of coffee which was sold on the way to finance their trip.",
  "The word espresso comes from Italian and means “expressed” or “forced out”. Espresso is made by forcing very hot water under high pressure through finely ground, compacted coffee.",
  "Coffee beans grow on a bush. They are actually the pit of a berry, which makes them a fruit. There are two main varieties of beans: green and red. Red beans have a nicer smell and are less acidic. They are used to produce lighter coffees. The longer that coffee beans have been roasted, the healthier they are. Decaffeinated coffee comes from a chemical process where the caffeine is taken out of the beans. The caffeine is then often sold to Coca-Cola, a major buyer.",
  "Beethoven was such an ardent coffee lover that he’d count 60 beans per cup before making his brew.",
  "“Kopi Luwak” is the most expensive coffee in the world. It comes from Indonesia and is made from beans digested from the Asian Palm Civet. In other words, it comes from cat poop.  It sells for €350 and up per kilo!",
  "Americans on average spend $1,092 a year on coffee. That’s around $20 a week. That is also close to the price of the newest iPhone. Young people generally spend more on coffee than older people.",
  "The earliest term for the drink of coffee was the Arabic word “qahwah”, which actually referred to a type of wine. The Ottoman Turks then used the term “kahve”, which was followed by the Dutch word “koffie”, from which the English name was derived in 1582.",
  "The name Cappuccino was inspired by monks.",
  "It takes a day to fully eliminate caffeine from your system.",
  "You would need about 37 gallons of water to one grow coffee bean.",
  "It is believed that the coffee was discovered by a goat herder who noticed that goats became extremely energetic after eating certain berries."

];

function newFact() {
  var randomNumber = Math.floor(Math.random() * facts.length);
  document.getElementById("coffeeQuote").innerHTML = facts[randomNumber];
}
