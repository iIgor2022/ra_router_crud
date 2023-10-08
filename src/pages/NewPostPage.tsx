import { useState } from "react";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handlerSubmit = () => {
    if (!content.trim()) return navigate('/posts');

    fetch('http://localhost:7070/posts', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 0,
        content: content.trim()
      })
    });

    navigate('/posts');
  };

  return (
    <div className="new-post">
      <div className="new-post__options">
        <span>Новое сообщение</span>
        <button
          onClick={() => navigate('/posts')}
        >
          <AiOutlineClose size={30} />
        </button>
      </div>
      <div className="new-post__content">
        <textarea
          onChange={el => setContent(el.target.value)}
          value={content}
        ></textarea>
      </div>
      <div className="new-post__submit">
        <button
          onClick={handlerSubmit}
        >
          <AiOutlineSend size={30} />
        </button>
      </div>
    </div>
  )
};

export default NewPost;