import React from 'react';

import { Card, CardHeader, CardMedia, CardContent, Typography, Container, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Fade from 'react-reveal/Fade';
import TextLoop from "react-text-loop";



const useStyles = makeStyles((theme) => ({

}))

function Features() {
    const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Fade top>
                        <Typography variant="h2" gutterBottom align="center" color='secondary'>
                            Live Your Star Wars Adventure in a Galaxy Far, Far Away. New Attractions. <TextLoop>
                                <span style={{ color: 'black' }}>Travel through Space.</span>
                                <span style={{ color: 'green' }}>Explore a new Planet.</span>
                                <span style={{ color: 'purple' }}>Fight the First Order.</span>
                            </TextLoop>

                        </Typography>
                    </Fade>
                </Grid>
            </Grid>

        </Container>
    );
}

export default Features;
