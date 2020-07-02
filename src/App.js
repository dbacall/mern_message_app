import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AddPost from './components/AddPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/" className="home-btn">
          Home
        </Link>
        <Link to="/add" className="add-post-btn">
          Add Post
        </Link>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={AddPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
