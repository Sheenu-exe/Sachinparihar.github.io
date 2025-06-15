import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';

interface MenuItem {
  item: string;
  price?: string;
  quantity?: {
    [key: string]: string;
  };
  weekends: boolean;
  img:string;
}

interface Category {
  name: string;
  items: MenuItem[];
}

interface MenuItemDisplay {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  category: string;
  tags: string[];
  veg: boolean;
  quantity?: {
    [key: string]: string;
  };
  portions?: {
    size: string;
    price: number;
    originalPrice: number;
  }[];
}

const menuData: { categories: Category[] } = {
  "categories": [
    {
      "name": "Veg. Soup Menu",
      "items": [
        {"item": "Veg. Manchow Soup", "img": "https://greenbowl2soul.com/wp-content/uploads/2020/02/veg-manchow-soup.jpg", "price": "120", "weekends": false},
        {"item": "Veg. Sweet Corn Soup", "img": "https://c.ndtvimg.com/2020-12/q9bvneb_sweet-corn-soup-recipe_625x300_16_December_20.jpg", "price": "140", "weekends": false},
        {"item": "Veg. Hot & Sour Soup", "img": "https://www.cookwithmanali.com/wp-content/uploads/2024/01/Hot-and-Sour-Soup-Vegetarian.jpg", "price": "130", "weekends": false},
        {"item": "Veg. Tomato Soup", "img": "https://images.getrecipekit.com/20230124162249-4_c16f9c8e-10ba-4fee-86c2-b5b945da7263_1024x1024.webp", "price": "130", "weekends": false},
        {"item": "Veg. Spring Onion Soup", "img": "https://www.finedininglovers.com/sites/default/files/styles/1_1_768x768/public/article_content_images/Original_12558_StockFood-Spring-Soups.jpg.webp", "price": "130", "weekends": false},
        {"item": "Veg. Clear Soup", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/clear-soup.webp", "price": "120", "weekends": false},
        {"item": "Veg. Noodles Soup", "img": "https://greenbowl2soul.com/wp-content/uploads/2020/02/veg-manchow-soup.jpg", "price": "140", "weekends": false},
        {"item": "Veg. Spinach Soup", "img": "https://www.bosh.tv/sites/default/files/styles/width_extra_large/public/feeds_images/Green-Minestrone-1-min__1__jpg.jpg.webp?itok=jyRFNKis", "price": "160", "weekends": false},
        
      ]
    },
    {
      "name": "Veg. Starters",
      "items": [
        {"item": "Veg. Manchurian", "img": "https://vegecravings.com/wp-content/uploads/2017/03/veg-manchurian-dry-recipe-step-by-step-instructions-10-1024x825.jpg.webp", "quantity": {"Dry": "160", "Gravy": "180"}, "weekends": false},
        {"item": "Veg. Manchurian Chilly", "img": "https://cdn.dotpe.in/longtail/item_thumbnails/6504327/bhl1RDrw-720-720.webp", "quantity": {"Dry": "150", "Gravy": "170"}, "weekends": false},
        {"item": "Veg. Manchurian Szechuan", "img": "https://www.sanjanafeasts.co.uk/wp-content/uploads/2020/04/IMG_1746.jpg.webp", "quantity": {"Dry": "150", "Gravy": "170"}, "weekends": false},
        {"item": "Veg. Manchurian 65", "img": "https://www.chefajaychopra.com/assets/img/imageupload/0-1730109724Screenshot2024-10-281528471webp.webp", "quantity": {"Dry": "150", "Gravy": "170"}, "weekends": false},
        {"item": "Veg. Manchurian Garlic", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynuj91o1WCmdiB8j2_dydRnNgkxTf4Jl3nQ&s", "price": "180", "weekends": false},
        {"item": "Veg. Manchurian Crispy", "img": "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/1/cauliflower_manchurian.webp", "price": "180", "weekends": false},
        {"item": "Veg. Crispy", "img": "https://yezzy4.com/wp-content/uploads/2022/05/Crispy-Chilli-Potato-e1692950021260-600x600.webp", "price": "190", "weekends": false},
        {"item": "Paneer Manchurian (12pcs)", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/paneer-manchurian-recipe.webp", "quantity": {"Dry": "190", "Gravy": "210"}, "weekends": false},
        {"item": "Paneer Chilly", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/chilli-paneer-recipe.webp", "quantity": {"Dry": "180", "Gravy": "200"}, "weekends": false},
        {"item": "Paneer Szechuan", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/schezwan-paneer-recipe.webp", "quantity": {"Dry": "180", "Gravy": "200"}, "weekends": false},
        {"item": "Paneer 65", "img": "https://images.slurrp.com/prod/recipe_images/transcribe/snack/Paneer-65.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75", "quantity": {"Dry": "180", "Gravy": "200"}, "weekends": false},
        {"item": "Paneer Garlic", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/09/garlic-paneer-appetizer.webp", "quantity": {"Dry": "180", "Gravy": "200"}, "weekends": false},
        {"item": "Mushroom Manchurian", "img": "https://maayeka.com/wp-content/uploads/2023/04/mushroom-chili-1-of-1.jpg.webp", "quantity": {"Dry": "180", "Gravy": "200"}, "weekends": false},
        {"item": "Mushroom Chilly", "img": "https://maayeka.com/wp-content/uploads/2023/04/mushroom-chili-1-of-1.jpg.webp", "quantity": {"Dry": "180", "Gravy": "200"}, "weekends": false},
        {"item": "Mushroom Szechuan", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/mushroom-manchurian.webp", "quantity": {"Dry": "180", "Gravy": "200"}, "weekends": false},
        {"item": "Mushroom 65", "img": "https://sankrantisg.com/wp-content/uploads/2025/04/Mushroom-65-1-1-500x500.webp", "quantity": {"Dry": "180", "Gravy": "200"}, "weekends": false},
        {"item": "Mushroom Garlic", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/garlic-mushrooms-recipe.webp", "quantity": {"Dry": "180", "Gravy": "200"}, "weekends": false},
        {"item": "Paneer & Mushroom Manchurian", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/paneer-manchurian-recipe.webp", "price": "200", "weekends": false},
        {"item": "Paneer & Mushroom Chilly", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThn1SfnN6fwf2yLCPssdAUJS-hIFtd60abEg&s", "price": "200", "weekends": false},
        {"item": "Paneer & Mushroom Szechuan", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/chilli-mushroom.webp", "price": "200", "weekends": false},
        {"item": "Paneer & Mushroom 65", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmia_pSbIGDgr7-aFBwMhuhJSwbmwq2pYlw&s", "price": "200", "weekends": false},
        {"item": "Paneer & Mushroom Garlic", "img": "https://img-global.cpcdn.com/recipes/5ed22d486ba42d1e/680x482cq90/garlic-mushroom-paneer-stirfry-recipe-main-photo.jpg", "price": "200", "weekends": false},
        {"item": "Spl. Veg. Combination Dry", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6qxTB17tfnBhpJvJgl0vM_s1oX0PBCRPgw&s", "price": "210", "weekends": false},
        {"item": "Veg. Chinese Bhel", "img": "https://herbivorecucina.com/wp-content/uploads/2023/07/Chinese-Bhel-1-scaled.jpg", "price": "170", "weekends": false},
        {"item": "Veg. Chinese Chousey", "img": "https://www.funfoodfrolic.com/wp-content/uploads/2021/03/Chopsuey-3.jpg", "price": "190", "weekends": false},
        {"item": "Veg. Manchurian Chousey", "img": "https://www.secondrecipe.com/wp-content/uploads/2021/06/veg-manchurian-2-1.jpg", "price": "190", "weekends": false},
        {"item": "Paneer Satay", "img": "https://i.ytimg.com/vi/X_I21SXvqUQ/sddefault.jpg", "price": "220", "weekends": false},
        {"item": "Paneer Lamba", "img": "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/b14cd9fc40129fcfb97aa7e621719d07", "price": "220", "weekends": false},
        {"item": "Veg. Cheese Chilly", "img": "https://www.archanaskitchen.com//images/archanaskitchen/Indian_Appetizers/Chilli_Paneer_-_Hot_and_Spicy_Cottage_Cheese.jpg", "price": "200", "weekends": false}
      ]
    },
    {
      "name": "Veg. Fried Rice",
      "items": [
        {"item": "Veg. Fried Rice", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/singapore-fried-rice.webp", "quantity": {"Half": "130", "Full": "160"}, "weekends": false},
        {"item": "Veg. Szechuan Rice", "img": "https://www.tarladalal.com/media/recipe/method/2025/01/16/schezuan-fried-rice_dsc6667-(20)-17-185508.webp", "quantity": {"Half": "140", "Full": "170"}, "weekends": false},
        {"item": "Veg. Hong Kong Rice", "img": "https://images.slurrp.com/prod/recipe_images/hwc-magazine/pantry-fried-rice-1648542781_G10334WPYU0LPLCK6I78.webp", "quantity": {"Half": "140", "Full": "170"}, "weekends": false},
        {"item": "Veg. Singapore Rice", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/singapore-fried-rice-768x1152.webp", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Veg. Garlic Fried Rice", "img": "https://www.chefajaychopra.com/assets/img/recipe/1-16685920231-1655471344ChefAjayPics3jpgwebp.webp", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Paneer Fried Rice", "img": "https://araizrasoi.com/wp-content/uploads/2024/06/90.webp", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Paneer Szechuan Rice", "img": "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/2/schezwan_fried_rice.webp", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Paneer Hong Kong Rice", "img": "https://www.aromaandessence.com/wp-content/uploads/2023/06/Paneer-fried-rice-close-up-1024x667.webp", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Paneer Singapore Rice", "img": "https://www.tarladalal.com/media/recipe/method/2025/04/04/tip_1.webp", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Paneer Garlic Fried Rice", "img": "https://www.cookclickndevour.com/wp-content/uploads/2016/05/paneer-fried-rice-recipe-d.jpg", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Mushroom Fried Rice", "img": "https://thewoksoflife.com/wp-content/uploads/2022/06/mushroom-fried-rice-12.jpg", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Mushroom Szechuan Rice", "img": "https://www.tarladalal.com/media/recipe/mainphoto/2025/02/08/big_mushroom_fried_rice-13621.webp", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Mushroom Hong Kong Rice", "img": "https://miro.medium.com/v2/resize:fit:1400/0*9RdbNS9OIrFwBYiK.jpg", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Mushroom Singapore Rice", "img": "https://www.yummytummyaarthi.com/wp-content/uploads/2014/11/2-2.jpg", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Mushroom Garlic Fried Rice", "img": "https://www.archanaskitchen.com/images/Burnt_Garlic_Mushroom_Fried_Rice_Indo_Chinese_Recipe-6.jpg", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Veg. Chinese Khichdi", "img": "https://i0.wp.com/s.lightorangebean.com/media/20240924010120/Spiced-Vegetable-Khichdi_post4-768x482.jpg", "price": "200", "weekends": false},
        {"item": "Veg. Manchow Sp. Rice", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/fried-rice-recipe.webp", "price": "200", "weekends": false},
        {"item": "Veg. Manchurian Rice", "img": "https://cookingfromheart.com/wp-content/uploads/2021/10/Gobi-Fried-Rice-5.jpg", "price": "220", "weekends": false}
      ]
    },
    {
      "name": "Two-In-One",
      "items": [
        {"item": "Veg. Combination Fried Rice", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/singapore-fried-rice.webp", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Veg. Combination Szechuan Rice", "img": "https://www.tarladalal.com/media/recipe/method/2025/01/16/schezuan-fried-rice_dsc6667-(20)-17-185508.webp", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Veg. Packing Rice", "img": "https://i.ytimg.com/vi/eATScu4ko6E/hq720.jpg", "quantity": {"Half": "150", "Full": "200"}, "weekends": false},
        {"item": "Veg. Triple Rice", "img": "https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/sanjeev-kapoor/media/media_files/HooFFFKza3X6B32YfcVi.JPG", "quantity": {"Half": "160", "Full": "220"}, "weekends": false},
        {"item": "Veg. Triple Paneer Rice", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-fried-rice.webp", "quantity": {"Half": "170", "Full": "240"}, "weekends": false},
        {"item": "Veg. Triple Mushroom Rice", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/mushroom-fried-rice-recipe.jpg", "quantity": {"Half": "170", "Full": "240"}, "weekends": false}
      ]
    },
    {
      "name": "Veg. Noodles",
      "items": [
        {"item": "Veg. Hakka Noodles", "img": "https://vegecravings.com/wp-content/uploads/2017/03/veg-hakka-noodles-recipe-with-step-by-step-instructions.jpg", "quantity": {"Half": "130", "Full": "160"}, "weekends": false},
        {"item": "Veg. Szechuan Noodles", "img": "https://herbivorecucina.com/wp-content/uploads/2023/09/Schezwan-Noodles-2.jpg", "quantity": {"Half": "140", "Full": "170"}, "weekends": false},
        {"item": "Veg. Hong Kong Noodles", "img": "https://school-of-wok.s3.eu-west-2.amazonaws.com/recipes/show_images/f502afb6210e4b85aeeebd8d7852f72a.jpg", "quantity": {"Half": "130", "Full": "160"}, "weekends": false},
        {"item": "Veg. Singapore Noodles", "img": "https://www.vegrecipesofindia.com/wp-content/uploads/2018/03/singapore-noodles-recipe-1.jpg", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Veg. Garlic Noodles", "img": "https://www.chefkunalkapur.com/wp-content/uploads/2021/12/Veg-Chowmein-scaled.jpg?v=1638771610", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Veg. Paneer Noodles", "img": "https://someindiangirl.com/wp-content/uploads/2021/01/chilli-paneer-noodles-1-of-1-500x500.jpg", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Veg. Mushroom Noodles", "img": "https://therecipecritic.com/wp-content/uploads/2018/09/Garlic-Mushroom-Noodles-1-500x500.jpg", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Veg. Manchurian Noodles", "img": "https://i.pinimg.com/736x/66/32/88/6632884b3be791bd22dd23eb16dea61d.jpg", "quantity": {"Half": "160", "Full": "220"}, "weekends": false},
        {"item": "Veg. Triple Noodles", "img": "https://vps029.manageserver.in/menu/wp-content/uploads/2023/12/Gochujang-Noodles-Recipe-SQ.jpg", "quantity": {"Half": "160", "Full": "220"}, "weekends": false},
        {"item": "Veg. Manchow Sp. Noodles", "img": "https://www.secondrecipe.com/wp-content/uploads/2021/05/indian-hakka-noodles.jpg", "price": "180", "weekends": false}
      ]
    },
    {
      "name": "Non-Veg. Soup",
      "items": [
        {"item": "Chicken Manchow Soup", "img": "https://maharajaroyaldining.com/wp-content/uploads/2024/03/Chicken-Manchow-Soup-3.webp", "price": "130", "weekends": false},
        {"item": "Chicken Sweet Corn Soup", "img": "https://smellylunchbox.com/wp-content/uploads/2023/11/chickencorneggdropsoup-1-jpeg.webp", "price": "170", "weekends": false},
        {"item": "Chicken Hot & Sour Soup", "img": "https://www.ifshe.co.uk/cdn/shop/articles/chicken-hot-and-sour-soup-recipe_1200x.webp", "price": "150", "weekends": false},
        {"item": "Chicken Lung Fung Soup", "img": "https://cdn.dotpe.in/longtail/item_thumbnails/999815/m9xrsvPr-400-400.webp", "price": "160", "weekends": false},
        {"item": "Chicken Clear Soup", "img": "https://cdn.prod.website-files.com/6339fd8813726553060cd1ee/6593f554d13cf3ff002ff2f6_country-soup.webp", "price": "130", "weekends": false},
        {"item": "Chicken Ball Soup", "img": "https://kunyitpepper.com/wp-content/uploads/2024/10/Healthy-Asian-Chicken-Meatball-Noodle-Soup-759x1024.webp", "price": "150", "weekends": false}
      ]
    },
    {
      "name": "Non-Veg. Starters",
      "items": [
        {"item": "Chicken Manchurian (Boneless Chicken Served)", "img": "https://mostlymasala.com/wp-content/uploads/2021/12/2F7CFC73-F617-467A-BB4A-F35D7BB1E339-500x500.jpeg", "quantity": {"Dry": "200", "Gravy": "220"}, "weekends": false},
        {"item": "Chicken Chilly", "img": "https://images.slurrp.com/prod/recipe_images/transcribe/side%20dish/Chilli_Chicken.webp", "quantity": {"Dry": "210", "Gravy": "220"}, "weekends": false},
        {"item": "Chicken Szechuan", "img": "https://simplehomeedit.com/wp-content/uploads/2023/11/Crispy-Sweet-Chilli-Chicken-3.webp", "quantity": {"Dry": "200", "Gravy": "220"}, "weekends": false},
        {"item": "Chicken 65", "img": "https://anjappar.ch/wp-content/uploads/2023/11/history-of-chicken-65.webp", "price": "210", "weekends": false},
        {"item": "Chicken Garlic", "img": "https://recipesfiber.com/wp-content/uploads/2025/05/asian-style-crispy-garlic-chicken-2025-05-31-134204.webp", "price": "210", "weekends": false},
        {"item": "Chicken Crispy", "img": "https://simplehomeedit.com/wp-content/uploads/2023/11/Crispy-Sweet-Chilli-Chicken-3.webp", "price": "210", "weekends": false},
        {"item": "Chicken Lollypop 3pcs / 5pcs", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-lollipop-recipe.webp", "price": "150 / 220", "weekends": false},
        {"item": "Chicken Lollypop Masala 5pcs", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-lollipop-recipe.webp", "price": "160", "weekends": false},
        {"item": "Chicken Chinese Bhel", "img": "https://mychefstoolbox.com.au/wp-content/uploads/2024/02/Chicken-and-Hokkien-Noodles-1280x914-1.webp", "price": "170", "weekends": false},
        {"item": "Chicken Chinese Chousey", "img": "https://hotelbeachgarden.com/wp-content/uploads/2024/12/Chicken-Chinese-Chopsuey.webp", "price": "190", "weekends": false},
        {"item": "Chicken American Chousey", "img": "https://hotelbeachgarden.com/wp-content/uploads/2024/12/Chicken-Fried-Noodles-600x600.webp", "price": "190", "weekends": false}
      ]
    },
    {
      "name": "MANCHOW SPECIAL",
      "items": [
        {"item": "Chicken 65 Dry", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/chicken-65-recipe-restaurant-style.webp", "price": "230", "weekends": false},
        {"item": "Chicken Chilly Dry", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/12/chilli-chicken.webp", "price": "230", "weekends": false},
        {"item": "Chicken Hong Kong Dry", "img": "https://pupswithchopsticks.com/wp-content/uploads/chicken-manchurian-tnnew.webp", "price": "230", "weekends": false},
        {"item": "Chicken Garlic Dry", "img": "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Szechuan-Chicken-Square-FS-18.webp", "price": "230", "weekends": false},
        {"item": "Chicken Szechuan Dry", "img": "https://tasteasianfood.com/wp-content/uploads/2021/12/Szechuan-chicken-recipe-3.jpeg.webp", "price": "230", "weekends": false},
        {"item": "Chicken Crispy Dry", "img": "https://khinskitchen.com/wp-content/uploads/2021/09/crispy-chilli-chicken-2.jpg", "price": "230", "weekends": false}
      ]
    },
    {
      "name": "Non-Veg Noodles",
      "items": [
        {"item": "Chicken Hakka Noodles", "img": "https://sinfullyspicy.com/wp-content/uploads/2023/01/1200-by-1200-images-5.jpg", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Chicken Szechuan Noodles", "img": "https://www.marionskitchen.com/wp-content/uploads/2022/11/Sichuan-Chilli-Chicken-Noodles-01-1200x900.jpg", "quantity": {"Half": "140", "Full": "190"}, "weekends": false},
        {"item": "Chicken Hong Kong Noodles", "img": "https://www.foodhubrestaurant.com/images/thumbs/0000850_chicken-hong-kong-noodles_600.jpeg", "quantity": {"Half": "140", "Full": "190"}, "weekends": false},
        {"item": "Chicken Singapore Noodles", "img": "https://production-media.gousto.co.uk/cms/mood-image/2493_The-Ultimate-Singapore-Style-Chicken-Noodles_001_0-1721898307420.jpg", "quantity": {"Half": "140", "Full": "190"}, "weekends": false},
        {"item": "Chicken Garlic Noodles", "img": "https://www.jessicagavin.com/wp-content/uploads/2016/02/asian-garlic-noodles-with-chicken-vegetables-1200.jpg", "quantity": {"Half": "140", "Full": "190"}, "weekends": false},
        {"item": "Chicken Manchurian Noodles", "img": "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/1/Noodle_Manchurian.webp", "quantity": {"Half": "170", "Full": "240"}, "weekends": false},
        {"item": "Chicken Triple Noodles", "img": "https://simplehomeedit.com/wp-content/uploads/2025/02/Three-Cup-Chicken-Noodles-6.webp", "quantity": {"Half": "180", "Full": "250"}, "weekends": false}
      ]
    },
    {
      "name": "Non-Veg Rice",
      "items": [
        {"item": "Chicken Fried Rice", "img": "https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenFriedRice-500x375.webp", "quantity": {"Half": "140", "Full": "180"}, "weekends": false},
        {"item": "Chicken Szechuan Rice", "img": "https://yezzy4.com/wp-content/uploads/2023/08/schezwan-fried-rice-recipe-3.webp", "quantity": {"Half": "140", "Full": "190"}, "weekends": false},
        {"item": "Chicken Hong Kong Rice", "img": "https://images.slurrp.com/prod/recipe_images/hwc-magazine/pantry-fried-rice-1648542781_G10334WPYU0LPLCK6I78.webp", "quantity": {"Half": "150", "Full": "190"}, "weekends": false},
        {"item": "Chicken Singapore Rice", "img": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/4/1/1/LS-Library_Singapore-Style-Pork-Fried-Rice_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1522650028810.webp", "quantity": {"Half": "150", "Full": "190"}, "weekends": false},
        {"item": "Chicken Garlic Fried Rice", "img": "https://www.spicebangla.com/wp-content/uploads/2024/10/Garlic-Chicken-Fried-Rice01.webp", "quantity": {"Half": "140", "Full": "190"}, "weekends": false},
        {"item": "Chicken Sp. Szechuan Rice with Omlette", "img": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAoW8D7cEhiV81p5-yvLMOrnhEt-8WMLJmDdtNhMSlMjg-PQOPzPPiLkmpJjRYeZcJanQgyDEpxC6bmhf-hexx36yivrqoaZu-cmRox3gS51NAbnK2mxKfJlXTggooDl-_TGsWoMCCuoU/s4000/Chicken+triple+rice+serving.webp", "price": "210", "weekends": false},
        {"item": "Chicken Chinese Khichdi", "img": "https://www.recipesworld.co.uk/images/167288660967076536.webp", "price": "210", "weekends": false},
        {"item": "Chicken Manchow Rice", "img": "https://maharajaroyaldining.com/wp-content/uploads/2024/03/Chicken-Manchow-Soup-1.webp", "price": "220", "weekends": false},
        {"item": "Egg Fried Rice", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/egg-fried-rice-spicy.webp", "quantity": {"Half": "140", "Full": "170"}, "weekends": false},
        {"item": "Egg Szechuan Rice", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/schezwan-fried-rice-recipe.webp", "quantity": {"Half": "140", "Full": "170"}, "weekends": false},
        {"item": "Egg Triple Rice", "img": "https://lotusindrestaurant.com/wp-content/uploads/2025/06/Non-Veg-Triple-Schezwan-Fried-e1748856626597.webp", "quantity": {"Half": "170", "Full": "220"}, "weekends": false},
        {"item": "Egg Szechuan Noodles", "img": "https://ananddhaba.com/img/products/f9c523ff-423f-4895-ae82-6f5c55c55dff.webp", "price": "170", "weekends": false},
        {"item": "Egg Manchow Noodles", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/egg-fried-noodles-recipe.webp", "price": "190", "weekends": false}
      ]
    },
    {
      "name": "Szechuan Special",
      "items": [
        {"item": "Chicken Satay (6pcs)", "img": "https://simplehomeedit.com/wp-content/uploads/2023/02/Chicken-Satay-Skewers-Recipe.webp", "price": "220", "weekends": true},
        {"item": "Chicken Drumstick 3pcs / 5 pcs", "img": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/2/18/1/FNK_Chicken-Drumsticks-Six-Ways-Buttermilk-Fried-Chicken_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1487435798552.webp", "price": "180 / 270", "weekends": true},
        {"item": "Szechuan Special Chicken", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/schezwan-chicken.webp", "price": "220", "weekends": true},
        {"item": "Szechuan Special Chicken Rice", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/egg-fried-rice-spicy-500x375.webp", "price": "220", "weekends": true},
        {"item": "Chicken Jamali Dry", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/09/dry-chicken-ghee-roast.webp", "price": "220", "weekends": true},
        {"item": "Chicken Buna Dry", "img": "https://www.foodforfitness.co.uk/wp-content/smush-webp/2025/04/Chicken-Bhuna-Recipe-2-1024x682.jpg.webp", "price": "230", "weekends": true},
        {"item": "Egg Manchow Noodle", "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe.webp", "price": "190", "weekends": true},
        {"item": "Chicken Lamba", "img": "https://grocsmart.com/storage/app/public/product/thumbnail/2025-03-10-67ceee3200a7f.webp", "price": "240", "weekends": true}
      ]
    },
    {
      "name": "Soft Drinks",
      "items": [
        {"item": "200 ml", "img": "https://souqalbuhair.com/wp-content/uploads/2024/07/8906017291337.webp", "price": "30", "weekends": false},
        {"item": "500 ml", "img": "https://souqalbuhair.com/wp-content/uploads/2023/09/8906017290033.webp", "price": "60", "weekends": false},
        {"item": "Mineral Water", "img": "https://souqalbuhair.com/wp-content/uploads/2023/09/8906017290033.webp", "price": "30", "weekends": false},
        {"item": "Extra Chousey", "img": "https://www.tarladalal.com/media/recipe/method/2025/01/16/american-chop-suey_dsc0265-(26)-1-186191.webp", "price": "20", "weekends": false},
        {"item": "Extra Omelette", "img": "https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/cheeseomelette_80621_16x9.jpg.webp", "price": "30", "weekends": false}
      ]
    }
  ]
};




// Convert menu data to component format
const convertMenuData = (): MenuItemDisplay[] => {
  const allItems: MenuItemDisplay[] = [];
  let itemId = 1;
  
  menuData.categories.forEach(category => {
    category.items.forEach(dish => {
      // Handle items with quantity options
      if (dish.quantity) {
        allItems.push({
          id: itemId++,
          name: dish.item,
          price: 0,
          originalPrice: 0,
          image: dish.img,
          description: `Delicious ${dish.item.toLowerCase()} prepared with authentic Chinese flavors and fresh ingredients`,
          category: category.name,
          tags: dish.weekends ? ['Weekend Special'] : ['Regular'],
          veg: !dish.item.toLowerCase().includes('chicken') && !dish.item.toLowerCase().includes('egg'),
          quantity: dish.quantity
        });
      } else if (dish.price) {
        // Handle regular price items
        const priceStr = dish.price.toString();
        if (priceStr.includes('/')) {
          // Handle items with multiple portions
          const portions = dish.item.split('/').map(p => p.trim());
          const prices = priceStr.split('/').map(p => p.trim());
          
          allItems.push({
            id: itemId++,
            name: dish.item,
            price: 0,
            originalPrice: 0,
            image: dish.img,
            description: `Delicious ${dish.item.toLowerCase()} prepared with authentic Chinese flavors and fresh ingredients`,
            category: category.name,
            tags: dish.weekends ? ['Weekend Special'] : ['Regular'],
            veg: !dish.item.toLowerCase().includes('chicken') && !dish.item.toLowerCase().includes('egg'),
            portions: portions.map((portion, index) => ({
              size: portion,
              price: parseInt(prices[index]) || 0,
              originalPrice: Math.floor((parseInt(prices[index]) || 0) * 1.15)
            }))
          });
        } else {
          // Handle single price items
          allItems.push({
            id: itemId++,
            name: dish.item,
            price: parseInt(priceStr) || 0,
            originalPrice: Math.floor((parseInt(priceStr) || 0) * 1.15),
            image: dish.img,
            description: `Delicious ${dish.item.toLowerCase()} prepared with authentic Chinese flavors and fresh ingredients`,
            category: category.name,
            tags: dish.weekends ? ['Weekend Special'] : ['Regular'],
            veg: !dish.item.toLowerCase().includes('chicken') && !dish.item.toLowerCase().includes('egg')
          });
        }
      }
    });
  });
  
  return allItems;
};

const menuItems = convertMenuData();

// Create categories with counts
const categories = [
  { id: 'all', name: 'All Items', count: menuItems.length },
  ...menuData.categories.map(cat => ({
    id: cat.name,
    name: cat.name,
    count: menuItems.filter(item => item.category === cat.name).length
  }))
];

const getIngredients = (item: MenuItemDisplay): string[] => {
  const name = item.name.toLowerCase();
  const ingredients: string[] = [];
  
  // Base ingredients for all dishes
  ingredients.push('Spring Onion', 'Garlic', 'Ginger');
  
  // Add specific ingredients based on dish type
  if (name.includes('noodles')) {
    ingredients.push('Hakka Noodles', 'Bell Pepper', 'Carrot', 'Cabbage');
  }
  if (name.includes('rice')) {
    ingredients.push('Basmati Rice', 'Bell Pepper', 'Carrot', 'Peas');
  }
  if (name.includes('soup')) {
    ingredients.push('Vegetable Stock', 'Corn Flour', 'Soy Sauce');
  }
  if (name.includes('manchurian')) {
    ingredients.push('Cabbage', 'Carrot', 'Corn Flour', 'Soy Sauce');
  }
  if (name.includes('paneer')) {
    ingredients.push('Paneer', 'Capsicum', 'Onion');
  }
  if (name.includes('mushroom')) {
    ingredients.push('Mushroom', 'Capsicum', 'Onion');
  }
  if (name.includes('chicken')) {
    ingredients.push('Chicken', 'Capsicum', 'Onion');
  }
  if (name.includes('egg')) {
    ingredients.push('Egg', 'Capsicum', 'Onion');
  }
  
  return ingredients;
};

const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="sticky top-20 z-40 bg-gradient-to-b from-black to-transparent pb-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-['Space_Grotesk'] text-center">
            Our <span className="text-[#E23E3E]">Menu</span>
          </h1>
          
          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#E23E3E] transition-colors"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#E23E3E] transition-colors appearance-none"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="sticky top-[280px] z-30 bg-gradient-to-b from-black to-transparent pb-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-medium text-xs sm:text-sm transition-all duration-300 overflow-hidden ${
                  selectedCategory === category.id
                    ? 'bg-[#E23E3E] text-white shadow-lg shadow-red-500/25'
                    : 'bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-700/90 hover:text-white'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E23E3E]/0 via-[#E23E3E]/10 to-[#E23E3E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-1.5 sm:gap-2">
                  <span className="font-semibold truncate max-w-[100px] sm:max-w-none">{category.name}</span>
                  <span className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-700/50 text-gray-300'
                  }`}>
                    {category.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#E23E3E] transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E23E3E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-20" />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 z-10 relative"
                  />
                  
                  <div className="absolute top-3 left-3 z-30 flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium border border-white/10 hover:border-[#E23E3E] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.veg && (
                      <span className="bg-green-500/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium border border-white/10 hover:border-[#E23E3E] transition-colors">
                        Veg
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E23E3E] transition-colors mb-2">
                    {item.name}
                  </h3>

                  {/* Ingredients */}
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {getIngredients(item).map((ingredient, index) => (
                        <span
                          key={index}
                          className="bg-gray-800/50 text-gray-300 text-xs px-2 py-1 rounded-full border border-gray-700"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {item.quantity ? (
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(item.quantity).map(([option, price]) => (
                        <div 
                          key={option} 
                          className="flex items-center justify-between bg-gray-800/50 rounded-lg p-2 border border-gray-700 hover:border-[#E23E3E] transition-all duration-300 hover:bg-gray-800/80"
                        >
                          <span className="text-gray-300 text-sm">{option}</span>
                          <div className="text-right">
                            <span className="text-base font-bold text-[#E23E3E]">₹{price}</span>
                            <span className="block text-xs text-gray-500 line-through">
                              ₹{Math.floor(parseInt(price) * 1.15)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : item.portions ? (
                    <div className="space-y-2">
                      {item.portions.map((portion, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between bg-gray-800/50 rounded-lg p-2 border border-gray-700 hover:border-[#E23E3E] transition-all duration-300 hover:bg-gray-800/80"
                        >
                          <span className="text-gray-300 text-sm">{portion.size}</span>
                          <div className="text-right">
                            <span className="text-base font-bold text-[#E23E3E]">₹{portion.price}</span>
                            <span className="block text-xs text-gray-500 line-through">
                              ₹{portion.originalPrice}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-[#E23E3E] transition-all duration-300 hover:bg-gray-800/80">
                      <div className="text-center">
                        <span className="text-xl font-bold text-[#E23E3E]">₹{item.price}</span>
                        {item.originalPrice > item.price && (
                          <span className="block text-xs text-gray-400 line-through mt-0.5">₹{item.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add custom styles for hiding scrollbar */}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MenuPage;