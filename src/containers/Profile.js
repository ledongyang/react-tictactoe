import React, {Component} from 'react';
import {Container, Name, GameListHeader, GameList, Column, ColumnLabels, GameRecord} from '../styled/Profile';

class Profile extends Component {
  static defaultProps = {
    user: {
      email: 'USER_EMAIL',
      games: [
        {
          winner: true,
          createdAt: '12/25/2016',
          id: '0001'
        },
        {
          winner: true,
          createdAt: '12/26/2016',
          id: '0002'
        },
        {
          winner: true,
          createdAt: '12/27/2016',
          id: '0003'
        },
      ]
    }
  }

  render() {
    let {email} = this.props.user;
    return (
      <Container>
        <Name>{email}</Name>
        <GameList>
          <GameListHeader>
            My Games
          </GameListHeader>
          <ColumnLabels>
            <Column>Outcome</Column>
            <Column>Guess</Column>
            <Column>Guess Correctly</Column>
            <Column>Date</Column>
          </ColumnLabels>
            {this.props.user.games.map((game, index) => {
              return (
                <GameRecord key={index}>
                  <Column>{game.winner ? 'Win' : 'Lose'}</Column>
                  <Column>Robot</Column>
                  <Column>Yes</Column>
                  <Column>{game.createdAt}</Column>
                </GameRecord>
              );
            })}
        </GameList>
      </Container>
    );
  }
}

export default Profile;
