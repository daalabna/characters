import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import styled from 'styled-components';
import { ICharacter } from '../../store/characters/characters';
import Avatar from './Avatar';
import Gender from './Gender';
import Status from './Status';

interface ICharacterProps {
    character: ICharacter
    // eslint-disable-next-line no-unused-vars
    addFavorite: (id: number) => void
    // eslint-disable-next-line no-unused-vars
    deleteFavorite: (id: number) => void
    isFavorite: boolean
}

const CharacterWrapper = styled.div`
  position: relative;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 10px;
  padding: 10px;
`;

const IconsWrapper = styled.div`
  display: flex;
  justifyContent: center;
  alignItems: center;
`;

const Params = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Toggle = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
`;

export default function Character(props: ICharacterProps) {
  const {
    character, addFavorite, deleteFavorite, isFavorite,
  } = props;
  return (
    <CharacterWrapper>
      <div>
        <h2>Charachter</h2>
        <Avatar image={character.image} name={character.name} />
      </div>
      <IconsWrapper>
        <Params>
          <p>Gender</p>
          <Gender gender={character.gender} />
        </Params>
        <Params>
          <p>Status</p>
          <Status status={character.status} />
        </Params>
      </IconsWrapper>
      <Toggle>
        {isFavorite
          ? <StarIcon onClick={() => deleteFavorite(character.id)} />
          : <StarBorderIcon onClick={() => addFavorite(character.id)} />}
      </Toggle>
    </CharacterWrapper>
  );
}
