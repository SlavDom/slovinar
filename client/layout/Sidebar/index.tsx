import * as React from 'react';
import {Box, Nav, Button} from "grommet";
import Link from "next/link";
import {useTranslation} from "../../lib/hooks";

export const Sidebar = function() {
    const sideBar = [
        {title: 'search', href: '/'},
        {title: 'addWord', href: '/words/new'},
    ];

    return <Box gridArea="sidebar" width="small" background="accent-4">
        <Nav>
            {sideBar.map((e: any, index) => (
              <Button plain>
                  <Link key={index} href={e.href}>{useTranslation(e.title)}</Link>
              </Button>
            ))}
        </Nav>
    </Box>;
}
