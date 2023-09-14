import axios from "axios";
import { useState, useEffect } from "react";

export default function PostView({ match }) {
  const [post, setPost] = useState("");
  const id = match.params.id;

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL).then(res => res.data.find(d => d.id == id)).then(p => setPost(p.content))
  }, [id]);

  return (
    <div className="card">
      {post}
    </div>
  );
}