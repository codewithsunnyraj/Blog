import React, { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets";
import CommentTableItem from "../../component/admin/CommentTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");
  const { axios } = useAppContext();
  const fetchComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/comments");
      if (data.success) {
        setComments(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

 

  useEffect(() => {
    fetchComment();
  }, []);
  return (
    <div className="px-10 w-full">
      <div className="flex justify-between items-center my-10 ">
        <h1>Comments</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setFilter("Approved")}
            className={`shadow border rounded-full px-4 py-2 cursor-pointer ${
              filter === "Approved" ? "text-green-400" : "text-gray-500"
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter("Not Approved")}
            className={`shadow border rounded-full px-4 py-2 cursor-pointer ${
              filter === "Not Approved" ? "text-green-400" : "text-gray-500"
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>
      <table className="shadow w-full">
        <thead className="text-xs text-gray-700 text-left max-w-3xl uppercase">
          <tr>
            <th className="px-6 py-3">Blog Title & Comment</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="w-full ">
          <div className="w-full">
            {comments
              .filter((comment) => {
                if (filter === "Approved") return comment.isApproved === true;
                return comment.isApproved === false;
              })
              .map((comment, index) => (
                <CommentTableItem
                  comment={comment}
                  index={index + 1}
                  key={comment._id}
                  fetchComments={fetchComment}
                />
              ))}
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default Comment;
