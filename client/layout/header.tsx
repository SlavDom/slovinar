import * as React from 'react';
import {Button, Box, Header as LibHeader, Anchor} from "grommet";
import * as Icons from 'grommet-icons';
import Router from "next/router";

export const Header = () => <LibHeader background='light-3' pad="small" >
    <Button icon={<Icons.Home />} hoverIndicator onClick={() => Router.push('/')} />
    <Box direction="row" gap="medium">
        <Anchor label="Test" href="/test" />
    </Box>
</LibHeader>;
