
import { FaRegStar } from "../../../node_modules/react-icons/fa";
import PropTypes from "prop-types";
import { AddToLS } from "../../utility/localStote";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  function sendData(book){
    AddToLS("bookDetails" , book);
    navigate("/bookId");
  }

  return (
    
      <div onClick={()=>sendData(book)} className="group cursor-pointer m-2 p-3 flex flex-col justify-evenly items-start bg-[#1313130e] rounded-xl">
        <div className="bg-[#F3F3F3] p-2 flex justify-center rounded-xl w-full h-full">
          <img
            src={book.image}
            alt=""
            width={"45%"}
            height={"100%"}
            className="mx-auto object-contain"
          />
        </div>
        <div className="flex justify-around gap-4 items-center text-[#23BE0A] text-xs font-medium sans-font m-2 mt-4">
          {book.tags.map((tag, id) => (
            <p key={id}>{tag}</p>
          ))}
        </div>

        <div className="text-[#131313] text-xl font-bold playfair-font ml-2 group-hover:underline">
          {book.bookName}
        </div>
        <p className="text-[#131313cc] text-xs font-medium sans-font m-2">
          By : {book.author}
        </p>
        <div className="border-[#13131326] border border-dashed w-[95%] mx-auto my-2"></div>
        <div className="flex flex-row justify-between items-center p-2 text-[#131313cc] text-xs font-medium sans-font w-full mx-auto">
          <div>{book.category}</div>
          <div className="flex justify-center items-center gap-1">
            {book.rating} <FaRegStar />
          </div>
        </div>
      </div>
   
  );
};

BookCard.propTypes = {
  book: PropTypes.any,
};

export default BookCard;
