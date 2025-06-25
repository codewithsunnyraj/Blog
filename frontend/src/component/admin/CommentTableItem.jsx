import React from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);
  const { axios } = useAppContext();

  const approveComments = async () => {
    try {
      const { data } = await axios.post("/api/admin/approve", {
        id: _id,
      });
      console.log(data);

      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const deleteComment = async () => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this comment?"
      );
      if (!confirm) return;
      const { data } = await axios.delete("/api/admin/delete", {
        data: { id: _id },
      });
      if (data.success) {
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <tr className="border-gray-300 flex w-full justify-between">
        <td className="px-6 py-4">
          <b className="font-medium text-gray-600">blog</b>: {blog.title}
          <br />
          <b className="font-medium text-gray-600">Name</b>: {comment.name}
          <br />
          <b className="font-medium text-gray-600">Comment</b>:{" "}
          {comment.content}
        </td>
        <td className="px-6 py-4 max-sm:hidden">{BlogDate.toLocaleString()}</td>
        <td className="px-6 py-4">
          <div className="inline-flex items-center gap-4">
            {!comment.isApproved ? (
              <img
                src={assets.tick_icon}
                onClick={approveComments}
                className="w-5 cursor-pointer"
                alt=""
              />
            ) : (
              <p className="cursor-pointer">Approved</p>
            )}
            <img
              src={assets.bin_icon}
              className="w-5 hover:scale-95 transition-all cursor-pointer"
              alt=""
              onClick={deleteComment}
            />
          </div>
        </td>
      </tr>
    </div>
  );
};

export default CommentTableItem;
