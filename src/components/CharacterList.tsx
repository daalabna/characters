import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { ICharacter } from '../store/characters/characters';
import Character from './Character/Character';

const CharacterWrapper = styled.div`
  margin-top: 10px
`;

interface ICharactersProps {
    characters: ICharacter[]
    favorites: number[]
    // eslint-disable-next-line no-unused-vars
    addFavorite: (id: number) => void
    // eslint-disable-next-line no-unused-vars
    deleteFavorite: (id: number) => void
}

function CharacterList(props: ICharactersProps) {
  const {
    characters, favorites, addFavorite, deleteFavorite,
  } = props;
  return (
    <CharacterWrapper>
      {
        characters.map((character) => (
          <Character
            key={character.id}
            character={character}
            isFavorite={favorites.includes(character.id)}
            addFavorite={addFavorite}
            deleteFavorite={deleteFavorite}
          />
        ))
      }
    </CharacterWrapper>
  );
}

export default observer(CharacterList);
