import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Error404 from './components/Error404';
import Header from './components/Header';
import TicketList from './components/TicketList';
import NewTicketForm from './components/NewTicketForm';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList}/>
        <Route path='/newticket' component={NewTicketForm}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
