import { useState } from "react";
import { AddToLS } from "../utility/localStote";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const BookReview = () => {
  const [bookName, setBookName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [userName, setUserName] = useState("");

  const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string);
  function submitHandel(e) {
    e.preventDefault();
    const bokName = document.getElementById("bookName");
    const rattingId = document.getElementById("ratting");
    const textarea = document.getElementById("textarea");
    const errorThrow = document.getElementById("errorThrow");
    const yourName = document.getElementById("yourName");
    if (isNumeric(rating)) {
      errorThrow.innerText = "";
      errorThrow.classList.add("hidden");
      const bookRating = Number(rating);
      if (bookRating <= 5) {
       AddToLS("Comment" , {bookName , bookRating ,review , userName});
        bokName.value="";
        rattingId.value="";
        textarea.value="";
        yourName.value="";
        toast("Thanks For Review ...");

      } else {
        errorThrow.innerText = "**Give Your Rating Between 5";
        errorThrow.classList.remove("hidden");
      }
    } else {
      errorThrow.innerText = "**Enter A Number";
      errorThrow.classList.remove("hidden");
    }
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold p-5 bg-[#5a45451c] rounded-lg mt-2">
        Send us your reading experience !
      </h1>
      <div className="mt-5 max-w-96 mx-auto shadow-lg sans-font text-sm text-gray-800 font-medium">
        <form
          onSubmit={submitHandel}
          className="flex flex-col justify-center items-stretch p-5 bg-[#00000014] gap-4 rounded-lg "
        >
          <input 
          id="bookName"
            onChange={(e) => setBookName(e.target.value)}
            type="text"
            placeholder="Book Name"
            className="w-full p-3 rounded-lg"
            required
          />
          <input
          id="ratting"
            onChange={(e) => setRating(e.target.value)}
            type="text"
            placeholder={"Give Your Rating Under 5"}
            className="w-full p-3 rounded-lg"
          />
          <p
            className="px-2 text-red-800 hidden transition duration-1000 ease-in-out"
            id="errorThrow"
          ></p>
          <textarea
          id="textarea"
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write Your Reviews"
            className="w-full p-3 rounded-lg min-h-32"
            required
          ></textarea>
          <input
          id="yourName"
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg"
            required
          />

          <button
            type="submit"
            className=" mt-2 shadow-lg relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg  group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease font-semibold">
              Send Review
            </span>
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookReview;
