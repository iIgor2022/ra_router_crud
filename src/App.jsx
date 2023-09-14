import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import uniqid from 'uniqid';
import './App.css';
import CreatePost from './components/createPost';
import Post from './components/post';
import PostView from './components/postView';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7070/posts").then(response => setData(response.data));
  }, []);

  return (
    <div className='app'>
      <Router>
        <Link to="/posts">
          <button className="button">Домашняя страница</button>
        </Link>
        <Link to="/posts/new">
          <button className="button">Создать пост</button>
        </Link>
        <Switch>
          <Route path="/posts/new" exact component={CreatePost}/>
          <Route path="/posts/:id" exact component={PostView}/>
          <Route
            path="/posts"
            exact
            component={() => data.map(post => <Post key={uniqid()} post={post}/>)}
          />
        </Switch>
      </Router>
    </div>
  );
}