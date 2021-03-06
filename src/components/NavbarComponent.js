import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MovieCreationOutlinedIcon from '@material-ui/icons/MovieCreationOutlined';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.warning.main,
        }
    }
}));

function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} align="center">
                        <Button component={Link} to='/' className={classes.button}
                            color="inherit"
                            startIcon={<HomeOutlinedIcon />}
                        >
                            home
                        </Button>
                    </Typography>

                    <Typography variant="h6" className={classes.title} align="center">
                        <Button component={Link} to='/explore' className={classes.button}
                            color="inherit"
                            startIcon={<SearchIcon />}
                        >
                            Explore
                        </Button>
                    </Typography>

                    <Typography variant="h6" className={classes.title} align="center">
                        <Button component={Link} to='/movies' className={classes.button}
                            color="inherit"
                            startIcon={<MovieCreationOutlinedIcon />}
                        >
                            Movies
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
