import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        position: 'fixed',
        width: '100%',
    },
    paragraph: {
        padding: '10px 10px 10px 10px',
        color: 'black',
        backgroundColor: '#7777FF',
    },
};

class Blue extends Component {
    // Add some delay to show off ngproress
    static getInitialProps = async () => {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        return {};
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <p className={classes.paragraph}>
                    Blue
                </p>
            </div>
        );
    }
}

Blue.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blue);
