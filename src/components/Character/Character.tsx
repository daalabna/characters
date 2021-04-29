import React from 'react';
import styled from 'styled-components';
import { ICharacter } from '../../store';
import Avatar from './Avatar';
import Gender from './Gender';
import Status from './Status';

interface ICharacterProps {
    character: ICharacter
}

const CharacterWrapper = styled.div`
  display: flex;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Character(props: ICharacterProps) {
  const { character } = props;
  return (
    <CharacterWrapper>
      <Avatar image={character.image} name={character.name} />
      <IconsWrapper>
        <Gender gender={character.gender} />
        <Status status={character.status} />
      </IconsWrapper>
    </CharacterWrapper>
  );
}
