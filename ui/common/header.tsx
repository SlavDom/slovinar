import * as React from "react";
import {Menu} from "./menu";
import {Layout, PageHeader} from 'antd';

export const Header = () => {
  return (
      <Layout.Header className="header">
          {/*<PageHeader*/}
          {/*    style={{*/}
          {/*        border: '1px solid rgb(235, 237, 240)',*/}
          {/*    }}*/}
          {/*    onBack={() => null}*/}
          {/*    title="SLOVINAR"*/}
          {/*    subTitle="This is a subtitle"*/}
          {/*    extra={[*/}
          {/*        // <Menu/>*/}
              {/*]}*/}
          {/*/>*/}
          <div className="logo" />
          <Menu />
      </Layout.Header>
  )
};