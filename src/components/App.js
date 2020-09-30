import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from './PostsIndex';
import PostsNew from './PostsNew';
import Post from './Post';
import '../style/style.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={Post}/>
          <Route path="/" exact component={PostsIndex} />
        </Switch>        
      </div>
    </BrowserRouter>
  );
}

export default App;
