export default specials = [
    {
        day: "Sunday"
    },
    {
        day: "Monday",
        title: "Beer & Burger Night",
        icons: ["fluent-emoji:clinking-beer-mugs", "noto:hamburger"],
        deals: [
            "All burgers $7.99",
            "All draft beer $3"
        ],
        buttons: [
            {
                id: "burgers",
                text: "View Burgers",
                link: "/food?filter=sandwiches"
            }, {
                id: "beers",
                text: "View Beers",
                link: "/drinks?filter=beer"
            },
        ]
    },
    {
        day: "Tuesday",
        title: "Taco Tuesday",
        icons: ["emojione:taco"],
        description: "Beef or Chicken tacos served in flour tortillas with fresh ingredients, salsa & sour cream.",
        deals: [
            "Tacos $3 each",
        ],
        buttons: []
    },
    {
        day: "Wednesday",
        title: "Wine Wednesday",
        icons: ["noto-v1:wine-glass"],
        description: "Also, ask the bartender about the Top Shelf Wednesday Wine Special.",
        deals: [
            "House wine $5 / glass",
            "House bottles 50% off"
        ],
        buttons: [{
            id: "wines",
            text: "View Wines",
            link: "/drinks?filter=wine"
        },]
    },
    {
        day: "Thursday",
        title: "Industry Night",
        icons: ["noto:yellow-heart"],
        description: "Texas Fries, Tenders & Fries, Fried Pickles.",
        deals: [
            "$5 select appetizers",
            "All draft beer $3"
        ],
        buttons: [{
            id: "beers",
            text: "View Beers",
            link: "/drinks?filter=beer"
        },]
    },
    {
        day: "Friday",
        title: "Fireball Friday",
        icons: ["noto:fire"],
        description: "All shots of house liquor, fireball, and jagermeister, just $5 each.",
        deals: [
            "House shots $5",
        ],
        buttons: []
    },
    {
        day: "Saturday",
        title: "Signature Saturday",
        icons: ["fluent-emoji:tropical-drink"],
        description: "",
        deals: [
            "Signature Cocktails $9",
        ],
        buttons: [{
            id: "cocktails",
            text: "View Cocktails",
            link: "/drinks?filter=cocktails"
        },]
    },
];