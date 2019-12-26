import * as React from "react";
import Link from 'next/link';
import { Menu as OriginalMenu } from "antd";

const { Item } = OriginalMenu;

export const Menu = () => {
    return (
        <OriginalMenu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
        >
            <Item key="1"> <Link href="/"><a>Main page</a></Link></Item>
            <Item key="2"><Link href="/posts"><a>asdsd</a></Link></Item>
        </OriginalMenu>
    )
};