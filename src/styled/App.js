import React from 'react';
import styled from 'styled-components';

export const Header = styled.header`
  text-align: center;
  font-size: 2em;
  font-family: 'Roboto', sans-serif;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 80%;
  min-height: 80vh;
  @media (max-width: 800px) {
    width: 100%;
  }
`

export const Main = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
}
