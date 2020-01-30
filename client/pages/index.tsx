import React from 'react';
import styled from 'styled-components';
import {Box} from 'grommet';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => <Box><Title>My page</Title></Box>;