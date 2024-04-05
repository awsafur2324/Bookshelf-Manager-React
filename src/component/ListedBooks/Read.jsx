import CommonBookCard from "./CommonBookCard";
import { getData } from "../../utility/localStote";
import { useOutletContext } from "react-router-dom";
import NoData from "../NoData";

const Read = () => {
  const [allBooks, rating, page, year] = useOutletContext();

  const readList = getData("ReadList");
  const readArray = [];
  for (let i = 0; i < readList.length; i++) {
    for (let j = 0; j < allBooks.length; j++) {
      if (readList[i] == allBooks[j].bookId) {
        readArray.push(allBooks[j]);
      }
    }
  }

  if (rating) {
    readArray.sort((a, b) =>
      a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0
    );
  }
  if (page) {
    readArray.sort((a, b) =>
      a.totalPages < b.totalPages ? 1 : a.totalPages > b.totalPages ? -1 : 0
    );
  }
  if (year) {
    readArray.sort((a, b) =>
      a.yearOfPublishing < b.yearOfPublishing
        ? 1
        : a.yearOfPublishing > b.yearOfPublishing
        ? -1
        : 0
    );
  }

  return (
    <div className="mt-5 flex flex-col gap-5">
      {/* individual card */}

      {readList.length == 0 ? (
        <NoData />
      ) : (
        readArray.map((book) => (
          <CommonBookCard key={book.bookId} book={book} />
        ))
      )}
    </div>
  );
};

export default Read;
