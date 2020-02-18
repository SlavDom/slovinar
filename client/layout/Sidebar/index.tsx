import * as React from 'react';
import {Box, Nav, Button, Anchor} from "grommet";
import Link from "next/link";
import {useTranslation} from "../../lib/hooks";
import styled from 'styled-components';

// const SidebarItem = styled.div`
//   text-decoration: none;
// `;

//TODO отредактировать стили сайдбара
export const Sidebar = function () {
    const sideBar = [
        {title: 'search', href: '/'},
        {title: 'addWord', href: '/words/new'},
    ];

    return <Box gridArea="sidebar" width="small" background="accent-4">
        <Nav>
            {sideBar.map((e: any, index) => (
                <Anchor
                    key={index}
                    as={Link}
                    href={e.href}
                    label={useTranslation(e.title)}
                />
            ))}
        </Nav>
    </Box>;
}
