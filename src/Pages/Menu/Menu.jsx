import { Helmet } from "react-helmet-async";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurent | Menu</title>
            </Helmet>
            <h2 className="text-4xl">Menu</h2>
        </div>
    );
};

export default Menu;