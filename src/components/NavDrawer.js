import React, {Component} from 'react';
import {Link} from 'react-router';
import {Drawer, Divider, MenuItem} from 'material-ui';
import {NavToggleButton} from '../styled/NavDrawer'

class NavDrawer extends Component {
  state = {
    open: false,
    width: 200
  }

  handleToggle = () => {
    this.setState((prevState) => {
      return {
        open: !prevState.open
      }
    });
  }

  render() {
    return (
      <div>
        <NavToggleButton
          handleToggle={this.handleToggle}
          width={this.state.width}
          open={this.state.open}
        />
        <Drawer
          open={this.state.open}
          width={this.state.width}
        >
          <div style={{
            height: 200,
            weight: '100%',
            backgroundColor: 'aqua'
          }}>
            Login Container
          </div>
          <Divider/>
          <Link to={'/'}>
            <MenuItem
              onTouchTap={this.handleToggle}
              primaryText={'Play'}
            />
          </Link>
          <Link to={'/profile'}>
            <MenuItem
              onTouchTap={this.handleToggle}
              primaryText={'Profile'}
            />
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default NavDrawer;
