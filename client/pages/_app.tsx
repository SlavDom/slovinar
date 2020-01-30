import App from 'next/app'
import React from 'react'
import {grommet, Grommet, extendDefaultTheme} from "grommet";
import { deepMerge } from "grommet/utils";
import {Header} from "../layout/header";

extendDefaultTheme(
    deepMerge(grommet, {
        global: {
            colors: {
                'light-3': "red"
            }
        }
    })
);

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Grommet theme={grommet} plain>
                <Header />
                <Component {...pageProps} />
            </Grommet>
        )
    }
}