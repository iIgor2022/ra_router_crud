import { useNavigate } from "react-router-dom";
import PostList from "../components/PostList";

const PostsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="posts__add">
        <button
          onClick={() => navigate('../posts/new')}
        >
          Создать пост
        </button>
      </div>
      <PostList />
    </>
  )
}

export default PostsPage;