
import dryGoods from './imgs/dry-goods.png';
import equipment from './imgs/equipment.png';
import frozen from './imgs/frozen.png';
import meatSeafood from './imgs/meat-seafood.png';
import paperGoods from './imgs/paper-goods.png';
import refrigerated from './imgs/refrigerated.png';

const productsData = [
    {
        id: 1,
        img: meatSeafood,
        description: "Beef, Chicken, Pork, Lamb, Fish, Seafood, Deli Meat (sliced and whole), Hot dogs, Sausages",
        title: "Meat & Seafood",
    },
    {
        id: 2,
        img: dryGoods,
        description: "Canned Goods, Rice, Beans, Beverages, Oil, Condiments, Pasta, spices and many more...",
        title: "Dry-Goods",
    },
    {
        id: 3,
        img: paperGoods,
        description: "Cups, Plates, To-Go Boxes, Plastic Wrap, Foil, Portion Cups, Straws, plastic cutlery, Dish Soap and More",
        title: "Paper-Goods & Janitorial",
    },
    {
        id: 4,
        img: refrigerated,
        description: "Vegetables, Fruit, Cheese, Dairy, Dressings, Etc.",
        title: "Refrigerated",
    },
    {
        id: 5,
        img: frozen,
        description: "Wings, Fries, Soups, Pastas, Meatballs, Tater Tots, Onion Rings, Appetizers, Frozen Fruits, Frozen Vegetables, Cakes, Pastries",
        title: "Frozen",
    },
    {
        id: 6,
        img: equipment,
        description: "Plates, Silverware, Cleaning Supplies, Refrigerators, Microwaves, Ovens, Catering Equipment, Glassware",
        title: "Equipment & Smallwares",
    }
]

export default productsData;