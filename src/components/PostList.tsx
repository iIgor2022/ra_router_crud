import useFetching from "../hooks/useFetching";
import { Card } from "../interfaces/card";
import Loader from "./Loader/Loader";
import PostRead from "./PostRead";


const PostList = () => {
  const url = 'http://localhost:7070/posts';
  const option = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const { data, error, loading } = useFetching(url, option);

  return (
    <div>
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
      {
        Array.isArray(data) && data.length > 0 &&
        data.map((item: Card) =>
          <PostRead key={item.id} post={item} />
        )
      }
    </div>
  )
}

export default PostList;