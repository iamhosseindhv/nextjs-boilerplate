/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        position: 'fixed',
        width: '100%',
        backgroundColor: 'red',
    },
    paragraph: {
        padding: '10px 10px 10px 10px',
        color: 'black',
        backgroundColor: '#7777FF',
    },
};

const Index = ({ classes }) => (
    <div className={classes.root}>
        <div>
            Red
        </div>
    </div>
);

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
