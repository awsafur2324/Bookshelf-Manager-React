import { IoLocationOutline } from "../../../node_modules/react-icons/io5";
import { HiOutlineUserGroup } from "../../../node_modules/react-icons/hi2";
import { RiPagesLine } from "../../../node_modules/react-icons/ri";
import { AddToLS } from "../../utility/localStote";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CommonBookCard = ({book}) => {
    const {bookName ,author,image,totalPages,rating,category,tags,publisher,yearOfPublishing} = book;

    const navigate = useNavigate();
    function sendData(book){
      AddToLS("bookDetails" , book);
      navigate("/bookId");
    }
    return (
        <div className="flex flex-col shadow-sm hover:shadow-md md:flex-row m-1 p-3 bg-[#13131309] rounded-lg gap-5 justify-center md:justify-start w-full items-center md:items-stretch">
        <div className=" flex justify-center items-center bg-[#1313130d] rounded-lg p-5 md:max-w-[20%]">
          <img
            src={image}
            alt=""
            width={"50%"}
          />
        </div>
        <div className="flex flex-col justify-evenly items-stretch w-full px-2">
          <h1 className="text-2xl font-bold playfair-font ">
            {bookName}
          </h1>
          <p className="text-[#131313cc] text-sm font-light mt-2">
            By : {author}
          </p>
          <div className="flex flex-wrap flex-row gap-5 justify-start items-center my-2 sans-font text-sm font-medium">
            <div className="flex flex-row gap-5 justify-start items-center text-[#23BE0A] ">
              <p className="font-semibold text-[#131313]">Tag : </p>
              {
                tags.map((tag,id)=> (
                <p key={id}>#{tag}</p>
                ))
              }
            </div>
            <div className="flex flex-row justify-center items-center gap-2 text-[#131313cc]">
              <IoLocationOutline /> Year of Publishing: {yearOfPublishing}
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-5 text-sm text-[#13131399] font-normal my-3">
            <div className="flex flex-row justify-center items-center gap-2">
             <HiOutlineUserGroup /> Publisher: {publisher}
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
             <RiPagesLine /> Page {totalPages}
            </div>
          </div>
          <hr />
          <div className="flex flex-wrap flex-row justify-start items-center gap-5 text-sm sans-font font-normal mt-3">
            <p className="p-2 px-4 text-[#328EFF] bg-[#328eff26] rounded-full">Category:{category}</p>
            <p className="p-2 px-4 text-[#FFAC33] bg-[#ffac3326] rounded-full">Rating: {rating}</p>
            <button onClick={()=>sendData(book)} className="btn p-2 px-4 text-[#fff] bg-[#23BE0A] rounded-full">View Details</button>
          </div>
        </div>
      </div>
    );
};
CommonBookCard.propTypes = {
    book: PropTypes.any,
  };
export default CommonBookCard;