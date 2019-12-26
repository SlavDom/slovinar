import * as React from "react";
import { Layout, Breadcrumb } from 'antd';
import {Header} from '../common/header';
// import './main.css';
import 'antd/dist/antd.min.css';

const { Footer, Content } = Layout;

export const MainLayout = ({ children }) => {
    return (
        <Layout className="layout">
            <Header />
            <Content>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    { children }
                </div>
            </Content>
            <Footer>
                (с) Slovinar 2019
            </Footer>
        </Layout>
    );
};
