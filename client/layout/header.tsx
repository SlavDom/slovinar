import * as React from 'react';
import { Button, Box, Header as LibHeader, Nav, Anchor } from 'grommet';
import * as Icons from 'grommet-icons';
import Router from 'next/router';
import { useTranslation } from '../lib/hooks';
import MyLink from '../components/myLink';

const Header = props => {

  return <Box gridArea="header">
    <LibHeader background='neutral-2'>
      <Button icon={<Icons.Home/>} hoverIndicator onClick={() => Router.push('/')}/>
      <Nav direction="row" pad="small">
        {props.menu.map((item: any, index) => (
          <Anchor
            as={MyLink}
            href={item.href}
            label={useTranslation(item.label)}
            key={index}
            color="white"
          />
        ))}
      </Nav>
    </LibHeader>
  </Box>;
};

export default Header
