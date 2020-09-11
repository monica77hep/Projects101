import React from 'react';
import './App.css';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Layout/Navbar';
import NotFound from './Components/Pages/NotFound';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddUser from './Users/AddUsers';
import EditUser from './Users/EditUser';
import Users from './Users/Users';

function App(props) {
  return (
    <Router>
      <div className='linear App'><Navbar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/users/add' component={AddUser}></Route>
          <Route exact path='/users/edit/:id' component={EditUser}></Route>
          <Route exact path='/users/:id' component={Users}></Route>
          <NotFound component={NotFound} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
