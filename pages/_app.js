import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/utils/theme';
import Layout from '../src/components/Layout';

class MyApp extends App {
    static getInitialProps = async ({ Component, ctx }) => {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    };

    componentDidMount = () => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    };

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Fragment>
                <Head>
                    <title>My App</title>
                    <link rel="stylesheet" type="text/css" href="/routes.css" />
                </Head>
                <Layout>
                    <TransitionGroup>
                        <CSSTransition
                            key={this.props.router.route}
                            classNames="fadeTranslate"
                            // classNames="fade"
                            timeout={1000}
                        >
                            <MuiThemeProvider theme={theme}>
                                <CssBaseline />
                                <Component {...pageProps} />
                            </MuiThemeProvider>
                        </CSSTransition>
                    </TransitionGroup>
                </Layout>
            </Fragment>
        );
    }
}

export default MyApp;
