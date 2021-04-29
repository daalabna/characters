import React from 'react';
import styled from 'styled-components';

interface IAvatar {
    image: string,
    name: string
}

const Figure = styled.figure`
  position: relative;
`;

const NameCharacter = styled.figcaption`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
`;

export default function Avatar(props: IAvatar) {
  const { image, name } = props;
  return (
    <Figure>
      <img alt={name} src={image} />
      <NameCharacter>{name}</NameCharacter>
    </Figure>
  );
}
