import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Navbar from './component/NavBar';
import Register from './pages/Register';
import SignIn from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Api from './pages/Api';
import Free from './pages/Free';

function App() {
  const isLogin = JSON.parse(localStorage.getItem('status'));
  console.log(isLogin);
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/Profile'>
          {isLogin ? <Profile /> : <Redirect to='/' />}
          </Route>
          <Route  path='/Api'>
            {isLogin ? <Api /> : <Redirect to='/' />}
          </Route>
          <Route  path='/Free'>
            {isLogin ? <Free /> : <Redirect to='/' />}
          </Route>
          <Route  path='/Login'>
            <SignIn />
          </Route>
          <Route  path='/Register'>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
