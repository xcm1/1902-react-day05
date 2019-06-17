import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Home from '@/views/Home';
import Kind from '@/views/Kind';
import Cart from '@/views/Cart';
import User from '@/views/User';

import '../main.scss';
function App() {
  return (
    <div className = "container">
      <Switch>
        <Route path = '/home' component = { Home } />
        <Route path = '/kind' component = { Kind } />
        <Route path = '/cart' component = { Cart } />
        <Route path = '/user' component = { User } />
        <Redirect to = '/home'/>
      </Switch>
      <footer className = "footer">
        <ul>
        <NavLink to = "/home">
            <span className="iconfont icon-index-copy"></span>
            <p>首页</p>
          </NavLink>
          <NavLink to = "/kind">
            <span className="iconfont icon-classify-red"></span>
            <p>分类</p>
          </NavLink>
          <NavLink to = "/cart">
            <span className="iconfont icon-gouwuche"></span>
            <p>购物车</p>
          </NavLink>
          <NavLink to = "/user">
            <span className="iconfont icon-mine"></span>
            <p>我的</p>
          </NavLink>
          
        </ul>
      </footer>
    </div>
  );
}

export default App;
