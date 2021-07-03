import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MovieCreationOutlinedIcon from '@material-ui/icons/MovieCreationOutlined';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 10,
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

function Footer() {
    const classes = useStyles();

    return (
            <AppBar position="static" className={classes.root}>
                <Container maxWidth='md'>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title} align="center">
                            <Button component={Link} to='/' className={classes.button}
                                color="inherit"
                                startIcon={<HomeOutlinedIcon />}
                                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                            >
                                home
                            </Button>
                        </Typography>
                        <Typography variant="h6" className={classes.title} align="center">
                            <Button component={Link} to='/explore' className={classes.button}
                                color="inherit"
                                startIcon={<SearchIcon />}
                                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                            >
                                Explore
                            </Button>
                        </Typography>
                        <Typography variant="h6" className={classes.title} align="center">
                            <Button component={Link} to='/movies' className={classes.button}
                                color="inherit"
                                startIcon={<MovieCreationOutlinedIcon />}
                                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                            >
                                Movies
                            </Button>
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
    )
}

export default Footer;
