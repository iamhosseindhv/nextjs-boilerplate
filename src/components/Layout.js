import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = ({ children }) => (
    <main>
        <Header />
        {children}
    </main>
);

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;
