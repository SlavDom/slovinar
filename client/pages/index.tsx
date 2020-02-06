import React, {ChangeEvent, Component, useState} from 'react';
import styled from 'styled-components';
import {Box, TextInput} from 'grommet';
import {useTranslation} from '../lib/hooks';

const Title = styled.h1`
  font-size: 50px;
  color: ${({theme}) => theme.global.colors.focus};
`;

export default function MainPage() {
    const [wordName, setWordName] = useState('');
    const prop = useTranslation('test');

    return <div>
        <TextInput
            value={wordName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setWordName(e.target.value)}
        />
        <Title>{prop}</Title>
    </div>;
}
