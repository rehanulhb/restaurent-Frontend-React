import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle subHeading="Check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featured} alt="" srcset="" />
                </div>
                <div className="md:ml-10">
                    <p>feb 15, 2025</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci doloremque aliquam omnis numquam illo officiis distinctio amet, excepturi, dolorem, sed nobis? Nesciunt aperiam harum deserunt rem aspernatur neque hic ad sed temporibus distinctio soluta, ea deleniti? Quibusdam dolorum voluptates quis omnis natus nemo accusamus dicta vero, sit accusantium! Quae!</p>
                    <button className="btn btn-outline text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;