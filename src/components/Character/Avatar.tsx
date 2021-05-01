import React from 'react';
import styled from 'styled-components';

interface IAvatar {
    image: string,
    name: string
}

const Figure = styled.figure`
  position: relative;
  margin-left: 0px;
`;

const Image = styled.img`
  width: 200px;
`;

const NameCharacter = styled.figcaption`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  background: gray;
  opacity: 0.7;
`;

export default function Avatar(props: IAvatar) {
  const { image, name } = props;
  return (
    <Figure>
      <Image alt={name} src={image} />
      <NameCharacter>{name}</NameCharacter>
    </Figure>
  );
}
