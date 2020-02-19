import * as React from 'react';
import {Box, Nav, Anchor} from "grommet";
import {useTranslation} from "../../lib/hooks";
import MyLink from "../../components/myLink";

const Sidebar = props => {

    return <Box gridArea="sidebar" background="brand">
        <Nav>
            {props.menu.map((item: any, index) => (
              <Box key={index} pad="small">
                <Anchor
                    as={MyLink}
                    href={item.href}
                    label={useTranslation(item.label)}
                    color={'white'}
                    alignSelf={'center'}
                />
              </Box>
            ))}
        </Nav>
    </Box>;
};

export default Sidebar