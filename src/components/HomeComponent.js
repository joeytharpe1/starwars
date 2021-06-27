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
import TextLoop from "react-text-loop";


const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: 20,
        marginBottom: 10,
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    media: {
        height: 310,
    },
    card: {
        border: '1px solid #04b574',
        color: '#7d0e77',
        '& p': 'white',
        backgroundColor: '#000000',
        alignItems: 'center',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',

    },
    card2: {
        border: '1px solid #7d0e77',
        color: '#04b574',
        '& p': 'white',
        backgroundColor: '#000000',
        alignItems: 'center',
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    }
}));

function Home() {
    const classes = useStyles();

    return (
        <>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Fade top>
                        <Typography className={classes.title} variant='h1' align='center' color='secondary'>
                            In a Galaxy far far <TextLoop>
                                <span style={{ color: 'yellow' }}>away..</span>
                                <span style={{ color: 'green' }}>away..</span>
                                <span style={{ color: 'purple' }}>away..</span>
                            </TextLoop>
                        </Typography>
                    </Fade>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Roll right>
                        <Paper elevation={15} className={classes.card}>
                            <CardContent>
                                <Typography variant='h4' gutterBottom>Who are the Siths</Typography>
                                <Typography variant='p' color='secondary'>It was created by Darth Bane, a Dark Lord and member of the Brotherhood of Darkness. Bane believed that the Sith had weakened themselves by accepting too many into their ranks and that the true dark side had abandoned them. So it was Darth Bane who saw that the Sith traditions of old were ultimately a dead end. All too often, squabbling Sith in their bid for power upended carefully laid plans.Mastery of force, lightsaber combat and all the other learnings of the Sith were taught to Bane by the Lords at the academy. He made many enemies at the academy, but also found his love here. He was forbidden from learning the old ways of Sith as the preachers thought of them as being flawed. Promoting Bane and his class to the rank of the Dark Lord, they were sent to planet Ruusan to fight against the Jedi Army of Light. Since Bane did not agree with the philosophy of Brotherhood of Darkness, he decided to go to planet Lehon to get a better understanding of the dark side.</Typography>
                            </CardContent>
                        </Paper>
                    </Roll>
                </Grid>
            </Grid>

            <Grid container spacing={3} >
                <Grid item xs={6}>
                    <Roll left>
                        <Card className={classes.card} elevation={15}>
                            <CardHeader
                                title='Kylo Ren'
                                subheader='Ben solo aka Han Solo son'
                            />
                            <CardMedia
                                className={classes.media}
                                image='images/kylo.jpg'
                                title='Kylo'
                            />
                            <CardContent>
                                <Typography variant='p' color='secondary'>
                                    A dark warrior strong with the Force, Kylo Ren commands First Order missions with a temper as fiery as his unconventional lightsaber. As a leader of the First Order and a student of Supreme Leader Snoke, he seeks to destroy the New Republic, the Resistance and the legacy of the Jedi.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Roll>
                </Grid>

                <Grid item xs={6}>
                    <Fade right>
                        <Card elevation={15} className={classes.card} >
                            <CardHeader
                                title='Darth Sidious aka Palpatine'
                                subheader=' Emperor of the Galactic Empire'
                            />
                            <CardMedia
                                className={classes.media}
                                image='images/sideous.jpg'
                            />
                            <CardContent>
                                <Typography variant='p' color='secondary' gutterBottom>
                                    Scheming, powerful, and evil to the core, Darth Sidious restored the Sith and destroyed the Jedi Order. Living a double life, Sidious was in fact Palpatine, a Naboo Senator and phantom menace.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Fade>
                </Grid>
            </Grid>

            <Grid container spacing={3} >
                <Grid item xs={6}>
                    <Fade bottom>
                        <Card elevation={15} className={classes.card}>
                            <CardHeader
                                title='Darth Maul'
                                subheader='Force-sensitive Dathomirian Zabrak'
                            />
                            <CardMedia
                                class={classes.media}
                                image='images/DarthMaul.jpg'
                            />
                            <CardContent >
                                <Typography variant='p' color='Secondary' gutterBottom >
                                    A deadly, agile Sith Lord trained by the evil Darth Sidious, Darth Maul was a formidable warrior and scheming mastermind. He wielded an intimidating double-bladed lightsaber and fought with a menacing ferocity.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Fade>
                </Grid>

                <Grid item xs={6}>
                    <Fade left>
                        <Card elevation={15} className={classes.card}>
                            <CardHeader
                                title='Darth Vader'
                                subheader='Aka Anakin Skywalker'
                            />
                            <CardMedia
                                className={classes.media}
                                image='images/DarthVader.jpeg'
                                title='darthvader'
                            />
                            <CardContent>
                                <Typography variant='p' color='Secondary' gutterBottom >
                                    Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever, and was believed by some to be the prophesied Chosen One who would bring balance to the Force..
                                </Typography>
                            </CardContent>
                        </Card>
                    </Fade>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Fade bottom>
                        <Card elevation={15} className={classes.card2}>
                            <CardContent>
                                <Typography variant='h4' gutterBottom>Who are the Jedi's</Typography>
                                <Typography variant='p' color='secondary' gutterBottom>
                                    Obi-Wan Kenobi, also known as Ben Kenobi, was a human male Jedi Master who served on the Jedi High Council during the final years of the Republic Era. As a Jedi General, Kenobi served in the Grand Army of the Republic that fought against the Separatist Droid Army during the Clone Wars. Kenobi, however, was forced into exile as a result of the Great Jedi Purge. As a mentor, Kenobi was responsible for training two members of the Skywalker family, Anakin Skywalker and Luke Skywalker, both of whom served in turn as his Padawan in the ways of the Force.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Fade>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Fade right>
                        <Card elevation={15} className={classes.card2}>
                            <CardHeader
                                title='Obi-Wan Kenobi'
                                subheader='Trained Anakin Skywalker'
                            />
                            <CardMedia className={classes.media}
                                image='images/obi.jpeg'
                                title='obiwan'
                            />
                            <CardContent>
                                <Typography variant='p' color='secondary'>
                                    “The truth is often what we make of it; you heard what you wanted to hear, believed what you wanted to believe.”
                                </Typography>
                            </CardContent>
                        </Card>
                    </Fade>
                </Grid>
                <Grid item xs={6}>
                    <Fade left>
                        <Card elevation={15} className={classes.card2}>
                            <CardHeader
                                title='Master Yoda'
                                subheader='legendary Jedi Master'
                            />
                            <CardMedia className={classes.media}
                                image='images/yoda.jpg'
                                title='Yoda'
                            />
                            <CardContent>
                                <Typography variant='p' color='Secondary' gutterBottom>
                                    Yoda was a legendary Jedi Master and stronger than most in his connection with the Force. Small in size but wise and powerful, he trained Jedi for over 800 years, playing integral roles in the Clone Wars, the instruction of Luke Skywalker, and unlocking the path to immortality.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Fade>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Fade right>
                        <Card elevation={15} className={classes.card2}>
                            <CardHeader
                                title='Rey Skywalker'
                                subheader='Fought on the side of the Resistance'
                            />
                            <CardMedia className={classes.media}
                                image='images/rey.jpg'
                                title='Rey'
                            />
                            <CardContent>
                                <Typography variant='p' color='secondary'>
                                    Rey is a Jakku scavenger, a survivor toughened by life on a harsh desert planet. When the fugitive droid BB-8 appeals to her for help, Rey finds herself drawn into a galaxy-spanning conflict. Despite dismissing herself as 'no one,' she learns that her life is being shaped by the mysterious power of the Force
                                </Typography>
                            </CardContent>
                        </Card>
                    </Fade>
                </Grid>
                <Grid item xs={6}>
                    <Fade left>
                        <Card elevation={15} className={classes.card2}>
                            <CardHeader
                                title='Luke Skywalker'
                                subheader='Fought in the Galactic Civil War'
                            />
                            <CardMedia className={classes.media}
                                image='images/luke.jpg'
                                title='luke'
                            />
                            <CardContent>
                                <Typography variant='p' color='secondary'>
                                    Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Fade>
                </Grid>
            </Grid>
        </Container>
        </>
    );
}

export default Home;
