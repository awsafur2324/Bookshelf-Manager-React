import NoData from "../component/NoData";
import CommentCard from "../component/comment/CommentCard";
import { getData } from "../utility/localStote";

const TopComment = () => {
  const comments = getData("Comment");

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold p-5 bg-[#2e74921c] rounded-lg mt-2">
        Readers Reviews
      </h1>
      {comments.length == 0 ? (
        <NoData displayName="Reviews" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {comments.map((comment, id) => (
            <CommentCard key={id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopComment;
