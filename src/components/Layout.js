import React from 'react';
import PropTypes from 'prop-types';
import App from './App';
import Header from './Header';

const Layout = ({ children }) => (
    <App>
        <Header />
        {children}
    </App>
);

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;
