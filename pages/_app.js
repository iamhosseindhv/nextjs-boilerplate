/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import App, { Container } from 'next/app';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/utils/getPageContext';
import Layout from '../src/components/Layout';

class MyApp extends App {
    constructor(props) {
        super(props);
        this.pageContext = getPageContext();
    }

    pageContext = null;

    componentDidMount = () => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    };

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Layout>
                    <TransitionGroup>
                        <CSSTransition
                            key={this.props.router.route}
                            classNames="fadeTranslate"
                            // classNames="fade"
                            timeout={1000}
                        >
                            <JssProvider
                                registry={this.pageContext.sheetsRegistry}
                                generateClassName={this.pageContext.generateClassName}
                            >
                                <MuiThemeProvider
                                    theme={this.pageContext.theme}
                                    sheetsManager={this.pageContext.sheetsManager}
                                >
                                    <CssBaseline />
                                    <Component pageContext={this.pageContext} {...pageProps} />
                                </MuiThemeProvider>
                            </JssProvider>
                        </CSSTransition>
                    </TransitionGroup>
                </Layout>
                <style jsx global>{`
                    .fade-enter {
                        opacity: 0;
                    }
                    .fade-enter-active {
                        opacity: 1;
                        transition: opacity 800ms;
                    }
                    .fade-exit-active {
                        opacity: 0;
                        transition: opacity 800ms;
                    }

                    .fadeTranslate-enter {
                        opacity: 0;
                        transform: translate(0, 12px);
                        position: fixed;
                    }
                    .fadeTranslate-enter.fadeTranslate-enter-active {
                        opacity: 1;
                        transform: translate(0, 0);
                        transition: opacity 250ms ease-in 250ms, transform 250ms ease-in-out 250ms;
                    }
                    .fadeTranslate-exit {
                        opacity: 1;
                        position: fixed;
                        transform: translate(0, 0);
                    } 
                    .fadeTranslate-exit.fadeTranslate-exit-active {
                        opacity: 0;
                        transform: translate(0, 12px);
                        transition: opacity 175ms ease-in, transform 175ms ease-in-out;
                    }
                    
                    .fix-container {
                        position: fixed;
                    }
                `}
                </style>
            </Container>
        );
    }
}

export default MyApp;
