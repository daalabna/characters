import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';
import CharacterList from './CharacterList';
import ControlPanel from './ControlPanel/ControlPanel';
import storeParams from '../store/queryParams';
import storeCharacters from '../store/characters/characters';

const Container = styled.div`
  margin: 50px;
`;

const handleChange = (key: string, value: string) => {
  if (key !== 'page') {
    storeParams.update({
      [key]: value,
      page: '1',
    });
  }
  storeParams.update({
    [key]: value,
  });
};

const addFavorite = storeCharacters.addFavorite.bind(storeCharacters);
const deleteFavorite = storeCharacters.deleteFavorite.bind(storeCharacters);

function Characters() {
  const { pages } = storeCharacters.info;
  useEffect(() => {
    storeCharacters.fetch(storeParams.queryParams);
  }, [storeParams.queryParams]);
  return (
    <Container>
      <ControlPanel queryParams={storeParams.queryParams} updateQuery={handleChange} />
      <CharacterList
        characters={storeCharacters.characters}
        addFavorite={addFavorite}
        deleteFavorite={deleteFavorite}
        favorites={storeCharacters.favoriteCharacters}
      />
      <Pagination
        count={Number(pages)}
        page={+storeParams.queryParams.page}
        color="primary"
        onChange={(event, page) => { handleChange('page', page.toString()); }}
      />
    </Container>
  );
}

export default observer(Characters);
