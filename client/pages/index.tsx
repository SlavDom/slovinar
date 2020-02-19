import React from 'react';
import { Box } from 'grommet';
import { useTranslation } from '../lib/hooks';
import { SearchInput } from './../components/SearchInput';
import Title from "../components/title";

export default function MainPage() {
  return <div>
    <Box align="center" background="light-1" pad="medium">
      <Title>{useTranslation('search')}</Title>
      <SearchInput/>
    </Box>
  </div>;
}
