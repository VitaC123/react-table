import React, { Component } from 'react';
import mockAjaxResponse from '../../MOCK_DATA.json';
import sortHelper from './sortHelper';
import Dropdown from './Dropdown';
import Row from './Row';
import './Table.css';


export default class Table extends Component {
  constructor(props) {
    super(props);
    this.makeDropdownSelection = this.makeDropdownSelection.bind(this);
    this.changePage = this.changePage.bind(this);
    this.state = {
      list: [],
      sortBy: 'last name',
      itemsPerPage: 10,
      display: { min: 1, max: 10 }
    };
  }
  componentDidMount() {
    this.setState({
      list: sortHelper.sortList(mockAjaxResponse, 'last name')
    });
  }
  makeDropdownSelection(option) {
    const { sortBy, list } = this.state;

    // Toggles acceding/descending
    if (option === sortBy) {
      return this.setState({ list: list.reverse() });
    }

    // Items per page
    if (typeof option === 'number') {
      const { min } = this.state.display;
      if (option + min > list.length) {
        return this.setState({
          itemsPerPage: option,
          display: { min: list.length - option + 1, max: list.length }
        });
      }
      return this.setState({
        itemsPerPage: option,
        display: { min, max: min + option - 1 }
      });
    }

    // Sort by
    this.setState({
      list: sortHelper.sortList(this.state.list, option),
      sortBy: option
    });
  }
  changePage(action) {
    const { itemsPerPage, list } = this.state;
    const { min, max } = this.state.display;

    if (action === 'next') {
      if (max + itemsPerPage > list.length) {
        return this.setState({
          display: { min: list.length - itemsPerPage + 1, max: list.length }
        });
      }
      this.setState({
        display: { min: min + itemsPerPage, max: max + itemsPerPage }
      });
    }

    if (action === 'previous') {
      if (min - itemsPerPage < 1) {
        return this.setState({
          display: { min: 1, max: itemsPerPage }
        });
      }
      this.setState({
        display: { min: min - itemsPerPage, max: max - itemsPerPage }
      });
    }
  }
  render() {
    const { list, display, sortBy, itemsPerPage } = this.state;
    const columns = ['first name', 'last name', 'country', 'address', 'city', 'state', 'zip', 'phone'];

    const tableHeadings = columns.map(column => (
      <th
        className={column === 'address' ? 'table-heading extra-wide' : 'table-heading'}
        onClick={() => this.makeDropdownSelection(column)}
        key={column}
      >
        {column}
      </th>
    ));

    const rows = list.slice(display.min - 1, display.max).map(customer => (
      <Row {...customer} key={customer.phone} />
    ));

    return (
      <div>
        <div className='table-header'>
          <section className='left'>
            <h1 className='table-header-text'>List of Awesome</h1>
            <Dropdown
              heading='Sort by'
              customClass='sort-by'
              options={columns}
              handleSelection={this.makeDropdownSelection}
              selection={sortBy}
            />
          </section>

          <section className='right'>
            <Dropdown
              heading='items per page'
              customClass='items-per-page'
              options={[5, 10, 25, 50, 75, 100]}
              handleSelection={this.makeDropdownSelection}
              selection={itemsPerPage}
            />
            <div className='option-group pagination'>
              <h2>{display.min}-{display.max} <span>of</span> {list.length}</h2>
              <div>
                <button
                  className='button-transparent'
                  onClick={() => this.changePage('previous')}
                >
                  <i className='fas fa-chevron-left' />
                </button>
                <button
                  className='button-transparent'
                  onClick={() => this.changePage('next')}
                >
                  <i className='fas fa-chevron-right' />
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className='table-container'>
          <table>
            <thead>
              <tr className='table-head-row'>
                {tableHeadings}
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
