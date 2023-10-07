import React from "react"
import { Card } from "../interfaces/card"
import { useNavigate } from "react-router-dom"
import PostItem from "./PostItem"
import { AiOutlineComment, AiOutlineLike } from "react-icons/ai"


type PostReadProps = {
  post: Card
}

const PostRead: React.FC<PostReadProps> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <PostItem
      created={post.created}
      content={
        <div
          className="post__row post__content"
          onClick={() => navigate(`/ra_routes_crud/posts/${post.id}`)}
        >
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
        </>
      }
    />
  )
}

export default PostRead;