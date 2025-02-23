import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImage from "../../../src/assets/menu/banner3.jpg"


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurent | Menu</title>
            </Helmet>
            <Cover img={menuImage} title="Our Menu"></Cover>
            
            
        </div>
    );
};

export default Menu;