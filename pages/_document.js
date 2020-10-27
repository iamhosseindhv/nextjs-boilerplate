import React, { Fragment } from 'react';
import { ServerStyleSheets } from '@material-ui/styles';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import theme from '../src/utils/theme';
import { pathnameToLanguage, LANGUAGES, DEFAULT_LANGUAGE } from '../server/util';

const domainName = process.env.DOMAIN_NAME;

if (!domainName) {
    throw new Error('DOMAIN_NAME environment variable is undefined');
}

class MyDocument extends Document {
    render() {
        const { canonical, userLanguage } = this.props;
        return (
            <Html lang={userLanguage} dir={userLanguage === LANGUAGES.FA ? 'rtl' : 'ltr'}>
                <Head>
                    <meta charSet="utf-8" />
                    {/* SEO */}
                    <link
                        rel="canonical"
                        href={`https://${domainName}${userLanguage === DEFAULT_LANGUAGE ? '' : `/${userLanguage}`}${canonical}`}
                    />
                    <link rel="alternate" href={`https://${domainName}${canonical}`} hrefLang="x-default" />
                    {Object.values(LANGUAGES).map(lang => (
                        <link
                            key={lang}
                            rel="alternate"
                            href={`https://${domainName}${lang === DEFAULT_LANGUAGE ? '' : `/${lang}`}${canonical}`}
                            hrefLang={lang}
                        />
                    ))}
                    {/* PWA primary color */}
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    {/* Fonts */}
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        canonical: pathnameToLanguage(ctx.req.url).canonical,
        userLanguage: ctx.query.userLanguage || DEFAULT_LANGUAGE,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: (
            <Fragment>
                {sheets.getStyleElement()}
                {flush() || null}
            </Fragment>
        ),
    };
};

export default MyDocument;
