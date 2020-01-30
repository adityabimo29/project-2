import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import MainNavBar from './components/MainNavBar';
import PageProfile from './pages/PageProfile';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import PageHome from './pages/PageHome';

function App() {
  const isLogin = JSON.parse(localStorage.getItem('status'));
  console.log(isLogin);
  return (
    <div>
      <Router>
        <MainNavBar />
        <Switch>
          <Route exact path='/PageHome'>
            <PageHome />
          </Route>
          <Route exact path='/PageProfile'>
            <PageProfile />
          </Route>
          <Route exact path='/PageProfile'>
            {isLogin ? <PageProfile /> : <Redirect to='/PageAbout' />}
          </Route>
          <Route exact path='/SignIn'>
            <SignIn />
          </Route>
          <Route exact path='/Register'>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
