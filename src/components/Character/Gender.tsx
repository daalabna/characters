import React from 'react';
import styled from 'styled-components';
import femaleIcon from '../../icons/girl.svg';
import maleIcon from '../../icons/boy.svg';
import unknownGender from '../../icons/unknownGender.svg';
import genderless from '../../icons/genderless.svg';
import { Gender } from '../../store/characters/characters';

interface IGenderProps {
    gender: Gender
}

const iconByGender = {
  Male: maleIcon,
  Female: femaleIcon,
  unknown: unknownGender,
  Genderless: genderless,
};

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export default function GenderIcon(props: IGenderProps) {
  const { gender } = props;
  return <Icon src={iconByGender[gender]} alt={gender} />;
}
