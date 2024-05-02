class MenuItem {
    constructor(name, price, description, tags, url) {
        this.name = name;
        this.price = this.formatPrice(price);
        this.desc = description || null;
        this.tags = tags || null;
        this.image_URL = url || null;
    }

    formatPrice(value) {
        if (!value) { return null }

        value.toString().replace('$', '');

        if (isNaN(value)) { return value; }
        else if (!isNaN(value)) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(value).replace(/\D00(?=\D*$)/, '');
        }

        return null;
    }
}

const MENUITEMS = {
    food: {
        starters: [
            new MenuItem('Fresh Popcorn w/ Smoked Paprika', 2, '', ['vegetarian', 'vegan']),
            new MenuItem('Hummus & Pita Chips', 6, null, ['vegetarian', 'vegan']),
            new MenuItem('Sesame Terriyaki Mixed Nuts', 7, null, ['vegan']),
            new MenuItem('Chip Basket', 6, 'Tortilla chips with salsa & queso', ['vegetarian', 'vegan']),
            new MenuItem('Mediterranean Spiced Olives', 5, 'Spicy olives w/lemon & orange zest'),
            new MenuItem('Fried Mushrooms', 9, ' Hand-breaded garden fresh mushrooms fried golden w/ side of honey mustard.', ['vegetarian', 'vegan']),
            new MenuItem('Fried Pickels', 7, 'Fried to golden perfection with side of ranch'),
            new MenuItem('Fried Green Tomatoes', 7, 'Fried to golden perfection w/ side of ranch', ['vegetarian', 'vegan']),
            new MenuItem('Buffalo Chicken Quesadilla', 12, 'Cheese quesadilla with chicken, onions & jalapeños w/ a drizzle of buffalo sauce'),
            new MenuItem('Southwest Egg Rolls', 12, '4 crispy chicken egg rolls stuffed w/cheese, corn & black beans w/ side of ranch'),],
        mini: [
            new MenuItem('Sliders ', 8, '2 sliders; chicken or beef, w/ 1 side'),
            new MenuItem('Chicken Tenders', 6, '4 crispy tenders w/ 1 side. Side of honey mustard or ranch'),
            new MenuItem('Grilled Cheese', 6, 'Made with cheddar & american cheese on toasted sourdough w/ 1 side', ['vegetarian']),
        ],
        sandwiches: [
            new MenuItem('Classic Burger', 13, 'Lettuce, tomato, onion, pickles, choice of cheese; add bacon $1.5'),
            new MenuItem('Pub Burger ', 15, ' Grilled Angus beef, applewood bacon, jalapeños, topped with beer cheese', ['hot']),
            new MenuItem('Bourbon Burger ', 15, ' Bourbon glazed burger with applewood bacon, grilled onions, and choice of cheese'),
            new MenuItem('Creekside Fish Sandwich ', 16, ' 2pc of fried tavern-style cod filets on a brioche bun w/ pub sauce, lettuce & tomato', ['pescatarian']),
            new MenuItem('Creekside Chicken Sandwich ', 14, ' Golden fried chicken breast with bang-bang sauce and fresh slaw, stacked in a brioche bun'),
        ],
        entrees: [
            new MenuItem('Ribeye Dinner', 26, ' 10oz Ribeye steak cooked to perfection w/ 2 sides'),
            new MenuItem('Alaskan Salmon Dinner', 16, ' 8 oz. Alaskan salmon, blackened or grilled, w/ 2 sides', ['pescatarian']),
            new MenuItem('Chicken Breast Dinner', 16, ' 6-ounce seasoned chicken breast, grilled and fried, w/ 2 sides '),
            new MenuItem('Fish & Chips ', 16, '3 tavern-style cod fillets with coleslaw, hush puppies & fries', ['pescatarian']),
            new MenuItem('Shrimp & Grits ', 15, 'A bed of southern-style cheddar cheese grits topped w/ blackened shrimp & applewood bacon', ['pescatarian']),
            new MenuItem('Taco Trio ', 15, '3 tacos - Beef or chicken: topped with lettuce, tomato & cheese | OR Fish: fried cod topped w/ coleslaw & bang-bang sauce.', ['pescatarian']),
        ],
        desserts: [
            new MenuItem('Tiramisu', 3, ' Soft, creamy, mini tiramisu cake', ['vegetarian']),
            new MenuItem('Red Velvet Cake', 3, ' Soft, fluffy, mini red velvet cake with cream', ['vegetarian']),
            new MenuItem('Cannoli', 3, 'A deep-fried & chilled pastry filled with sweetened and flavored ricotta cheese', ['vegetarian']),
            new MenuItem('Churros with Ice Cream', 6, ' Two cinnamon sugar churros with vanilla ice cream', ['vegetarian']),
        ],
        sides: [
            new MenuItem('Fries', 3, 'Straight, seasoned, cripsy & hot', ['vegetarian', 'vegan']),
            new MenuItem('Green Beans', 3, 'Cooked with applewood bacon and sauteed onion'),
            new MenuItem('Mashed Potatoes', 3, 'Hot mashed potatoes made with sour cream and garlic', ['vegetarian', 'vegan']),
            new MenuItem('Coleslaw', 3, 'Cabbage and onion in a creamy mayo & honey sauce', ['vegetarian']),
            new MenuItem('Mac & Cheese', 4, 'Creamy Country-style', ['vegetarian']),
            new MenuItem('Tater Tots', 3, 'Crispy & hot tater barrels', ['vegetarian', 'vegan']),
            new MenuItem('Onion Rings', 3, 'Hot & crispy fried onion rings', ['vegetarian', 'vegan']),
            new MenuItem('Side Salad', 6, 'House or Caesar. Add chicken $5 / Add salmon $7', ['vegetarian']),
        ]
    },
    drinks: {
        fountain: [
            new MenuItem('', null, null, null, '/img/drinks/fountain/pepsi.webp'),
            new MenuItem('', null, null, null, '/img/drinks/fountain/starry.jpg'),
            new MenuItem('', null, null, null, '/img/drinks/fountain/mtn-dew.webp'),
            new MenuItem('', null, null, null, '/img/drinks/fountain/mug.webp'),
            new MenuItem('', null, null, null, '/img/drinks/fountain/tropicana.webp'),
            new MenuItem('', null, null, null, '/img/drinks/brands/royal.png'),
            new MenuItem('Water', 'Free'),
        ],
        beer: {
            "bottles & seltzers": [
                new MenuItem("Bud Light", 4),
                new MenuItem("Mich Ultra", 4),
                new MenuItem("Miller Lite", 4),
                new MenuItem("Coors Light", 4),
                new MenuItem("Budweiser", 4),
                new MenuItem("Blue Moon", 4),
                new MenuItem("Stella Artois", 4.5),
                new MenuItem("Heineken", 5.25),
                new MenuItem("Heineken Zero", 5.25),
                new MenuItem("Corona Extra", 5.25),
                new MenuItem("Sam Adams Boston", 4.25),
                new MenuItem("Lagunitas IPA", 5.25),
                new MenuItem("Yazoo Hefeweizen", null),
                new MenuItem("Yuengling", 3.75),
                new MenuItem("Truly Wild Berry", 4.5, "Seltzer", null, ''),
                new MenuItem("High Noon Peach", 4, "Seltzer", null, ''),
                new MenuItem("Bottle Bucket", "$17 / 21", "5 domestic bottles for $17, or 5 mixed bottles for $21", null, '/img/drinks/bottles/bottles_domestic.webp'),
            ],
            draft: [
                new MenuItem("Michelob Ultra", 5, null, null, '/img/drinks/brands/logo-ultra.webp'),
                new MenuItem("Sam Adams Seasonal", 7, null, null, '/img/drinks/brands/logo-sam.webp'),
                new MenuItem("Yazoo Hefeweizen ", 5, null, null, '/img/drinks/brands/yazoo.jpeg'),
                new MenuItem("Hutton & Smith", 7, "The Good Schist", null, '/img/drinks/brands/logo-hutton.webp'),
                new MenuItem("Terrapin Luau", 7, "IPA | Passion Fruit & Guava", null, '/img/drinks/brands/logo-terrapin.webp'),
                new MenuItem("Chestnut St", 6, "Brown Ale", null, '/img/drinks/brands/logo-chatt.webp'),
            ]
        },
        wine: {
            "House": [
                new MenuItem("Robert Mondavi", null, 'Cabernet Sauvignon'),
                new MenuItem("Robert Mondavi", null, 'Pinot Noir'),
                new MenuItem("Clos Du Bois", null, 'Merlot'),
                new MenuItem("Robert Mondavi", null, 'Chardonnay'),
                new MenuItem("Seaglass", null, 'Pinot Grigio'),
                new MenuItem("Canyon Road", null, 'White Zinfindel'),
                new MenuItem("Canyon Road", null, 'Moscato'),
                new MenuItem("Line 39", null, 'Sauvignon Blanc'),
            ],
            "Top Shelf Red": [
                new MenuItem("1000 Stories", "$10 / 13 / 38", "Red Zinfindel - Dry Creek, California"),
                new MenuItem("Alamos", "$8.5 / 11.5 / 32", "Malbec - Mendoza, Argentina"),
                new MenuItem("Benziger", "$10 / 13 / 38", "Cabernet Sauvignon - California"),
                new MenuItem("Coppola", "$10 / 13 / 38", "Cabernet Sauvignon - California"),
                new MenuItem("Cupcake Sig.", "$13 / 16 / 33", "Sweet Red"),
                new MenuItem("Crusher", "$9 / 12 / 34", "Cabernet Sauvignon - Napa, California"),
                new MenuItem("Dark Horse", "$8.5 / 11.5 / 32", "Merlot - California"),
                new MenuItem("Mark West", "$7.5 / 9.5 / 28", "Pinot Noir - California"),
            ],
            "Top Shelf White": [
                new MenuItem("William Hill", "$9 / 12 / 34", "Chardonnay - Central Coast, California"),
                new MenuItem("Ecco Domani", "$8 / 11 / 30", "Pinot Grigio - Venezi, Italy"),
                new MenuItem("Casal Garcia", "$7.5 / 10.5 / 22", "Rosé - Vinho Verde, Portugal"),
                new MenuItem("Peter Mertes", "", "Reisling"),
                new MenuItem("Noble Vines", "8", "Sauvignon Blanc"),
                new MenuItem("Stoneleigh", "", "Sauvignon Blanc"),
            ],
            "Small Bottles & Champagne": [
                new MenuItem('Barefoot', null, 'Pinot Grigio'),
                new MenuItem('Lamarca', 8, 'Prosecco'),
                new MenuItem('Ruffino', 8, 'Rosé'),
                new MenuItem('Clos Du Bois', 7, 'Chardonnay'),
                new MenuItem('Kim Crawford', 4, 'Rosé'),
                new MenuItem('Winemaker', 7, 'Brut'),
                new MenuItem('Ste Michelle', "$9 / 25", 'Champagne'),
                new MenuItem('Duc Del Valmer', null, 'Brut'),
            ]
        },
        cocktails: [
            new MenuItem("Captain Charlotte", 10, "Captain Morgan Spiced Rum, Orange & Pineapple Juice, Splash of Grenadine", ['sweet'], '/img/drinks/cocktails/the_charlotte.webp'),
            new MenuItem("Chattanooga Cherry Mule", 12, "Chattanooga Casket Whiskey, cherries, lime, ginger beer", null, '/img/drinks/cocktails/cherry-mule.webp'),
            new MenuItem("Blue Spirit", 11, "Vodka, Rum, Gin, Blue Curacao, Sour Mix, Sierra Mist", ['sweet'], '/img/drinks/cocktails/blue_spirit.webp'),
            new MenuItem("Strawberry Starlight", 11, "Ketel One Citroen, Lemonade, Strawberries & Puree, Splash of sour, Starry Lemon-Lime soda", ['sweet'], '/img/drinks/cocktails/sberrylemonade.webp'),
            new MenuItem("Tito's Tidal Wave", 11, "Tito's Vodka, Malibu Coconut Rum, Blue Curacao, Pineapple, Sour Mix, Sierra Mist", ['sweet'], '/img/drinks/cocktails/tidal_wave.webp'),
            new MenuItem("Melon Ball Refresher", 11, "Ketel One Vodka, Midori Melon Liqueur, pineapple Juice, lemon juice, sierra mist", ['sweet', 'sour'], '/img/drinks/cocktails/melonball.webp'),
            new MenuItem("Filty Bloody Mary", 12, "St. George's Green Chile vodka, Tito's Filthy Bloody Mary Mix, worcestershire, lime juice", ['hot'], '/img/drinks/cocktails/bloody.webp'),
            new MenuItem("A Rose In The Evening", 11, "Bacardi Superior, lemon juice, peach syrup, strawberry puree topped with kim crawford rose", null, '/img/drinks/cocktails/rose.webp'),
            new MenuItem("Blueberry Negroni", 10.5, "Tanqueray Gin, Campari, Sweet Vermouth, blueberries & blueberry simple syrup", ['sweet', 'strong'], '/img/drinks/cocktails/negroni-blueberry.webp'),
            new MenuItem("Brown Derby", 11, "Maker's Mark, grapefruit juice, honey syrup", ['strong'], '/img/drinks/cocktails/derby.webp'),
            new MenuItem("Bombay Bramble", 10.5, "Bombay Sapphire Gin, Chambord Black Raspberry Liqueur, Lemon, Simple Syrup", ['sweet'], '/img/drinks/cocktails/bramble-new.webp'),
            new MenuItem("Creekside Collins", 11, "Hendrick's Gin, lemon or lime juice, sugar, soda", ['sweet', 'sour'], '/img/drinks/cocktails/collins.webp'),
            new MenuItem("Greedy Godfather", 12, "Macallan 12, Amaretto, twist", ['strong'], '/img/drinks/cocktails/godfather.webp'),
            new MenuItem("Gentleman Jefferson", 12, "Jefferson's Reserve Bourbon, Bitters, Orange & Cherry", ['strong'], '/img/drinks/cocktails/old_fashioned.webp'),
            new MenuItem("Royal Pain", 11, "Crown Royal Peach Whisky, Amaretto, Chambord, Peach Schnapps, Pineapple", ['sweet', 'strong'], '/img/drinks/cocktails/royal.webp'),
            new MenuItem("Milky Way Martini", 11, "Ciroc Vodka, Kahlua, Bailey's Irish Creme, Chocolate Syrup, Half & Half", ['sweet'], '/img/drinks/cocktails/chocolate_martini.webp'),
            new MenuItem("Bee's Knees", 11, "Tanqueray Gin, Lemon, honey", ['sweet', 'sour', 'strong'], '/img/drinks/cocktails/bees.webp'),
            new MenuItem("Ward Eight", 11, "Bulleit Rye, Orange, Lemon, grenadine, cherry", ['sweet', 'strong'], '/img/drinks/cocktails/ward.webp'),
            new MenuItem("Cupid's Cosmo", 10, "Pink Whitney Vodka, Cranberry, grenadine, Splash of Sour", ['sweet'], '/img/drinks/cocktails/pink_cosmo.webp'),
            new MenuItem("Grand Sidecar", 11, "Grand Mariner Cognac & Orange Liqueur, Lemon, sugar", ['sweet'], '/img/drinks/cocktails/sidecar.webp'),
            new MenuItem("Spicy Margarita", 12, "Patron Silver, Triple Sec, Lime & Orange juice, agave nectar, jalepenos", ['hot', 'strong'], '/img/drinks/cocktails/marg.webp'),
            new MenuItem("Cadillac Margarita", 10, "1800 Silver Tequila, Grand Marnier, Cointreau, Lime, Salt", ['sour', 'strong'], '/img/drinks/cocktails/marg.webp'),
            new MenuItem("Whip Shot", 6, "Try any of our vodka-infused whipped cream! Try it with Absolut Vanilla or any desert cocktail!", ['sweet'], '/img/drinks/cocktails/whipped-shot.webp'),
        ]
    }
}

export default MENUITEMS;