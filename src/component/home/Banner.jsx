import { Link } from "react-router-dom";
import banner from "../../assets/Banner.png";
const Banner = () => {
    return (
        <div className="flex justify-center items-center bg-[#1313130d] p-8 md:p-16 rounded-2xl">
            <div className="flex flex-col gap-10 text-left">
                <h1 className="font-bold playfair-font text-xl sm:text-4xl md:text-6xl">Books to freshen up your bookshelf</h1>
                <Link to="/ListedBooks"> <button className="btn rounded-lg bg-[#23BE0A] text-white sans-font">View The List</button></Link>
            </div>
            <div className="">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;