import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {

    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {this.props.styleTags}
                    <meta charSet="utf-8" />
                    <meta name="description" content="Next Redux Boilerplate" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
