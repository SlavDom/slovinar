import React, {ChangeEvent, Component} from 'react';
import styled from 'styled-components';
import {Box, TextInput} from 'grommet';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.global.colors.focus};
`;

export default class MainPage extends Component {
    public state = {
        wordName: '',
    };

    private onChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            wordName: e.target.value,
        });
    }

    public render() {
        return <div>
            <TextInput
                value={this.state.wordName}
                onChange={this.onChange}
            />
        </div>
    }
}