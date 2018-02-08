import React, { Component } from 'react';
import './Dropdown.css';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.handleClickToClose = this.handleClickToClose.bind(this);
    this.state = {
      open: false,
      listenerTarget: document.getElementsByTagName('body')[0]
    };
  }
  toggleOpen(e) {
    const { listenerTarget } = this.state;
    listenerTarget.addEventListener('click', this.handleClickToClose);
    this.setState({ open: true });
  }
  handleClickToClose(e) {
    const { className, innerHTML } = e.target;
    const { listenerTarget } = this.state;
    if (className === 'validSelection') {
      const option = innerHTML > 0 ? parseInt(innerHTML, 10) : innerHTML;
      this.props.handleSelection(option);
    }
    setTimeout(() => {  // To handle case where user clicks dropdown button without making a selection
      listenerTarget.removeEventListener('click', this.handleClickToClose);
      this.setState({ open: false });
    }, 0);
  }
  render() {
    const { heading, customClass, options, selection } = this.props;
    const listItems = options.map(option => (
      <li className='validSelection' key={option}>{option}</li>
    ));

    return (
      <div>
        <div className={`option-group ${customClass}`}>
          <h2>{heading}:</h2>
          <button onClick={this.toggleOpen}>
            {selection} <i className='fas fa-sort-down' />
          </button>
        </div>

        {this.state.open && (
          <div className='dropdown-panel'>
            <ul className='list-unstyled'>{listItems}</ul>
          </div>)}
      </div>
    );
  }
}
