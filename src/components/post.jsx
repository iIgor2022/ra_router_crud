export default function Post({ post }) {
  return (
    <div className="card">
      <div className="close"></div>
      <img src="https://placeholder.com/200" alt="avatar" className="avatar" />
      <div className="author">Author: Lorem</div>
      <div>Created: {post.created}</div>
      <h1>{post.content}</h1>
    </div>
  )
}