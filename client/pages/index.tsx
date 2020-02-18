import React, {ChangeEvent, Component, useState} from 'react';
import styled from 'styled-components';
import {Box, Text, TextInput} from 'grommet';
import {useTranslation} from '../lib/hooks';
import {SearchInput} from "./../components/SearchInput";

const Title = styled.h1`
  font-size: 25px;
  color: ${({theme}) => theme.global.colors.focus};
`;

// const Title2 = styled(Title)`
//
// `;

export default function MainPage() {

    return <div>
        <Title>{useTranslation('search')}</Title>
        <SearchInput />
    </div>;
}
