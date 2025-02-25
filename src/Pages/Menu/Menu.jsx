import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImage from "../../../src/assets/menu/banner3.jpg"
import dessertImage from "../../../src/assets/menu/dessert-bg.jpeg"
import pizzaImage from "../../../src/assets/menu/pizza-bg.jpg"
import saladImage from "../../../src/assets/menu/salad-bg.jpg"
import soupImage from "../../../src/assets/menu/soup-bg.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Restaurent | Menu</title>
            </Helmet>
            <Cover img={menuImage} title="Our Menu"></Cover>
            {/* Main Cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* Offered Menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert Menu */}
            <MenuCategory items={dessert} title={"dessert"} img={dessertImage}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImage}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImage}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImage}></MenuCategory>
            
            
        </div>
    );
};

export default Menu;