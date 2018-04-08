import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavDrawer from '../components/NavDrawer';
import {Header, Main} from '../styled/App';

injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='app'>
          <Header>
            React Tic Tac Toe
          </Header>
          <NavDrawer/>
          <Main>
            {this.props.children}
          </Main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
