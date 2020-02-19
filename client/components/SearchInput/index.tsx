import * as React from 'react';
import {Box, TextInput} from "grommet";
import styled from 'styled-components';
import {ChangeEvent} from "react";
import {Search} from "grommet-icons";
import {useState} from "react";

export const SearchInput = function () {
    const [wordName, setWordName] = useState('');

    return <Box width="medium"
                direction="row"
                align="center"
                pad={{horizontal: "small", vertical: "xsmall"}}
                round="small"
                background={'white'}
                border={{
                    side: "all",
                    color: "border"
                }}>
        <TextInput
            value={wordName}
            plain
            placeholder="Enter slovo..."
            onChange={(e: ChangeEvent<HTMLInputElement>) => setWordName(e.target.value)}
        />
        <Search color="brand"/>
    </Box>;
}
