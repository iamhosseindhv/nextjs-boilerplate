/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = ({ router: { pathname } }) => (
    <header>
        <Head>
            <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        </Head>

        <Link prefetch href="/">
            <a className={pathname === '/' ? 'is-active' : ''}>
                Red
            </a>
        </Link>
        <Link prefetch href="/blue">
            <a className={pathname === '/blue' ? 'is-active' : ''}>
            Blue
            </a>
        </Link>
        <style jsx>{`
            header {
                padding: 24px;
            }
            a {
                font-size: 14px;
                margin-right: 15px;
                text-decoration: none;
            }
            .is-active {
                text-decoration: underline;
            }
        `}
        </style>
    </header>
);

Header.propTypes = {
    router: PropTypes.object.isRequired,
};

export default withRouter(Header);
