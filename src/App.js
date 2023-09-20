import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import IndexPosts from './pages/Posts/Index.js';
import IndexUsers from './pages/Users/Index.js';
import Header from './components/Header.js';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users" component={IndexUsers} />
          <Route path="/posts" component={IndexPosts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;