const foodItems = [
    {
        name: "Tagine",
        imageSrc: "/tagine.jpg",
        description: "Traditional Moroccan stew cooked in a clay pot.",
        ingredients: ["1 kg lamb or chicken", "2 onions", "3 tomatoes", "1/2 cup olive oil", "1 teaspoon ground ginger", "1 teaspoon ground turmeric"],
        instructions: [
            "Heat olive oil in a tagine pot.",
            "Brown the meat with chopped onions.",
            "Add chopped tomatoes and spices.",
            "Cover and simmer for 1 hour.",
            "Serve hot with bread or couscous."
        ],
        slug: "tagine"
    },
    {
        name: "Couscous",
        imageSrc: "/couscous.jpg",
        description: "Fluffy couscous served with vegetables and meat.",
        ingredients: ["2 cups couscous", "2 carrots", "2 zucchinis", "1 onion", "1 lb lamb or chicken", "2 tablespoons olive oil"],
        instructions: [
            "Cook couscous according to package instructions.",
            "Sauté chopped vegetables in olive oil.",
            "Add diced meat and cook until browned.",
            "Serve couscous topped with meat and vegetables."
        ],
        slug: "couscous"
    },
    {
        name: "Harira",
        imageSrc: "/harira.jpg",
        description: "Hearty Moroccan soup made with tomatoes, lentils, and chickpeas.",
        ingredients: ["1 cup lentils", "1 cup chickpeas", "2 tomatoes", "1 onion", "1/4 cup vermicelli", "2 tablespoons olive oil"],
        instructions: [
            "Sauté chopped onions in olive oil.",
            "Add chopped tomatoes, lentils, and chickpeas.",
            "Cook until tender.",
            "Stir in vermicelli and simmer until cooked.",
            "Serve hot."
        ],
        slug: "harira"
    },
    {
        name: "Pastilla",
        imageSrc: "/pastilla.jpg",
        description: "Savory Moroccan pastry filled with spiced meat and nuts.",
        ingredients: ["1 lb chicken", "1 onion", "1/2 cup almonds", "1/4 cup parsley", "1 teaspoon cinnamon", "1 teaspoon ginger"],
        instructions: [
            "Cook chicken with chopped onions and spices.",
            "Shred chicken and mix with chopped almonds and parsley.",
            "Layer phyllo pastry with chicken mixture.",
            "Bake until golden.",
            "Dust with powdered sugar before serving."
        ],
        slug: "pastilla"
    },
    {
        name: "Briouat",
        imageSrc: "/briouat.jpg",
        description: "Crunchy Moroccan pastry filled with sweet or savory fillings.",
        ingredients: ["1 cup ground beef or lamb", "1/2 cup chopped onions", "1/4 cup chopped parsley", "1 teaspoon cinnamon", "1 teaspoon cumin", "1/4 cup chopped almonds"],
        instructions: [
            "Mix cooked meat with onions, parsley, and spices.",
            "Fill phyllo pastry with meat mixture.",
            "Fold into triangles and seal edges.",
            "Fry until golden brown.",
            "Serve hot with dipping sauce."
        ],
        slug: "briouat"
    },
    {
        name: "Mechoui",
        imageSrc: "/mechoui.jpg",
        description: "Slow-roasted Moroccan lamb, tender and flavorful.",
        ingredients: ["1 whole lamb", "2 tablespoons olive oil", "4 cloves garlic", "1 tablespoon cumin", "1 tablespoon paprika", "Salt and pepper to taste"],
        instructions: [
            "Rub lamb with olive oil, minced garlic, and spices.",
            "Roast in a pit or oven for several hours.",
            "Baste with drippings regularly.",
            "Serve hot with bread and salads."
        ],
        slug: "mechoui"
    },
    {
        name: "Msemen",
        imageSrc: "/msemen.jpg",
        description: "Moroccan square-shaped flatbread, crispy on the outside and soft on the inside.",
        ingredients: ["3 cups flour", "1 teaspoon salt", "1 tablespoon sugar", "1 cup warm water", "1/4 cup vegetable oil", "Butter for frying"],
        instructions: [
            "Mix flour, salt, sugar, and warm water to form a dough.",
            "Knead until smooth.",
            "Divide dough into balls and flatten into squares.",
            "Fry in hot butter until golden and crispy.",
            "Serve hot with honey or jam."
        ],
        slug: "msemen"
    },
    {
        name: "Mint Tea",
        imageSrc: "/mint_tea.jpg",
        description: "Refreshing Moroccan tea infused with mint leaves and sugar.",
        ingredients: ["4 teaspoons green tea leaves", "1 bunch fresh mint leaves", "4 cups water", "Sugar to taste", "1 lemon (optional)", "Ice cubes (optional)"],
        instructions: [
            "Boil water in a teapot.",
            "Add green tea leaves and steep for a few minutes.",
            "Add fresh mint leaves and sugar.",
            "Pour tea into glasses, adding lemon if desired.",
            "Serve hot or over ice."
        ],
        slug: "mint-tea"
    }
];

export default foodItems;
