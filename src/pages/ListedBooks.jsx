import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const ListedBooks = () => {
  localStorage.removeItem("bookDetails");

  const allBooks = useLoaderData();

  const [check, setCheck] = useState(0);

  const [rating, setRating] = useState(false);
  const [page, setPage] = useState(false);
  const [year, setYear] = useState(false);

  return (
    <div className="container mx-auto mt-2">
      <h1 className="w-full text-center p-8 bg-[#1313130d] rounded-xl font-bold sans-font text-3xl">
        Books List
      </h1>
      <div className="flex justify-center mx-auto mt-5">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className=" m-1">
            <div className="inline-flex font-semibold items-center divide-x rounded bg-[#23BE0A] dark:text-gray-100 dark:divide-gray-300">
              <button type="button" className="px-8 py-3">
                Sort By
              </button>
              <button type="button" title="Toggle dropdown" className="p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-1"
          >
            <li>
              <button
                onClick={() => {
                  setRating(true);
                  setPage(false);
                  setYear(false);
                }}
                className="rounded-lg"
              >
                {" "}
                By Rating
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setRating(false);
                  setPage(true);
                  setYear(false);
                }}
                className="rounded-lg"
              >
                {" "}
                By Pages
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setRating(false);
                  setPage(false);
                  setYear(true);
                }}
                className="rounded-lg"
              >
                {" "}
                By Published year
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* tabs */}
      <div className="flex flex-row justify-start mt-5">
        <Link
          to=""
          onClick={() => setCheck(0)}
          className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            check === 0 ? "border border-b-0" : "border-b"
          }  `}
        >
          <span>Read Book</span>
        </Link>
        <Link
          to="wish"
          onClick={() => setCheck(1)}
          className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            check === 1 ? "border border-b-0" : "border-b"
          }  `}
        >
          <span>Wishlist</span>
        </Link>

        <div className="border-b w-full "></div>
      </div>
      <Outlet context={[allBooks, rating, page, year , setCheck]} />
    </div>
  );
};

export default ListedBooks;
