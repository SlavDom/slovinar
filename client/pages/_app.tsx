import App from 'next/app'
import React from 'react'
import {grommet, Grommet} from "grommet";

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Grommet theme={grommet}>
                <Component {...pageProps} />
            </Grommet>
        )
    }
}