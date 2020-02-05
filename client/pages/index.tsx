import React, {ChangeEvent, Component} from 'react';
import styled from 'styled-components';
import {Box, TextInput} from 'grommet';
import {withTranslation} from 'react-i18next';
import {WithTranslation} from 'next-i18next';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.global.colors.focus};
`;

class MainPage extends Component<WithTranslation> {
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
            {this.props.t('test')}
        </div>
    }
}

export default withTranslation('common')(MainPage);
