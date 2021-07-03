import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


import PinDropIcon from '@material-ui/icons/PinDrop';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Fade from 'react-reveal/Fade';
import TextLoop from "react-text-loop";
import StarwarsCrawl from './StarwarsCrawl';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 10,
    },
    accordion: {
        backgroundColor: theme.palette.primary.main,
        border: '1px solid #cac531',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    media: {
        height: 270,
        backgroundPosition: 'top',
        border: '1px solid #cac531',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    hoverEffect: {
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.warning.main,
            transition: "transform 0.15s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }
    }
}))

function Explore() {
    const classes = useStyles();

    return (
        <>
            <StarwarsCrawl />
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Fade top>
                            <Typography variant="h3" gutterBottom align="center" color='secondary' className={classes.hoverEffect}>
                                Live Your Star Wars Adventure in a Galaxy Far, Far Away. New Attractions. <TextLoop>
                                    <span style={{ color: 'black' }}>Travel through Space.</span>
                                    <span style={{ color: 'green' }}>Explore a new Planet.</span>
                                    <span style={{ color: 'purple' }}>Fight the First Order.</span>
                                </TextLoop>
                            </Typography>
                        </Fade>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Fade right>
                            <Accordion className={classes.accordion}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant="h5" color="warning" gutterBottom className={classes.hoverEffect}>Take Control of the Fastest Ship in the Galaxy</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='p' gutterBottom>
                                        Ride in the famous cockpit of the Millennium Falcon on a daring flight—and whether you’re a pilot, engineer or gunner, every role is crucial.
                                        The engines rumble as the Millennium Falcon blasts off, pushing you and your crew back into your seats when you jump into hyperspace towards adventure. Along the way you’ll face danger at every turn.
                                        Will your mission succeed or fail? It’s up to you—find out if you have what it takes to outmaneuver the odds aboard the Millennium Falcon.
                                        Get ready to punch it!
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <CardMedia className={classes.media}
                                        component="img"
                                        alt="millenium falcon"
                                        image="images/mfalcon.png"
                                        title="millenium falcon"
                                    />
                                </AccordionDetails>
                            </Accordion>
                        </Fade>
                    </Grid>
                    <Grid item>
                        <Fade left>
                            <Button className={classes.button}
                                variant='outlined'
                                color='secondary'
                                startIcon={<PinDropIcon />}
                                onClick={() => window.open(`https://disneyworld.disney.go.com/attractions/hollywood-studios/millennium-falcon-smugglers-run/`)}
                            >
                                Hollywood Studios
                            </Button>
                        </Fade>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Fade left>
                            <Accordion className={classes.accordion} elevation={15}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography variant="h5" gutterBottom className={classes.hoverEffect}>Star Tours – The Adventures Continue</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='p'>
                                        At launch, you’ll barely escape a showdown with the menacing Kylo Ren—or you’ll race through a Stormtrooper checkpoint, with Rey leading the way in the Millennium Falcon.

                                        With the First Order in pursuit, you’ll embark on a thrilling, unpredictable flight that rockets you to the farthest reaches of the galaxy.

                                        Speed to the ocean moon Kef Bir. Receive an urgent transmission from Lando Calrissian. Then hold on tight as your ship hurtles through a climactic interstellar battle.

                                        Come celebrate Star Wars: The Rise of Skywalker in a new Star Tours experience, where you’ll encounter iconic characters and visit distant worlds immortalized by the saga.
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <CardMedia className={classes.media}
                                        component="img"
                                        alt="startour"
                                        image="images/startours.jpg"
                                        title="startour"
                                    />
                                </AccordionDetails>
                            </Accordion>
                        </Fade>
                    </Grid>
                    <Grid item>
                        <Fade right>
                            <Button className={classes.button}
                                variant='outlined'
                                color='secondary'
                                startIcon={<PinDropIcon />}
                                onClick={() => window.open(`https://disneyland.disney.go.com/attractions/map/#/id=star-tours/`)}
                            >
                                Star-Tours
                            </Button>
                        </Fade>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Fade right>
                            <Accordion className={classes.accordion} elevation={15} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                >
                                    <Typography variant="h5" gutterBottom className={classes.hoverEffect}>Anything and Everything Star Wars</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="p" gutterBottom >Recipes, Films, Interactive viedeso, news and blogs and so much more. Ever wonder how to get make a star wars theme cake? Heres your guide!.
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <CardMedia className={classes.media}
                                        component="img"
                                        alt="millenium falcon"
                                        image="images/starwarsCake.jpg"
                                        title="millenium falcon"
                                    />
                                </AccordionDetails>
                            </Accordion>
                        </Fade>
                    </Grid>
                    <Grid item md={4}>
                        <Fade left>
                            <Button className={classes.button}
                                variant='outlined'
                                color='secondary'
                                startIcon={<PinDropIcon />}
                                onClick={() => window.open(`https://www.starwars.com/news/star-wars-galactic-baking-cookbook`)}
                            >
                                Feeling Hungry
                            </Button>
                        </Fade>
                    </Grid>
                </Grid>

                <Grid container spacing={3} className={classes.root}>
                    <Grid item md={3}>
                        <Fade bottom>
                            <Button
                                onClick={() => window.open('https://www.starwars.com/news/rings-of-hudalla-recipe-star-wars-galaxys-edge-cookbook')}
                            >
                                <Card className={classes.accordion} elevation={15}>
                                    <CardMedia className={classes.media}
                                        component="img"
                                        alt="ring cake"
                                        image="images/ringscake.jpg"
                                        title="ring cake"
                                    />
                                    <CardContent>
                                        <Typography variant='h6'>
                                            LEARN TO MAKE ‘RINGS OF HUDALLA’, A NEW RECIPE FROM THE STAR WARS: GALAXY’S EDGE COOKBOOK
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Button>
                        </Fade>
                    </Grid>

                    <Grid item md={3}>
                        <Fade top>
                            <Button
                                onClick={() => window.open('https://www.starwars.com/news/princess-leia-gingerbread-cookies')}
                            >
                                <Card className={classes.accordion} elevation={15}>
                                    <CardMedia className={classes.media}
                                        component="img"
                                        alt="Leia cookie"
                                        image="images/PrincessLeia.jpg"
                                        title="Leia"
                                    />
                                    <CardContent>
                                        <Typography variant='h6'>
                                            LEARN TO MAKE ‘RINGS OF HUDALLA’, A NEW RECIPE FROM THE STAR WARS: GALAXY’S EDGE COOKBOOK
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Button>
                        </Fade>
                    </Grid>

                    <Grid item md={3}>
                        <Fade bottom>
                            <Button
                                onClick={() => window.open('https://www.starwars.com/news/yodas-root-leaf-stew')}
                            >
                                <Card className={classes.accordion} elevation={15}>
                                    <CardMedia className={classes.media}
                                        component="img"
                                        alt="yoda root"
                                        image="images/yodaroot.jpg"
                                        title="yoda"
                                    />
                                    <CardContent>
                                        <Typography variant='h6'>
                                            YODA’S ROOT LEAF STEW
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Button>
                        </Fade>
                    </Grid>

                    <Grid item md={3}>
                        <Fade top>
                            <Button
                                onClick={() => window.open('https://www.starwars.com/news/gorg-cupcakes')}
                            >
                                <Card className={classes.accordion} elevation={15}>
                                    <CardMedia className={classes.media}
                                        component="img"
                                        alt="feast"
                                        image="images/feast.jpg"
                                        title="feast"
                                    />
                                    <CardContent>
                                        <Typography variant='h6'>
                                            FEAST YOUR EYES ON THESE GORG CUPCAKES
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Button>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Explore;
