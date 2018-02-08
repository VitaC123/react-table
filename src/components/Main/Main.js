import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Table from '../Table/Table';
import './Main.css';


const Main = () => (
  <div className='main-body'>
    <header>
      <Nav pages={['nav item 1', 'nav item 2', 'nav item 3']} activePage={window.location.pathname} />
    </header>

    <main className='main-content'>
      <Switch>
        <Route path='/' exact={true} component={Table} />
        <Route path='/nav-item-1' component={Table} />
        <Route path='/nav-item-2' render={() => <h1>Nav item 2</h1>} />
        <Route path='/nav-item-3' render={() => <h1>Nav item 3</h1>} />
        <Route render={() => <h1>404 - Not found</h1>} />
      </Switch>
    </main>

    <footer className='main-footer'>
    </footer>
  </div>
);

export default Main;
