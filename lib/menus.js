// Menu hub + per-menu content: the STATIC FALLBACK for the Google Sheet
// ("Duke's Seafood: Website Menus (LIVE)"). The site normally reads the sheet;
// this copy only renders if the sheet read fails, so it has to stay complete.
//
// GENERATED from migration/menus/*.csv by scripts/menus-from-csv.py. Edit the
// CSVs (which are also what gets pasted into the sheet tabs), then regenerate.
// Source: live dukesseafood.com menus, re-pulled November 11, 2026.

export const MENU_HUB = [
  {
    "slug": "lunch-dinner-menu",
    "name": "Lunch & Dinner",
    "blurb": "Wild seafood, grass-fed burgers, and award-winning chowders. Served daily, 11am to close."
  },
  {
    "slug": "happy-hour-menu",
    "name": "Happy Hour",
    "blurb": "Full-size portions, better prices. 3-6pm and 9pm-close, seven days a week."
  },
  {
    "slug": "drinks-menu",
    "name": "Drinks",
    "blurb": "Duketails, Northwest beer on draft, and a wine list heavy on Washington boutique wineries."
  },
  {
    "slug": "gluten-free-menu",
    "name": "Gluten Free",
    "blurb": "Every item Duke's marks GF on its current menus."
  },
  {
    "slug": "kids-menu",
    "name": "Kids",
    "blurb": "Smaller plates for younger guests, served all day."
  },
  {
    "slug": "dessert-menu",
    "name": "Dessert",
    "blurb": "Marionberry pie, Peerless Pier Pie, and Lopez Island Creamery ice cream."
  },
  {
    "slug": "specials",
    "name": "Chef Bill's Specials",
    "blurb": "Chef Bill's current specials, plus weekday lunch specials."
  }
];

export const MENUS = {
  "lunch-dinner-menu": {
    "name": "Lunch & Dinner",
    "note": "Served daily, 11am to close. Available at all six Duke's Seafood locations.",
    "groups": [
      {
        "title": "Appeteasers & Shared Plates",
        "items": [
          {
            "name": "Clam Lover's Steamer Clams",
            "price": "$21.90",
            "desc": "Steamer clams with butter, garlic, white wine, fresh basil, and rosemary bread."
          },
          {
            "name": "Coco Loco Prawns",
            "price": "$19.90",
            "desc": "Coconut encrusted Wild Mexican Prawns with homemade sweet chili sauce."
          },
          {
            "name": "Dungeness Crab \"Un\"Cake",
            "price": "$27.90",
            "desc": "Lots of Dungeness Crab, cake not so much, with zesty lime aioli."
          },
          {
            "name": "Finger Lickin' Chicken Strips",
            "price": "$17.90",
            "desc": "Organic, non-GMO, free-range chicken breast, buttermilk marinated with honey mustard."
          },
          {
            "name": "Dungeness Crab Dip",
            "price": "$24.90",
            "desc": "Havarti, Boursin cheese, roasted garlic, spinach, Walla Walla sweet onions & dipping chips.",
            "gf": true
          },
          {
            "name": "Heirloom Masa Dusted Calamari",
            "price": "$19.90",
            "desc": "Flash fried and buttermilk marinated, served with tequila lime aioli and hot honey sauces."
          },
          {
            "name": "Lobster Risotto Bites",
            "price": "$22.90",
            "desc": "Arborio rice and imported cheeses, flash fried, served with tomato basil cream and dressed arugula."
          },
          {
            "name": "Wildly Delicious Alaska Salmon Sliders",
            "price": "$19.90",
            "desc": "Rosemary bread, pesto, sliced tomato."
          },
          {
            "name": "Wondrous Wild Salmon Bites",
            "price": "$22.90",
            "desc": "Bite-sized and flash fried with wasabi and chipotle aioli for dipping."
          }
        ]
      },
      {
        "title": "Tiny Bites",
        "items": [
          {
            "name": "Chilled Prawn Cocktail Veracruz",
            "price": "$11.90",
            "desc": "",
            "gf": true
          },
          {
            "name": "Dungeness Crabby Deviled Egg",
            "price": "$8.90",
            "desc": "Cage-free local egg with fresh Dungeness Crab.",
            "gf": true
          },
          {
            "name": "Maple Bacon Seafood Bites",
            "price": "$9.90",
            "desc": "Bacon-wrapped Wild Mexican Prawn & Alaska Weathervane Scallop with herb maple butter sauce.",
            "gf": true
          },
          {
            "name": "Smoked Salmon Deviled Egg",
            "price": "$8.90",
            "desc": "Smoked Wild Alaska Salmon, fresh dill, capers.",
            "gf": true
          }
        ]
      },
      {
        "title": "Champion Chowders",
        "items": [
          {
            "name": "Award Winning Clam Chowder",
            "price": "$16.90/$21.90/$26.90",
            "desc": "All natural, New England style with nitrite-free bacon, creamy and herby.",
            "gf": true
          },
          {
            "name": "Dinghy Sized Chowder Samplers",
            "price": "$5.40/$9.90/$14.90",
            "desc": "",
            "gf": true
          },
          {
            "name": "Lobster Mobster Pernod Chowder",
            "price": "$16.90/$21.90/$26.90",
            "desc": "Nova Scotia Lobster meat, Argentinean Red Shrimp, sweet potatoes.",
            "gf": true
          },
          {
            "name": "North By Northwest Seafood Chowder",
            "price": "$16.90/$21.90/$26.90",
            "desc": "Wild Alaska Salmon, Halibut & Cod, Steamer Clams - cioppino style.",
            "gf": true
          },
          {
            "name": "Wild Alaska Smoked Salmon Chowder",
            "price": "$14.90/$19.90",
            "desc": "Duke's custom smoked Wild Alaska Coho Salmon with dill, fresh herbs, baby red potatoes.",
            "gf": true
          },
          {
            "name": "Vegan Veggie Stew",
            "price": "$24.90",
            "desc": "Sauteed vegetables, caramelized peppers and onions, organic roasted potatoes, garlic, herbs in tomato broth. Vegan and gluten free.",
            "gf": true
          }
        ]
      },
      {
        "title": "Sumptuous Salads & Seafood Salads",
        "items": [
          {
            "name": "\"Un\"Chopped Seafood Salad",
            "price": "$29.90/$36.90",
            "desc": "Seared scallops and prawns with cashews, avocado, tomato, feta, garlic-basil-lemon-olive oil dressing."
          },
          {
            "name": "All Hail Caesar Salad",
            "price": "$16.90/$21.90",
            "desc": "Romaine, Parmesan/Asiago, Caesar dressing, garlic sourdough croutons."
          },
          {
            "name": "Cosmic Wild Mixed Greens Salad",
            "price": "$16.90/$21.90",
            "desc": "Organic greens, Rogue Creamery bleu cheese, Cosmic Crisp apples, candied pecans, tarragon vinaigrette."
          },
          {
            "name": "Dungeness Crab & Prawn Louie Louie",
            "price": "$36.90",
            "desc": ""
          },
          {
            "name": "Sweet Caper Spinach Salad",
            "price": "$16.90/$21.90",
            "desc": "Baby spinach, sweet caper vinaigrette, bacon, almonds, egg, tomatoes, Parmesan/Asiago."
          },
          {
            "name": "Wild & Bleu Blackened Salmon Salad",
            "price": "$27.90/$36.90",
            "desc": "Blackened Wild Salmon, blueberries, bleu cheese, candied pecans, greens, bleu cheese dressing."
          }
        ]
      },
      {
        "title": "Salad Add On",
        "items": [
          {
            "name": "Crab \"Un\"Cake",
            "price": "$21.90",
            "desc": ""
          },
          {
            "name": "Fresh Dungeness Crab",
            "price": "$18.90",
            "desc": ""
          },
          {
            "name": "Nova Scotia Lobster",
            "price": "$14.90",
            "desc": ""
          },
          {
            "name": "Organic Chicken",
            "price": "$12.90",
            "desc": ""
          },
          {
            "name": "Prawn & Scallop Skewer",
            "price": "$14.90",
            "desc": ""
          },
          {
            "name": "Wild Alaska Salmon",
            "price": "$16.90",
            "desc": ""
          }
        ]
      },
      {
        "title": "Fish & Chips",
        "items": [
          {
            "name": "Oh My Cod! Fish & Chips",
            "price": "$38.90/$29.90",
            "desc": "Panko breaded Alaska Pacific Cod with Mac & Jack's beer and homemade tartar."
          }
        ]
      },
      {
        "title": "Famous Fish Tacos",
        "items": [
          {
            "name": "Rockin' Rockfish Tacos",
            "price": "$38.90/$29.90",
            "desc": "Wild Rockfish, Thai chili marinade, cheddar, mango chutney, tequila lime aioli, cucumber pico de gallo."
          },
          {
            "name": "Unforgettable Sea Cod Tacos",
            "price": "$38.90/$29.90",
            "desc": "Blackened Pacific Cod with feta, tequila lime aioli, avocado, Napa cabbage, cucumber pico de gallo."
          }
        ]
      },
      {
        "title": "Combo Wombos",
        "items": [
          {
            "name": "Chowder & Salad Combo",
            "price": "$29.90",
            "desc": "Choose a starter Cosmic Wild Mixed Greens, Sweet Caper Spinach Salad, or All Hail Caesar Salad, with a cup of Award-Winning Clam Chowder."
          },
          {
            "name": "Crab Cake Sandwich Combo",
            "price": "$41.90",
            "desc": "Dungeness Crab \"Un\"Cake on locally made bun, sweet potato fries, Lobster Mobster Chowder."
          },
          {
            "name": "Fish & Chips Combo",
            "price": "$46.90/$38.90",
            "desc": "Alaska Pacific Cod, cup of Award-Winning Clam Chowder, homemade tartar."
          },
          {
            "name": "Rockfish Taco Combo",
            "price": "$38.90",
            "desc": "One Alaska Wild Rockfish Taco, cup of Award-Winning Clam Chowder."
          },
          {
            "name": "Sea Cod Taco Combo",
            "price": "$38.90",
            "desc": "One Unforgettable Sea Cod Taco, cup of Award-Winning Clam Chowder."
          }
        ]
      },
      {
        "title": "Wild Succulent Salmon",
        "items": [
          {
            "name": "Colonel Mustard Wild Salmon",
            "price": "$45.90",
            "desc": "Pan seared Wild Salmon with herbs and Dijon cream sauce."
          },
          {
            "name": "Duke's Favorite Pasta with Wild Salmon",
            "price": "$45.90",
            "desc": "Lightly blackened Wild Alaska Salmon on tagliatelle pasta with basil, garlic cream, caramelized bell peppers and onions."
          },
          {
            "name": "Off the Hook Stuffed Wild Salmon",
            "price": "$48.90",
            "desc": "Stuffed with Crab, Prawns, cheeses, pesto, lemon beurre blanc."
          },
          {
            "name": "Tantalizing Silky Pan Seared Salmon",
            "price": "$46.90",
            "desc": "Ginger and basil encrusted, pan seared with herbs and Grand Marnier balsamic beurre blanc."
          }
        ]
      },
      {
        "title": "Heavenly Halibut",
        "items": [
          {
            "name": "Crab & Prawn Stuffed Halibut",
            "price": "$51.90",
            "desc": "Halibut stuffed with Crab, Prawns, cheeses, pesto, lemon beurre blanc."
          },
          {
            "name": "It's So Dreamy Parmesan Halibut",
            "price": "$49.90",
            "desc": "Parmesan/Asiago encrusted fresh Kodiak Island Halibut with a lemon caper butter sauce."
          }
        ]
      },
      {
        "title": "Luxurious Lobster",
        "items": [
          {
            "name": "Crab Stuffed Cold Water Lobster Tail",
            "price": "$48.90",
            "desc": "Lobster tail stuffed with Crab, Prawns, cheeses."
          },
          {
            "name": "Lavish Lobster Roll",
            "price": "$38.90",
            "desc": "Tossed with creamy lemon mayo and a hint of Old Bay seasoning on butter grilled soft brioche roll."
          },
          {
            "name": "Lobster & Seafood Cavatappi Mac 'n Cheese",
            "price": "$42.90",
            "desc": "Lobster, Salmon, Halibut, Cod in creamy gruyere, parmesan and asiago sauce."
          }
        ]
      },
      {
        "title": "Wild Shellfish",
        "items": [
          {
            "name": "Crab \"Un\"Cakes",
            "price": "$52.90",
            "desc": "Dungeness Crab with lime aioli."
          },
          {
            "name": "Mixed Grill",
            "price": "$44.90",
            "desc": "Crab \"Un\"Cake, scallops & prawns."
          },
          {
            "name": "Stuffed Jumbo Prawns",
            "price": "$36.90",
            "desc": "Stuffed with Crab, Prawns, cheeses, pesto, lemon beurre blanc."
          }
        ]
      },
      {
        "title": "Grass Fed Burgers",
        "items": [
          {
            "name": "North of California Burger",
            "price": "$28.90",
            "desc": "Fresh avocado, nitrate-free bacon, Havarti cheese, bibb lettuce, onion, tomato, chipotle aioli."
          },
          {
            "name": "The Duke Cheeseburger",
            "price": "$24.90",
            "desc": "Tillamook extra sharp white cheddar, bibb lettuce, sliced tomato, onion, homemade mayo."
          }
        ]
      },
      {
        "title": "Gourmet Sandwiches",
        "items": [
          {
            "name": "Chipotle Wild Salmon Sandwich",
            "price": "$34.90",
            "desc": "Wild Salmon, bacon, avocado, tomato, chipotle aioli."
          },
          {
            "name": "Crab Cake Sandwich",
            "price": "$34.90",
            "desc": "Crab \"Un\"Cake, Havarti, bacon, chipotle aioli, avocado, tomato, bibb lettuce."
          },
          {
            "name": "Grilled Chicken Sandwich",
            "price": "$26.90",
            "desc": "Grilled chicken, bacon, avocado, tomato, mayo, cheddar and Havarti."
          }
        ]
      }
    ]
  },
  "happy-hour-menu": {
    "name": "Happy Hour",
    "note": "Happy hour runs 3-6pm and 9pm-close, seven days a week, in the dining room, bar, and on the deck.",
    "groups": [
      {
        "title": "In-House Infusions",
        "items": [
          {
            "name": "Cucumber Mojito",
            "price": "$3 OFF",
            "desc": "Cucumber-infused vodka, muddled mint and lime, splash of homemade sour and soda"
          },
          {
            "name": "Duke's Famous Bloody Mary",
            "price": "$3 OFF",
            "desc": "Vodka infused with garlic, onions, peppercorns, bell peppers, citrus, Demitri's seasoning, two jumbo prawns"
          }
        ]
      },
      {
        "title": "Must-Have Mules",
        "items": [
          {
            "name": "Sunny Slope Nectarine Mule",
            "price": "$3 OFF",
            "desc": "Nectarine vodka, fresh limes, basil, and ginger beer"
          },
          {
            "name": "Tito's Texas Mule",
            "price": "$3 OFF",
            "desc": "Tito's vodka with fresh limes and Cock & Bull Ginger Beer"
          }
        ]
      },
      {
        "title": "Marvelous Margs",
        "items": [
          {
            "name": "Blood Orange Margarita",
            "price": "$3 OFF",
            "desc": "Milagro Reposado tequila, Solerno liqueur, lime, orange, sour, red sugar, salted rim"
          },
          {
            "name": "Paloma Margarita",
            "price": "$3 OFF",
            "desc": "LALO Blanco tequila, sour, grapefruit liqueur, grapefruit juice, on the rocks"
          },
          {
            "name": "Perfecto Cristalino Margarita",
            "price": "$3 OFF",
            "desc": "Dobel Diamante Cristalino tequila, Cointreau, splash of homemade sour, major lime squeeze, salted rim, on the rocks"
          }
        ]
      },
      {
        "title": "Bourbon & Brown",
        "items": [
          {
            "name": "Duke's Kentucky Manhattan",
            "price": "$3 OFF",
            "desc": "Buffalo Trace bourbon stirred with Carpano Antica and Bigallet Amer, natural cherries, served 'up'"
          },
          {
            "name": "Elijah Craig Old Fashioned",
            "price": "$3 OFF",
            "desc": "Elijah Craig bourbon, Regan's orange bitters, oversized ice cube"
          },
          {
            "name": "Woodinville Whiskey Sour",
            "price": "$3 OFF",
            "desc": "Woodinville bourbon, toasted Applewood staves, homemade sour, raw egg white"
          }
        ]
      },
      {
        "title": "Classic Cocktails",
        "items": [
          {
            "name": "Not for Long Island Iced Tea",
            "price": "$3 OFF",
            "desc": "Vodka, rum, sweet tea vodka, lemons, lemonade, cola"
          },
          {
            "name": "Oh Mai Tai!",
            "price": "$3 OFF",
            "desc": "Rum, Cointreau, lime, pineapple, orange juice, Kraken Black Spiced Rum float"
          }
        ]
      },
      {
        "title": "Lively Libations",
        "items": [
          {
            "name": "Blueberry Lemon Drop",
            "price": "$3 OFF",
            "desc": "Blueberry vodka, lemon, Oregon blueberries, lemonade, sugared rim"
          },
          {
            "name": "Grapefruit Nirvana",
            "price": "$3 OFF",
            "desc": "Grapefruit vodka, agave nectar, muddled grapefruit, lemonade, half sugared rim"
          },
          {
            "name": "Refreshing Gin Splash",
            "price": "$3 OFF",
            "desc": "Kur Gin, Elderflower liqueur, Aperol, sour, orange rosemary syrup"
          },
          {
            "name": "The Duke & The King",
            "price": "$3 OFF",
            "desc": "Hendrick's gin, Elderflower liqueur, sour, basil, served 'up'"
          }
        ]
      },
      {
        "title": "Can't-Miss Martinis",
        "items": [
          {
            "name": "3 John's Martini",
            "price": "$3 OFF",
            "desc": "Citroen vodka, shaken and served 'up' with lemon twist"
          },
          {
            "name": "Seattle's Epic Espresso Martini",
            "price": "$3 OFF",
            "desc": "Do Epic Sh*t vodka, extra shaken with fresh cold brew, Browne Vanilla Bean Whiskey and Cantera Negra Cafe coffee liqueur"
          },
          {
            "name": "Tito's Classic Martini",
            "price": "$3 OFF",
            "desc": "Tito's vodka, wave of vermouth, served 'up'"
          }
        ]
      },
      {
        "title": "Bubbles",
        "items": [
          {
            "name": "Prosecco, LaMarca Split (187ml)",
            "price": "$2 OFF",
            "desc": ""
          },
          {
            "name": "Sparkling Rose, Lucien Albrecht",
            "price": "$2 OFF",
            "desc": ""
          },
          {
            "name": "Sparkling, Treveri Brut Flute",
            "price": "$2 OFF",
            "desc": ""
          }
        ]
      },
      {
        "title": "Wine by the Glass",
        "items": [
          {
            "name": "Wines by the Glass",
            "price": "$3 OFF",
            "desc": "Choose any of our current wines by the glass - 6 oz & 9 oz pours"
          }
        ]
      },
      {
        "title": "Appeteasers & Shared Plates",
        "items": [
          {
            "name": "Clam Lover's Steamer Clams",
            "price": "$3 OFF",
            "desc": "Steamer clams with butter, garlic, white wine, basil, rosemary bread"
          },
          {
            "name": "Coco Loco Prawns",
            "price": "$3 OFF",
            "desc": "Coconut-encrusted prawns with sweet chili sauce"
          },
          {
            "name": "Dungeness Crab \"Un\"Cake",
            "price": "$3 OFF",
            "desc": "Crab-heavy cake with zesty lime aioli"
          },
          {
            "name": "Dungeness Crab Dip",
            "price": "$3 OFF",
            "desc": "Havarti, Boursin, garlic, spinach, onions, served with chips",
            "gf": true
          },
          {
            "name": "Finger Lickin' Chicken Strips",
            "price": "$3 OFF",
            "desc": "Organic chicken breast, buttermilk marinated, with honey mustard"
          },
          {
            "name": "Heirloom Masa Dusted Calamari",
            "price": "$3 OFF",
            "desc": "Flash fried, buttermilk marinated, with tequila lime aioli and hot honey sauces"
          },
          {
            "name": "Lobster Risotto Bites",
            "price": "$3 OFF",
            "desc": "Lobster, arborio rice, cheeses, flash fried, with tomato basil cream and arugula"
          },
          {
            "name": "Wildly Delicious Alaska Salmon Sliders",
            "price": "$3 OFF",
            "desc": "Served on rosemary bread with basil pesto and tomato"
          },
          {
            "name": "Wondrous Wild Salmon Bites",
            "price": "$3 OFF",
            "desc": "Bite-sized and flash fried with wasabi and chipotle aioli for dipping"
          }
        ]
      },
      {
        "title": "Tiny Bites",
        "items": [
          {
            "name": "Chilled Prawn Cocktail Veracruz",
            "price": "$2 OFF",
            "desc": "",
            "gf": true
          },
          {
            "name": "Dungeness Crabby Deviled Egg",
            "price": "$2 OFF",
            "desc": "Cage-free egg with Dungeness Crab",
            "gf": true
          },
          {
            "name": "Maple Bacon Seafood Bites",
            "price": "$2 OFF",
            "desc": "Bacon-wrapped prawns and scallops with herb maple butter sauce",
            "gf": true
          },
          {
            "name": "Smoked Salmon Deviled Egg",
            "price": "$2 OFF",
            "desc": "Smoked Wild Alaska Salmon, fresh dill, capers",
            "gf": true
          }
        ]
      },
      {
        "title": "Champion Chowder",
        "items": [
          {
            "name": "Award Winning Clam Chowder",
            "price": "$3 OFF",
            "desc": "New England style with nitrite-free bacon, creamy and herby",
            "gf": true
          },
          {
            "name": "Chowder Loaded Fries",
            "price": "$8.90",
            "desc": ""
          }
        ]
      },
      {
        "title": "Sumptuous Salad",
        "items": [
          {
            "name": "All Hail Caesar Salad",
            "price": "$3 OFF",
            "desc": "Romaine, homemade croutons, Caesar dressing"
          }
        ]
      },
      {
        "title": "Grass Fed Burgers",
        "items": [
          {
            "name": "North of California Burger",
            "price": "$5 OFF",
            "desc": "Fresh avocado, nitrite-free bacon, Havarti cheese, bibb lettuce, onion, tomato, chipotle aioli"
          },
          {
            "name": "The Duke Cheeseburger",
            "price": "$5 OFF",
            "desc": "Grass-fed beef, cheddar, bibb lettuce, tomato, onion, mayo"
          }
        ]
      },
      {
        "title": "Tasty Sandwiches",
        "items": [
          {
            "name": "Savory Chipotle Wild Salmon Sandwich",
            "price": "$5 OFF",
            "desc": "Salmon, avocado, tomato, chipotle aioli, lettuce, bacon, rosemary bread"
          },
          {
            "name": "Screaming Good Grilled Chicken Sandwich",
            "price": "$5 OFF",
            "desc": "Grilled chicken, mayo, bacon, avocado, tomato, cheddar, Havarti, rosemary bread"
          },
          {
            "name": "Seattle's Best Crab Cake Sandwich",
            "price": "$5 OFF",
            "desc": "Crab \"Un\"Cake, Havarti, bacon, chipotle aioli, avocado, tomato, bibb lettuce"
          }
        ]
      }
    ]
  },
  "drinks-menu": {
    "name": "Drinks",
    "note": "Duketails, draft and bottled beer, and wines by the glass and bottle.",
    "groups": [
      {
        "title": "Duketails",
        "items": [
          {
            "name": "3 John's Martini",
            "price": "$17.90",
            "desc": "Citroen vodka, shaken and served 'up' with lemon twist"
          },
          {
            "name": "Blood Orange Margarita",
            "price": "$16.90",
            "desc": "Milagro Reposado tequila, Solerno Blood Orange liqueur, lime, orange, sour, red sugar, salted rim"
          },
          {
            "name": "Blueberry Lemon Drop",
            "price": "$15.90",
            "desc": "Blueberry vodka, lemon, Oregon blueberries, lemonade, sugared rim"
          },
          {
            "name": "Cucumber Mojito",
            "price": "$15.40",
            "desc": "Cucumber-infused vodka, mint, lime, homemade sour, soda, sugared rim"
          },
          {
            "name": "Duke's Famous Bloody Bloody Mary",
            "price": "$15.90",
            "desc": "Vodka infused with garlic, onions, peppercorns, bell peppers, lemons, limes, Demitri's seasoning, garnished with jumbo prawns"
          },
          {
            "name": "Duke's Kentucky Manhattan",
            "price": "$17.90",
            "desc": "Buffalo Trace bourbon stirred with Carpano Antica and Bigallet Amer, natural cherries, served 'up'"
          },
          {
            "name": "Elijah Craig Old Fashioned",
            "price": "$17.40",
            "desc": "Elijah Craig bourbon, Regan's orange bitters, oversized ice cube"
          },
          {
            "name": "Grapefruit Nirvana",
            "price": "$15.90",
            "desc": "Grapefruit vodka, agave nectar, muddled grapefruit, lemonade, half sugared rim"
          },
          {
            "name": "Not for Long Island Iced Tea",
            "price": "$16.40",
            "desc": "Vodka, rum, sweet tea vodka, lemons, lemonade, cola"
          },
          {
            "name": "Oh Mai Tai!",
            "price": "$15.90",
            "desc": "Rum, Cointreau, lime, pineapple, orange juice, Kraken Black Spiced Rum"
          },
          {
            "name": "Paloma Margarita",
            "price": "$16.40",
            "desc": "LALO Blanco tequila, sour, Grapefruit liqueur, grapefruit juice, salted rim"
          },
          {
            "name": "Perfecto Cristalino Margarita",
            "price": "$16.40",
            "desc": "Dobel Diamante Cristalino tequila, Cointreau, splash of homemade sour, major lime squeeze, salted rim, on the rocks"
          },
          {
            "name": "Refreshing Gin Splash",
            "price": "$15.90",
            "desc": "Kur Gin, Aperol, Elderflower liqueur, homemade sour, orange rosemary syrup"
          },
          {
            "name": "Seattle's Epic Espresso Martini",
            "price": "$16.90",
            "desc": "Do Epic Sh*t vodka, extra shaken with fresh cold brew, Browne Vanilla Bean Whiskey and Cantera Negra Cafe coffee liqueur"
          },
          {
            "name": "Sunny Slope Nectarine Mule",
            "price": "$15.90",
            "desc": "Nectarine vodka, fresh limes, basil, ginger beer"
          },
          {
            "name": "The Duke & The King",
            "price": "$15.90",
            "desc": "Hendrick's gin, Elderflower liqueur, homemade sour, fresh basil, served 'up'"
          },
          {
            "name": "Tito's Texas Mule",
            "price": "$15.40",
            "desc": "Tito's vodka, fresh limes, ginger beer"
          },
          {
            "name": "Woodinville Whiskey Sour",
            "price": "$16.90",
            "desc": "Woodinville bourbon, toasted Applewood staves, homemade sour, raw egg white"
          }
        ]
      },
      {
        "title": "Draft Beer",
        "items": [
          {
            "name": "Bale Breaker Top Cutter IPA",
            "price": "",
            "desc": ""
          },
          {
            "name": "Black Raven Pilsner",
            "price": "",
            "desc": ""
          },
          {
            "name": "Coors Light",
            "price": "",
            "desc": ""
          },
          {
            "name": "Mac & Jack's African Amber",
            "price": "",
            "desc": ""
          },
          {
            "name": "Manny's Pale Ale",
            "price": "",
            "desc": ""
          }
        ]
      },
      {
        "title": "Bottled Beer",
        "items": [
          {
            "name": "$2 Modelito's (7oz can)",
            "price": "",
            "desc": ""
          },
          {
            "name": "Pacifico / Pacifico bucket (4)",
            "price": "",
            "desc": ""
          },
          {
            "name": "Rainier (16oz can)",
            "price": "",
            "desc": ""
          }
        ]
      },
      {
        "title": "Gluten Free Beer",
        "items": [
          {
            "name": "Ghostfish Brewing Co.",
            "price": "",
            "desc": "",
            "gf": true
          }
        ]
      },
      {
        "title": "Non-Alcoholic Beer",
        "items": [
          {
            "name": "Athletic Brewing Co. (N/A)",
            "price": "",
            "desc": ""
          }
        ]
      },
      {
        "title": "Cider / Hard Seltzer",
        "items": [
          {
            "name": "High Noon Peach",
            "price": "",
            "desc": ""
          },
          {
            "name": "Incline Blackberry Cider",
            "price": "",
            "desc": ""
          },
          {
            "name": "Topo Chico Straw/Guava",
            "price": "",
            "desc": ""
          },
          {
            "name": "Yonder Cider",
            "price": "",
            "desc": ""
          }
        ]
      },
      {
        "title": "Non-Alcoholic",
        "items": [
          {
            "name": "Acqua Panna",
            "price": "",
            "desc": ""
          },
          {
            "name": "Caffe Ladro Organic Coffee",
            "price": "",
            "desc": ""
          },
          {
            "name": "Q Ginger Ale",
            "price": "",
            "desc": ""
          },
          {
            "name": "San Pellegrino",
            "price": "",
            "desc": ""
          },
          {
            "name": "Scotty's Local Fresh Lemonades",
            "price": "",
            "desc": ""
          },
          {
            "name": "Seattle Soda Co. Sodas",
            "price": "",
            "desc": ""
          },
          {
            "name": "Tazo Hot Tea",
            "price": "",
            "desc": ""
          }
        ]
      },
      {
        "title": "NA Seltzers",
        "items": [
          {
            "name": "Hiyo Social Seltzers",
            "price": "",
            "desc": "Watermelon Lime, Blackberry Lemon, Passionfruit Tangerine"
          }
        ]
      },
      {
        "title": "White Selection",
        "items": [
          {
            "name": "Albarino, Nortico",
            "price": "$14.90 / $18.90 / $52",
            "desc": "Portugal; Sustainably grown with fresh citrus notes and vibrant minerality"
          },
          {
            "name": "Chardonnay, House - Duke's Selection",
            "price": "$13.90 / $17.90 / $46",
            "desc": "Duke's house Chardonnay"
          },
          {
            "name": "Chardonnay, Mark Ryan 'Lu + Oly'",
            "price": "$14.90 / $18.90 / $52",
            "desc": "Alluring flavors with great texture and balance"
          },
          {
            "name": "Chardonnay, Sonoma-Cutrer",
            "price": "$16.90 / $20.90 / $62",
            "desc": "Russian River Ranches; tropical fruit, light vanilla oak finish"
          },
          {
            "name": "Dry Rose, Flowerhead by Mark Ryan",
            "price": "$14.90 / $18.90 / $52",
            "desc": "Full bodied and refreshing, with vibrant dry notes of strawberry and citrus"
          },
          {
            "name": "Pinot Gris, Nine Hats",
            "price": "$14.90 / $18.90 / $52",
            "desc": "Columbia Valley; medium bodied, vibrant fresh flavors, crisp finish"
          },
          {
            "name": "Pinot Gris/Sauvignon Blanc, Browne Family 'Gigi's Garden'",
            "price": "$14.90 / $18.90 / $52",
            "desc": "Columbia Valley; Crisp and refreshing, with a lively and lush minerality"
          },
          {
            "name": "Riesling, J Bookwalter Winery",
            "price": "$13.90 / $17.90 / $46",
            "desc": "Columbia Valley; Juicy entry with ripe fruit, rich mouthfeel, bright citrus finish"
          },
          {
            "name": "Sauvignon Blanc, Black Stallion",
            "price": "$15.90 / $19.90 / $56",
            "desc": "North Coast; bright fruit with a lingering finish"
          },
          {
            "name": "Sauvignon Blanc, Whitehaven",
            "price": "$15.90 / $19.90 / $56",
            "desc": "Marlborough, NZ; Full, fresh and juicy with vibrant acidity"
          },
          {
            "name": "Viognier, San Simeon",
            "price": "$14.90 / $18.90 / $52",
            "desc": "Paso Robles; Bright and luscious with floral aroma"
          }
        ]
      },
      {
        "title": "Red Selection",
        "items": [
          {
            "name": "Cabernet Sauvignon, Black Stallion",
            "price": "$16.90 / $21.90 / $62",
            "desc": "Napa Valley; deep, dark fruit flavors, luscious finish"
          },
          {
            "name": "Cabernet Sauvignon, Duke's 'Up River Red'",
            "price": "$14.90 / $18.90 / $52",
            "desc": "Candy Mountain; medium to full body, beautiful fruit, lingering finish"
          },
          {
            "name": "Grenache/Syrah/Mourvedre 'GSM' JM Cellars",
            "price": "$14.90 / $18.90 / $52",
            "desc": "Columbia Valley; versatile and fruit forward blend"
          },
          {
            "name": "Merlot, Browne Family",
            "price": "$14.90 / $18.90 / $52",
            "desc": "Columbia Valley; floral and fruit aromas, estate fruit"
          },
          {
            "name": "Petite Syrah, Stags' Leap Winery",
            "price": "$16.90 / $21.90 / $62",
            "desc": "Columbia Valley; power and intensity with finesse, long finish"
          },
          {
            "name": "Pinot Noir, Benton-Lane",
            "price": "$14.90 / $18.90 / $52",
            "desc": "Willamette Valley, OR; medium bodied, vibrant, a killer food wine"
          },
          {
            "name": "Pinot Noir, Calera Winery",
            "price": "$14.90 / $18.90 / $52",
            "desc": "Central Coast; soft velvety tannins, vibrant fruit and spice, long finish"
          },
          {
            "name": "Red Blend, Darby Winery 'Purple Haze'",
            "price": "$14.90 / $18.90 / $52",
            "desc": "Columbia Valley; silky smooth with dense rich fruit"
          }
        ]
      },
      {
        "title": "Bubbles",
        "items": [
          {
            "name": "Champagne, Moet & Chandon",
            "price": "$22.90 / $118",
            "desc": "Brut Imperial - Champagne, FR; bright fruitiness, elegant maturity"
          },
          {
            "name": "Prosecco, LaMarca",
            "price": "$14.40 / $48",
            "desc": "Veneto, Italy; bright, crisp and refreshing"
          },
          {
            "name": "Sparkling Rose, Lucien Albrecht Cremant d'Alsace Brut Rose",
            "price": "$15.90 / $58",
            "desc": "Alsace, FR; 100% Pinot Noir sparkling wine"
          },
          {
            "name": "Sparkling, Treveri Brut",
            "price": "$13.90 / $48",
            "desc": "Yakima Valley; locally made, fresh, crisp and dry"
          }
        ]
      },
      {
        "title": "Boutique WA Winery",
        "items": [
          {
            "name": "Browne Family Cabernet Sauvignon",
            "price": "$62",
            "desc": ""
          },
          {
            "name": "Browne Family Dry Rose",
            "price": "$52",
            "desc": ""
          },
          {
            "name": "Darby 'Le Deuce' Viognier/Roussanne",
            "price": "$52",
            "desc": ""
          },
          {
            "name": "Darby Winery 'The Dark Side' Syrah",
            "price": "$58",
            "desc": ""
          },
          {
            "name": "Dossier Sauvignon Blanc",
            "price": "$56",
            "desc": ""
          },
          {
            "name": "Dossier Winery Red Blend",
            "price": "$74",
            "desc": ""
          },
          {
            "name": "Eight Bells 'David's Block' Red Blend",
            "price": "$64",
            "desc": ""
          },
          {
            "name": "Feather Cabernet Sauvignon",
            "price": "$108",
            "desc": ""
          },
          {
            "name": "Fidelitas Malbec",
            "price": "$78",
            "desc": ""
          },
          {
            "name": "J. Bookwalter 'Conflict' Red Blend",
            "price": "$66",
            "desc": ""
          },
          {
            "name": "JM Cellars Sauvignon Blanc",
            "price": "$54",
            "desc": ""
          },
          {
            "name": "Mark Ryan 'The Dissident' Red Blend",
            "price": "$69",
            "desc": ""
          },
          {
            "name": "Mark Ryan Viognier",
            "price": "$62",
            "desc": ""
          },
          {
            "name": "Novelty Hill Sangiovese",
            "price": "$52",
            "desc": ""
          },
          {
            "name": "Passing Time Chardonnay",
            "price": "$64",
            "desc": ""
          },
          {
            "name": "Passing Time Red Blend",
            "price": "$86",
            "desc": ""
          },
          {
            "name": "Sparkman Grenache",
            "price": "$48",
            "desc": ""
          },
          {
            "name": "Sparkman Lumiere Chardonnay",
            "price": "$58",
            "desc": ""
          },
          {
            "name": "Upchurch Estate Cabernet Sauvignon",
            "price": "$94",
            "desc": ""
          },
          {
            "name": "Woodward Canyon 'Artist Series' Cabernet Sauvignon",
            "price": "$76",
            "desc": ""
          }
        ]
      },
      {
        "title": "California Beauty",
        "items": [
          {
            "name": "Etude Pinot Noir",
            "price": "$76",
            "desc": ""
          },
          {
            "name": "Faust Cabernet Sauvignon",
            "price": "",
            "desc": ""
          },
          {
            "name": "Flowers Chardonnay",
            "price": "",
            "desc": ""
          },
          {
            "name": "Rombauer Sauvignon Blanc",
            "price": "",
            "desc": ""
          }
        ]
      }
    ]
  },
  "gluten-free-menu": {
    "name": "Gluten Free",
    "note": "Every item Duke's marks GF across the lunch and dinner, dessert, and drinks menus.",
    "groups": [
      {
        "title": "Lunch & Dinner",
        "items": [
          {
            "name": "Dungeness Crab Dip",
            "price": "$24.90",
            "desc": "Havarti, Boursin cheese, roasted garlic, spinach, Walla Walla sweet onions & dipping chips.",
            "gf": true
          },
          {
            "name": "Chilled Prawn Cocktail Veracruz",
            "price": "$11.90",
            "desc": "",
            "gf": true
          },
          {
            "name": "Dungeness Crabby Deviled Egg",
            "price": "$8.90",
            "desc": "Cage-free local egg with fresh Dungeness Crab.",
            "gf": true
          },
          {
            "name": "Maple Bacon Seafood Bites",
            "price": "$9.90",
            "desc": "Bacon-wrapped Wild Mexican Prawn & Alaska Weathervane Scallop with herb maple butter sauce.",
            "gf": true
          },
          {
            "name": "Smoked Salmon Deviled Egg",
            "price": "$8.90",
            "desc": "Smoked Wild Alaska Salmon, fresh dill, capers.",
            "gf": true
          },
          {
            "name": "Award Winning Clam Chowder",
            "price": "$16.90/$21.90/$26.90",
            "desc": "All natural, New England style with nitrite-free bacon, creamy and herby.",
            "gf": true
          },
          {
            "name": "Dinghy Sized Chowder Samplers",
            "price": "$5.40/$9.90/$14.90",
            "desc": "",
            "gf": true
          },
          {
            "name": "Lobster Mobster Pernod Chowder",
            "price": "$16.90/$21.90/$26.90",
            "desc": "Nova Scotia Lobster meat, Argentinean Red Shrimp, sweet potatoes.",
            "gf": true
          },
          {
            "name": "North By Northwest Seafood Chowder",
            "price": "$16.90/$21.90/$26.90",
            "desc": "Wild Alaska Salmon, Halibut & Cod, Steamer Clams - cioppino style.",
            "gf": true
          },
          {
            "name": "Wild Alaska Smoked Salmon Chowder",
            "price": "$14.90/$19.90",
            "desc": "Duke's custom smoked Wild Alaska Coho Salmon with dill, fresh herbs, baby red potatoes.",
            "gf": true
          },
          {
            "name": "Vegan Veggie Stew",
            "price": "$24.90",
            "desc": "Sauteed vegetables, caramelized peppers and onions, organic roasted potatoes, garlic, herbs in tomato broth. Vegan and gluten free.",
            "gf": true
          }
        ]
      },
      {
        "title": "Dessert",
        "items": [
          {
            "name": "Enticingly Refreshing Sorbet",
            "price": "$6.90",
            "desc": "By Lopez Island Creamery, ask your server for today's selections",
            "gf": true
          },
          {
            "name": "What's Up Duke?!? Carrot Cake",
            "price": "$11.90",
            "desc": "Dense, moist and tasty with cream cheese frosting and a tangy raspberry coulis",
            "gf": true
          }
        ]
      },
      {
        "title": "Drinks",
        "items": [
          {
            "name": "Ghostfish Brewing Co.",
            "price": "",
            "desc": "Gluten free beer",
            "gf": true
          }
        ]
      }
    ]
  },
  "kids-menu": {
    "name": "Kids",
    "note": "Served all day long. Choose a meal, a side, and a drink.",
    "groups": [
      {
        "title": "Main",
        "items": [
          {
            "name": "Coco Loco Wild Prawns",
            "price": "$12.90",
            "desc": ""
          },
          {
            "name": "Finger Lickin' Organic Chicken Strips",
            "price": "$12.90",
            "desc": ""
          },
          {
            "name": "Grilled Organic Chicken Breast",
            "price": "$11.90",
            "desc": ""
          },
          {
            "name": "Grilled Wild Alaska Coho Salmon",
            "price": "$16.90",
            "desc": ""
          },
          {
            "name": "Luigi's Linguini Noodles",
            "price": "$10.90",
            "desc": "tomato or alfredo sauce"
          },
          {
            "name": "Oh My Cod! 1 Piece Fish & Chips",
            "price": "$14.90",
            "desc": ""
          },
          {
            "name": "Royal Ranch Grass-Fed Cheeseburger",
            "price": "$13.90",
            "desc": ""
          },
          {
            "name": "Sensational Salmon Bites",
            "price": "$13.90",
            "desc": ""
          }
        ]
      },
      {
        "title": "Sides",
        "items": [
          {
            "name": "Dinghy of Clam Chowder",
            "price": "",
            "desc": ""
          },
          {
            "name": "French Fries",
            "price": "",
            "desc": ""
          },
          {
            "name": "Organic Baby Red Potatoes",
            "price": "",
            "desc": ""
          },
          {
            "name": "Seasonal Vegetable",
            "price": "",
            "desc": ""
          },
          {
            "name": "Sweet Potato Fries",
            "price": "",
            "desc": ""
          }
        ]
      },
      {
        "title": "Drinks",
        "items": [
          {
            "name": "Any of Our Juices or Milk",
            "price": "",
            "desc": ""
          },
          {
            "name": "Fresh Squeezed Lemonade",
            "price": "",
            "desc": ""
          },
          {
            "name": "Pure Cane Sweetened Soda",
            "price": "",
            "desc": ""
          },
          {
            "name": "Strawberry or Blueberry Lemonade",
            "price": "",
            "desc": ""
          }
        ]
      },
      {
        "title": "Kid's Dessert",
        "items": [
          {
            "name": "Ice Cream or Sorbet",
            "price": "$2.90",
            "desc": ""
          }
        ]
      }
    ]
  },
  "dessert-menu": {
    "name": "Dessert",
    "note": "House desserts with Lopez Island Creamery ice cream.",
    "groups": [
      {
        "title": "Dessert",
        "items": [
          {
            "name": "Brookie Betty Boop",
            "price": "$13.90",
            "desc": "Chocolate brownie mixed with chocolate chip cookie, baked and served warm with Lopez Island Creamery vanilla ice cream"
          },
          {
            "name": "Carefully Selected Local Ice Cream",
            "price": "$6.90",
            "desc": "Made by local favorite Lopez Island Creamery"
          },
          {
            "name": "Enticingly Refreshing Sorbet",
            "price": "$6.90",
            "desc": "By Lopez Island Creamery, ask your server for today's selections",
            "gf": true
          },
          {
            "name": "Mouthwatering Marionberry Pie",
            "price": "$14.90",
            "desc": "Wild Woodland, WA marionberries, served warm, with 2 scoops of Lopez Island Creamery vanilla ice cream"
          },
          {
            "name": "Peerless Pier Pie",
            "price": "$12.90",
            "desc": "From the Pier Restaurant in Newport, Rhode Island. Lopez Island Creamery chocolate and espresso ice cream layered in a cookie crust with chocolate sauce, homemade whipped cream and toasted almonds"
          },
          {
            "name": "What's Up Duke?!? Carrot Cake",
            "price": "$11.90",
            "desc": "Dense, moist and tasty with cream cheese frosting and a tangy raspberry coulis",
            "gf": true
          }
        ]
      }
    ]
  },
  "specials": {
    "name": "Chef Bill's Specials",
    "note": "Chef Bill's current specials, served daily. Hook, Line & Land lunch specials run Monday through Friday.",
    "groups": [
      {
        "title": "Tasty Margarita",
        "items": [
          {
            "name": "Strawberry Mint Slightly Spicy Margarita",
            "price": "$16.90",
            "desc": ""
          }
        ]
      },
      {
        "title": "Seafood Starter",
        "items": [
          {
            "name": "Chilled Prawn Cocktail Veracruz",
            "price": "$10.90",
            "desc": ""
          }
        ]
      },
      {
        "title": "Appeteaser",
        "items": [
          {
            "name": "Smoked Salmon Street Corn Dip",
            "price": "$19.90",
            "desc": ""
          }
        ]
      },
      {
        "title": "Champion Chowder",
        "items": [
          {
            "name": "Wild Alaska Smoked Salmon Chowder",
            "price": "$14.90/$19.90",
            "desc": "Duke's custom smoked Wild Alaska Coho Salmon with dill, fresh herbs, baby red potatoes"
          }
        ]
      },
      {
        "title": "Eat Your Greens",
        "items": [
          {
            "name": "Dungeness Crab & Prawn Louie Louie",
            "price": "$36.90",
            "desc": ""
          }
        ]
      },
      {
        "title": "100% Sustainable Seafood",
        "items": [
          {
            "name": "Smoked Salmon Pesto Pappardelle",
            "price": "$34.90",
            "desc": ""
          },
          {
            "name": "Ultimate Fisherman's Favorite",
            "price": "$44.90",
            "desc": ""
          }
        ]
      },
      {
        "title": "Local Grass Fed Filet Mignon",
        "items": [
          {
            "name": "Smoked Black Pepper Crusted Filet Mignon",
            "price": "$56.90",
            "desc": ""
          }
        ]
      },
      {
        "title": "Divine Dessert",
        "items": [
          {
            "name": "Mixed Berry White Chocolate Mousse Shortcake Parfait",
            "price": "$14.90",
            "desc": ""
          }
        ]
      },
      {
        "title": "Hook, Line & Land Lunch Specials (Mon-Fri)",
        "items": [
          {
            "name": "Crispy Dijon Chicken Sandwich",
            "price": "$22.90",
            "desc": ""
          },
          {
            "name": "Hot Honey Wild Salmon Sandwich",
            "price": "$23.90",
            "desc": ""
          },
          {
            "name": "Wild Mexican Prawn Po' Boy",
            "price": "$22.90",
            "desc": ""
          }
        ]
      },
      {
        "title": "Boutique Washington Wine Feature",
        "items": [
          {
            "name": "Bookwalter Foreshadow Cabernet Sauvignon",
            "price": "$15.90/$19.90/$58",
            "desc": ""
          },
          {
            "name": "Bookwalter READERS Chardonnay",
            "price": "$14.90/$18.90/$54",
            "desc": ""
          },
          {
            "name": "Bookwalter READERS Sauvignon Blanc",
            "price": "$14.90/$18.90/$54",
            "desc": ""
          },
          {
            "name": "Bookwalter \"Conflict\" Red Blend",
            "price": "Btl $66",
            "desc": ""
          }
        ]
      }
    ]
  }
};


// ---------------------------------------------------------------------------
// Sheet-backed getters. These try the Google Sheet first (live, office-editable)
// and fall back to the static MENU_HUB / MENUS above if the sheet is not
// configured or unreachable. The static data is also the "shape of truth" so
// the site renders identically whether the sheet is wired up or not.
// ---------------------------------------------------------------------------
import { fetchMenusFromSheet } from '@/lib/menuSheet';

// Module-level memo with a TTL so a warm Vercel instance doesn't serve a stale
// sheet read forever (ISR gates page regeneration; this gates the data memo).
let _cache = null;
let _cacheAt = 0;
const TTL = 10 * 60 * 1000; // 10 minutes
async function load() {
  if (_cache && Date.now() - _cacheAt < TTL) return _cache;
  const sheet = await fetchMenusFromSheet();
  if (sheet) {
    _cache = sheet;
    _cacheAt = Date.now();
  } else if (!_cache) {
    // First load and the sheet is unreachable: use static fallback, but expire it
    // soon (60s) so a transient failure doesn't pin the fallback for a full TTL.
    _cache = { hub: MENU_HUB, menus: MENUS };
    _cacheAt = Date.now() - TTL + 60_000;
  }
  return _cache;
}

export async function getMenuHub() {
  const { hub } = await load();
  return hub;
}

export async function getAllMenuSlugs() {
  // generateStaticParams can't await the sheet reliably at build for unknown
  // slugs, so seed from the static keys; sheet-only slugs still resolve at
  // request time via ISR fallback.
  const staticKeys = Object.keys(MENUS);
  try {
    const { menus } = await load();
    return Array.from(new Set([...staticKeys, ...Object.keys(menus)]));
  } catch {
    return staticKeys;
  }
}

export async function getMenu(slug) {
  const { menus } = await load();
  return menus[slug] || MENUS[slug] || null;
}
