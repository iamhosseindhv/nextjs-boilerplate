import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = (url) => {
    console.log(`Loading: ${url}`);
    NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Header = ({ router: { pathname } }) => (
    <header>
        <Head>
            <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        </Head>

        <Link prefetch href='/'>
            <a className={pathname === '/' ? 'is-active' : ''}>Red</a>
        </Link>
        <Link prefetch href='/blue'>
            <a className={pathname === '/blue' ? 'is-active' : ''}>Blue</a>
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
    `}</style>
    </header>
);

export default withRouter(Header);
