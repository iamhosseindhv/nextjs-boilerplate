import React, { createContext, Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme, { getMuiTheme } from '../src/utils/theme';
import Layout from '../src/components/Layout';
import { LANGUAGES } from 'server/util';

const LangContext = createContext();

class MyApp extends App {
    constructor(props) {
        super(props);
        const userLanguage = props.pageProps.userLanguage || LANGUAGES.EN;
        this.state = {
            theme: getMuiTheme(userLanguage),
            context: {
                lang: userLanguage,
            },
        };
    }

    static getInitialProps = async ({ Component, ctx }) => {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        if (!process.browser) {
            pageProps.userLanguage = ctx.query.userLanguage;
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
                    <meta name="viewport" content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height" />
                    <link rel="stylesheet" type="text/css" href="/routes.css" />
                </Head>
                <LangContext.Provider value={this.state.context}>
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
                </LangContext.Provider>
            </Fragment>
        );
    }
}

export default MyApp;
