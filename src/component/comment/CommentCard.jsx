import PropTypes from "prop-types";
import {GiWhiteBook } from "../../../node_modules/react-icons/gi";
import { VscPreview } from "../../../node_modules/react-icons/vsc";
import { TbUserEdit } from "../../../node_modules/react-icons/tb";
import { FaStar } from "../../../node_modules/react-icons/fa";
const CommentCard = ({ comment }) => {
  return (
    <div className="hover:shadow-lg flex flex-col p-1 mx-auto justify-center items-stretch bg-[#132f390b] rounded-lg min-w-64">
      <div className="bg-white p-2 rounded-lg ">
        <h1 className="flex flex-row justify-start items-center text-xl font-semibold playfair-font mb-1 gap-1">
         <GiWhiteBook className=" text-[#176B87]"/> {comment.bookName}
        </h1>
        <div className="border-dashed border-b border-b-slate-400 w-[95%] mx-auto"></div>
        <h2 className="sans-font text-justify my-3 text-gray-800 text-sm flex flex-row justify-start items-center gap-1">
         <VscPreview className=" text-[#3D3B40] text-base" /> <span className="font-semibold text-sm">Review :</span> {comment.review}
        </h2>
        <div className="flex flex-row justify-between items-center my-1 sans-font text-sm">
          <p className="flex flex-row justify-start items-center gap-1 "><TbUserEdit className="text-[#3D3B40]"/>{comment.userName}</p>
          <p className="text-green-600 flex flex-row justify-start items-center gap-1 p-1">{comment.bookRating}<FaStar /></p>
        </div>
      </div>
    </div>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.object,
};
export default CommentCard;
