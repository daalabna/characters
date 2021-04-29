import React from 'react';
import { ICharacter } from '../store';
import Character from './Character/Character';

interface ICharactersProps {
   characters: ICharacter[]
}

export default function CharacterList(props: ICharactersProps) {
  const { characters } = props;
  return (
    <div>
      {
        characters.map((character) => (
          <Character key={character.id} character={character} />
        ))
      }
    </div>
  );
}
