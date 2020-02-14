import React, {ChangeEvent, Component, useState} from 'react';
import styled from 'styled-components';
import {Box, TextInput} from 'grommet';
import {useTranslation} from '../lib/hooks';
import Link from "next/link";

const Title = styled.h1`
  font-size: 50px;
  color: ${({theme}) => theme.global.colors.focus};
`;

export default function MainPage() {
    const [wordName, setWordName] = useState('');
    const addWord = useTranslation('addWord');

    return <div>
        <TextInput
            value={wordName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setWordName(e.target.value)}
        />
        <Link href={"/words/new"}>{addWord}</Link>
    </div>;
}
