import React from 'react';
import '../home.css';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { makeStyles } from '@material-ui/core/styles';

import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: 20,
        marginBottom: 10,
    },
    media: {
        height: 270,
        padding: 10,
    },
    card: {
        color: 'white',
        '& p': 'white',
        backgroundColor: '#403e3e',
        alignItems: 'center',
    }
}));

function Home() {
    const classes = useStyles();

    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <Fade top>
                        <Typography className={classes.title} variant='h1' align='center'>
                            May the Force be with You!
                        </Typography>
                    </Fade>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Roll left>
                        <Paper elevation={10} className={classes.card}>
                            <CardContent>
                                <Typography variant='h4' gutterBottom>Who are the Siths</Typography>
                                <Typography variant='p'>It was created by Darth Bane, a Dark Lord and member of the Brotherhood of Darkness. Bane believed that the Sith had weakened themselves by accepting too many into their ranks and that the true dark side had abandoned them. So it was Darth Bane who saw that the Sith traditions of old were ultimately a dead end. All too often, squabbling Sith in their bid for power upended carefully laid plans.Mastery of force, lightsaber combat and all the other learnings of the Sith were taught to Bane by the Lords at the academy. He made many enemies at the academy, but also found his love here. He was forbidden from learning the old ways of Sith as the preachers thought of them as being flawed. Promoting Bane and his class to the rank of the Dark Lord, they were sent to planet Ruusan to fight against the Jedi Army of Light. Since Bane did not agree with the philosophy of Brotherhood of Darkness, he decided to go to planet Lehon to get a better understanding of the dark side.</Typography>
                            </CardContent>
                        </Paper>
                    </Roll>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Roll right>
                        <Card className={classes.card} elevation={10}>
                            <CardHeader
                                title='Darth Bane'
                                subheader='An ancient and legendary Sith Lord'
                            />
                            <CardMedia
                                className={classes.media}
                                image='images/DarthBane.jpg'
                                title='Darth Bane'
                            />
                        </Card>
                    </Roll>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <Fade bottom>
                            <Card elevation={10} className={classes.card}>
                                <CardHeader
                                    title='Darth Sidious aka Palpatine'
                                    subheader=' Emperor of the Galactic Empire'
                                />
                                <CardMedia
                                    className={classes.media}
                                    image='images/sideous.jpg'
                                />
                                <CardContent>
                                    <Typography variant='body2' component='p' color='textSecondary' gutterBottom className={classes.card}>
                                        Scheming, powerful, and evil to the core, Darth Sidious restored the Sith and destroyed the Jedi Order. Living a double life, Sidious was in fact Palpatine, a Naboo Senator and phantom menace.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Fade>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Fade bottom>
                            <Card elevation={10} className={classes.card}>
                                <CardHeader
                                    title='Darth Maul'
                                    subheader='An ancient and legendary Sith Lord'
                                />
                                <CardMedia />
                                <CardContent />
                            </Card>
                        </Fade>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Fade bottom>
                            <Card elevation={10} className={classes.card}>
                                <CardHeader
                                    title='Darth Bane'
                                    subheader='An ancient and legendary Sith Lord'
                                />
                                <CardMedia />
                                <CardContent />
                            </Card>
                        </Fade>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Fade bottom>
                            <Card elevation={10} className={classes.card}>
                                <CardHeader
                                    title='Darth Bane'
                                    subheader='An ancient and legendary Sith Lord'
                                />
                                <CardMedia />
                                <CardContent />
                            </Card>
                        </Fade>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;
