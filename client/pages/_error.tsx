import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.global.colors.focus};
`;

export default () => <Title>Ошибка</Title>