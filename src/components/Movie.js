import React, { useState } from 'react';
import moment from 'moment'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 273,
        backgroundPosition: 'top'
    },

    card: {
        border: '1px solid #cac531',
        backgroundColor: '#000000',
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    },
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.warning.main,
        }
    }
}));

export default function Movie({ data }) {
    const [button, setButton] = useState();
    const classes = useStyles();
    const { backdrop_path, original_title, overview, release_date, id } = data;

    const handleButtonclick = () => {
        window.open(`https://themoviedb.org/movie/${id}-${original_title}`)
    }

    return (
        <Fade bottom>
            <Card className={classes.card} elevation={15} onClick={handleButtonclick}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`https://www.themoviedb.org/t/p/w440_and_h660_face${backdrop_path}`}
                        title={original_title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {original_title}
                        </Typography>
                        <Typography noWrap variant="body2" color="textSecondary" component="p">
                            {overview}
                        </Typography>
                        <Typography noWrap variant="body2" component="p">
                            {moment(release_date).format('MMMM Do YYYY')}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Fade>
    )
}

