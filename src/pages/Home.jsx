/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import Banner from "../component/home/Banner";
import Books from "../component/home/Books";
import { createContext } from "react";

export const booksContext = createContext([]);

const Home = () => {
  localStorage.removeItem('bookDetails');
  const books = useLoaderData();


  return (
    <div className="container mt-2 mx-auto">
      <booksContext.Provider value={books}>
        <Banner />
        <Books />
      </booksContext.Provider>
    </div>
  );
};

export default Home;
