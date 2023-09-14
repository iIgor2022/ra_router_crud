import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CreatePost() {
  const [postText, setPostText] = useState("");
  const handleChange = (ev) => {
    const text = ev.target.value;

    setPostText(text);
  };

  const handleClick = () => {
    const newNote = { id: 0, content: postText };

    axios.post("http://localhost:7070/posts", newNote);
  };

  return (
    <div className="card">
      <h1>Create post</h1>
      <textarea cols="50" rows="6" onChange={handleChange}></textarea>
      <Link to="/posts" onClick={handleClick}>
        <button className="button">Опубликовать</button>
      </Link>
    </div>
  );
}