import React from 'react';
import styled from 'styled-components';
import deadIcon from '../../icons/dead.svg';
import aliveIcon from '../../icons/alive.svg';
import unknownIcon from '../../icons/unknown.svg';
import { Status } from '../../store/characters/characters';

interface IStatusProps {
  status: Status
}

const iconByStatus = {
  Dead: deadIcon,
  Alive: aliveIcon,
  unknown: unknownIcon,
};

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export default function StatusIcon(props: IStatusProps) {
  const { status } = props;
  return <Icon src={iconByStatus[status]} alt={status} />;
}
