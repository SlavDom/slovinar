import React, {ChangeEvent, Component, useState} from 'react';
import styled from 'styled-components';
import { Box, Text, TextInput} from 'grommet';
import {useTranslation} from '../lib/hooks';
import Link from "next/link";

const Title = styled.h1`
  font-size: 50px;
  color: ${({theme}) => theme.global.colors.focus};
`;

// const Title2 = styled(Title)`
//
// `;

export default function MainPage() {
    const [wordName, setWordName] = useState('');
    const addWord = useTranslation('addWord');

    return <div>
        <Text>{useTranslation('search')}</Text>
        <TextInput
            value={wordName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setWordName(e.target.value)}
        />
        {/*<Link href={"/words/new"}>{addWord}</Link>*/}
    </div>;
}
