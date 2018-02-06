import React, { Component } from 'react';
import './Table.css';


export default class Table extends Component {
  render() {
    return (
      <div>
        <div className='table-header'>
          <section className='left'>
            <h1 className='table-heading'>List of Awesome</h1>
            <div className='option-group sort-by'>
              <h2>Sort by:</h2>
              <button>Last name <i className='fas fa-sort-down' /></button>
            </div>
          </section>

          <section className='right'>
            <div className='option-group items-per-page'>
              <h2>items per page:</h2>
              <button>10 <i className='fas fa-sort-down' /></button>
            </div>
            <div className='option-group pagination'>
              <h2>1-10 <span>of</span> 30</h2>
              <div>
                <button><i className='fas fa-chevron-left' /></button>
                <button><i className='fas fa-chevron-right' /></button>
              </div>
            </div>
          </section>
        </div>

        <div className='table-container'>
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Country</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Phone</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>John</td>
                <td>Snow</td>
                <td>The North</td>
                <td>18719 the Wall</td>
                <td>Winterfell</td>
                <td>WA</td>
                <td>98772</td>
                <td>425-123-4567</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
