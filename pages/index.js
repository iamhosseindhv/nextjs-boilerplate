import React from 'react';
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

export default withStyles(styles)(Index);
