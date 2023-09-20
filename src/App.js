import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Header from './components/Header.js';

import RouteUser from './pages/Users/Route.js';

import RoutePost from './pages/Posts/Route.js';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users" component={RouteUser}  />
          <Route path="/posts" component={RoutePost} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
