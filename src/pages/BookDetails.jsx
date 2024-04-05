import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddToLS, getData } from "../utility/localStote";

BookDetails.propTypes = {};

function BookDetails() {
 
  const book = getData("bookDetails");
  const clickBook = book[0];

  //for read books
  const sendReadToLS = () => {
    const readList = getData("ReadList");
    // check for same data in read book
    const catchSameRead = readList.filter((data) => clickBook.bookId == data);
    if (catchSameRead.length >= 1) {
      toast.error("Already add to read books");
    } else {
      AddToLS("ReadList", clickBook.bookId);
      toast.success("Add to read books");
      dataRemoveFromWishlist();
      AddToLS("ChartData" , {name : clickBook.bookName , page : clickBook.totalPages});
    }
  };

  // for wishlist
  const sendWishToLS = () => {
    const wishList = getData("WishList");
    const readList = getData("ReadList");
    const catchSameWish = wishList.filter((data) => clickBook.bookId == data);
    if (catchSameWish.length >= 1) {
      toast.error("Already add to wishlist");
    } else {
      const compareWithReadList = readList.filter(
        (data) => data == clickBook.bookId
      );
      if (compareWithReadList.length > 0) {
        toast.warn("Attention!! You already read this");
      } else {
        AddToLS("WishList", clickBook.bookId);
        toast.success("Add to wishlist");
      }
    }
  };

  const dataRemoveFromWishlist = () => {
    const readList = getData("ReadList");
    const wishList = getData("WishList");
    let wishlistMatchArr = [];
    for (let i = 0; i < readList.length; i++) {
      for (let j = 0; j < wishList.length; j++) {
        if (readList[i] == wishList[j]) {
          wishlistMatchArr.push(wishList[j]);
        }
      }
    }
    const wishNewArr = wishList.filter((wish) => wish != wishlistMatchArr[0]);
    console.log(wishNewArr);
    localStorage.removeItem("WishList");
    wishNewArr.map((wish) => AddToLS("WishList", wish));
  };

  return (
    <div className="container mt-2 mx-auto flex flex-col md:flex-row justify-start items-stretch gap-10 p-4 lg:p-0">
      <div className="bg-[#1313130d]  flex justify-center rounded-xl p-5 w-full lg:w-[70%]">
        <img
          src={clickBook.image}
          alt=""
          width={"70%"}
          height={"100%"}
          className="mx-auto object-contain"
        />
      </div>
      <div className=" w-full my-2">
        <h1 className="text-[#131313] text-4xl font-bold playfair-font">
          {clickBook.bookName}
        </h1>
        <p className="text-base text-[#131313cc] font-medium sans-font my-2">
          By : {clickBook.author}
        </p>
        <hr />
        <p className="text-[#131313cc] text-base font-medium sans-font my-3">
          {clickBook.category}
        </p>
        <hr />
        <p className="text-sm sans-font my-4">
          <span className="font-semibold text-[#131313]">Review :</span>{" "}
          <span className="text-wrap text-justify text-[#131313b3] font-normal">
            {clickBook.review}
          </span>
        </p>
        <div className="flex flex-row justify-start items-center gap-5 text-[#23BE0A] font-medium text-xs sans-font my-5">
          <p className="font-bold text-[#131313] text-sm">Tag :</p>
          {clickBook.tags.map((tag, id) => (
            <p key={id}>#{tag}</p>
          ))}
        </div>
        <hr className="my-5" />
        <div className=" flex flex-row justify-start items-start gap-5">
          <div className="flex flex-col gap-2 text-[#131313b3] font-normal text-xs sans-font">
            <p>Number of Pages :</p>
            <p>Publisher :</p>
            <p>Year of Publishing :</p>
            <p>Rating :</p>
          </div>
          <div className="flex flex-col gap-2 text-[#131313] font-semibold text-xs sans-font">
            <p>{clickBook.totalPages}</p>
            <p>{clickBook.publisher}</p>
            <p>{clickBook.yearOfPublishing}</p>
            <p>{clickBook.rating}</p>
          </div>
        </div>
        <div className="flex flex-row gap-5 mt-8 sans-font">
          <div
            onClick={sendReadToLS}
            className="btn text-black font-semibold rounded-lg border border-[#1313134d] bg-white text-sm"
          >
            Read
          </div>
          <div
            onClick={sendWishToLS}
            className="btn text-white font-semibold rounded-lg border border-[#50B1C9] bg-[#50B1C9] text-sm"
          >
            Wishlist
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default BookDetails;
