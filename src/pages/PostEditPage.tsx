import { useParams } from "react-router-dom";
import useFetching from "../hooks/useFetching";
import PostEdit from "../components/PostEdit";

const PostEditPage = () => {
  const { postId } = useParams();
  const url = `http://localhost:7070/posts/${postId}`;
  const option = {
    headers: {
      "Content-Type": "application/json"
    }
  }
  const { data } = useFetching(url, option);
  const post = data && !Array.isArray(data) && data.post;

  return (
    post && <PostEdit post={post} />
  )
}

export default PostEditPage;