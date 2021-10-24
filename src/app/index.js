import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import urls from 'src/config/Urls';
import Home from 'pages/home'
import List from 'pages/list'
import Item from 'pages/item'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Switch>          
          <Route exact path={urls.pageHome()}> <Home /> </Route>
          <Route path={urls.pageList()}> <List /> </Route>
          <Route path={urls.pageItem()}> <Item /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
