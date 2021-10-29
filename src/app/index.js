/*
 * @Author: Chenyu Wang
 * @LastEditors: Chenyu Wang
 * @email: chenyu.wang96@outlook.com
 * @github: https://github.com/alina52
 * @Date: 2021-10-18 14:52:09
 * @LastEditTime: 2021-10-29 13:06:28
 */
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
