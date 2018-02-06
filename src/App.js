import React, { Component } from 'react';
import Main from './components/Main/Main';
import Spec from './wireframes/UI_UX_Specs_01.png';

class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
