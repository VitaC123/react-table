import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Spec from './wireframes/UI_UX_Specs_01.png';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <img
          style={{
            width: '100%',
            position: 'absolute',
            zIndex: '-1',
          }}
          src={Spec}
          alt='temp spec'
        /> */}

        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
