import React from 'react';
import styled from 'styled-components';
import Characters from './components/Characters';

const WrapperCharacters = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <WrapperCharacters>
      <Characters />
    </WrapperCharacters>
  );
}

export default App;
