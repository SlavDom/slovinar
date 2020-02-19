import * as React from 'react';
import styled from 'styled-components';

const Title = styled.span`
  font-size: 25px;
  color: ${({ theme }) => theme.global.colors.brand};
  display: inline-block;
  padding: 5px 10px;
`;

export default Title