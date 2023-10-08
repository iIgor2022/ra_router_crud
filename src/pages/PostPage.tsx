import { useNavigate, useParams } from "react-router-dom";
import useFetching from "../hooks/useFetching";
import PostItem from "../components/PostItem";
import CloseButton from "../components/CloseButton";
import { AiFillDelete, AiFillEdit, AiOutlineComment, AiOutlineLike } from "react-icons/ai";
import Loader from "../components/Loader/Loader";

const PostPage = () => {
  const { postId } =  useParams();
  const navigate = useNavigate();
  const url = `http://localhost:7070/posts/${postId}`;
  const option = {
    headers: {
      "Content-Type": "application/json"
    }
  }
  const { data, error, loading } = useFetching(url, option);
  const post = data && !Array.isArray(data) && data.post;

  const deletePost = () => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => navigate(-1));
  }

  return (
    <div>
      {
        post &&
          <PostItem
            created={post.created}
            close={<CloseButton />}
            content={
              <div className="post__row post__content">
                {post.content}
              </div>
            }
            reaction={
              <>
                <button>
                  <AiOutlineLike size={30} />
                </button>
                <button>
                  <AiOutlineComment size={30} />
                </button>
                <button
                  className="post__edit"
                  onClick={() => navigate(`/posts/edit/${postId}`)}
                >
                  <AiFillEdit size={30} />
                </button>
                <button
                  className="post__delete"
                  onClick={deletePost}
                >
                  <AiFillDelete size={30} />
                </button>
              </>
            }
          />
      }
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
    </div>
  )
}

export default PostPage;