import { useNavigate } from "react-router-dom";
import nodata from "../assets/nodata.png";
import PropTypes from "prop-types";

const NoData = ({ displayName = "Read" }) => {
  const navigate = useNavigate();
  const linktoHome = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-start items-start mx-auto w-72">
      <img src={nodata} alt="" />
      {displayName == "Read" ? (
        <button
          onClick={linktoHome}
          className="mt-2 border mx-auto relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            {displayName} Books Here
          </span>
        </button>
      ) : (
        <button className="mt-2 border mx-auto relative px-5 py-2 font-medium text-white group">
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
          <span className="relative">No {displayName} Found </span>
        </button>
      )}
    </div>
  );
};
NoData.propTypes = {
  displayName: PropTypes.any,
};
export default NoData;
