import * as React from 'react';
import {Button, Box, Header as LibHeader} from "grommet";
import * as Icons from 'grommet-icons';
import Router from "next/router";
import Link from "next/link";
import {useTranslation} from "../lib/hooks";

export const Header = function() {
    const addWord = useTranslation('addWord');
    return <LibHeader background='status-warning' pad="small" >
        <Button icon={<Icons.Home />} hoverIndicator onClick={() => Router.push('/')} />
        <Box direction="row" gap="medium">
            {/*<Link href={"/words/new"}>{addWord}</Link>*/}
        </Box>
    </LibHeader>;
}
