import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import charactersStore, { ICharacter } from '../store';
import CharacterList from './CharacterList';

interface ICharactersProps {
  store: {
    characters: ICharacter[]
  }
}

function Characters(props: ICharactersProps) {
  const { store: { characters } } = props;

  useEffect(() => {
    charactersStore.fetch();
  }, []);

  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
}

export default observer(Characters);
