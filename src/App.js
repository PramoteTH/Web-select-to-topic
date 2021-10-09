import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Upload from './components/pages/Upload';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import HomeLogin from './components/pages/HomeLogin';
import Dashboard from './components/pages/Dashboard';
import { AuthProvider } from './components/pages/Auth';


function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Upload' component={Upload} />
          <Route path='/products' component={Products} />
          <Route path='/Home' component={HomeLogin} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path='/Dashboard' component={Dashboard} />
        </Switch>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
