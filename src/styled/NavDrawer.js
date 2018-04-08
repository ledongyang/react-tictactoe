import React from 'react';
import styled from 'styled-components';
import {FloatingActionButton} from 'material-ui';
import Menu from 'material-ui/svg-icons/navigation/menu';

const StayVisible = styled.div`
  position: absolute;
  margin-left: ${(props) => (props.open ? `${props.width}px` : 'none')};
  transition: margin 0.2s;
  z-index: 1;
`

export const NavToggleButton = (props) => {
  return (
    <StayVisible {...props}>
      <FloatingActionButton
        onTouchTap={props.handleToggle}
      >
        <Menu/>
      </FloatingActionButton>
    </StayVisible>
  );
}
