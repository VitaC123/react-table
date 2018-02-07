import React, { Component } from 'react';
import './Dropdown.css';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false
    };
  }
  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const { heading, customClass, options, selection } = this.props;
    const listItems = options.map(option => (
      <li key={option} onClick={() => { this.props.handleSelection(option); this.toggle(); }}>{option}</li>
    ));

    return (
      <div>
        <div className={`option-group ${customClass}`}>
          <h2>{heading}:</h2>
          <button onClick={this.toggle}>
            {selection} <i className='fas fa-sort-down' />
          </button>
        </div>

        {this.state.open && (
          <div className='dropdown-panel'>
            <ul>{listItems}</ul>
          </div>)}
      </div>
    );
  }
}
