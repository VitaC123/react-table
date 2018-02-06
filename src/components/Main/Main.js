import React, { Component } from 'react';
import Table from '../Table/Table';
import './Main.css';


export default class Main extends Component {
  render() {
    return (
      <div className='main-body'>
        <header>
          <nav>
            <div className='nav-placeholder' />
          </nav>
        </header>

        <main className='main-content'>
          <Table />
        </main>

        <footer className='main-footer'>
        </footer>
      </div>
    );
  }
}
