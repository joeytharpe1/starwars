import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Movie from './Movie';




import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles'

import { getMovies } from '../api/query';
import Fade from 'react-reveal/Fade';
import TextLoop from "react-text-loop";

const PaginationContainer = styled(Grid)`
  margin-top: 50px;
`

const CustomTypography = styled(Typography)`
  margin-right: 10px;
`

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 50,
    },

    movieTitles: {
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },

    }
}))



function Movies() {
    const classes = useStyles();

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [totalResults, setTotalResults] = useState(0)
    

    const handlePageChange = (e, value) => {
        setPage(value);
    };


    

    useEffect(() => {
        (async () => {
            const { results, total_pages, total_results } = await getMovies(page);
            setTotalPages(total_pages)
            setTotalResults(total_results)
            setMovies(results)
        })()

    }, [page])




    return (
        <Container className={classes.root}>
            <Grid container align="center" justify="center">
                <Grid item xs={12}>
                    <Fade top>
                        <Typography variant='h2' color='secondary' gutterBottom className={classes.movieTitles}>
                            Explore the <TextLoop>
                                    <span style={{ color: 'yellow' }}>FORCE !</span>
                                    <span style={{ color: 'white' }}>FORCE !</span>
                                    <span style={{ color: 'red' }}>FORCE !</span>
                                </TextLoop>
                        </Typography>
                    </Fade>
                </Grid>
            </Grid>
            <Grid container spacing={2} justify="center">
                {movies.map((movie, index) => (
                    <Grid key={index} item xs={12} sm={4} md={3}>
                        <Movie data={movie} />
                    </Grid>
                ))}

                <PaginationContainer container item alignItems="center" justify="space-between">
                    <Grid item>
                        <CustomTypography component="span">{page * 20} of {totalResults} movies</CustomTypography>
                        <Typography component="span">Page {page} of {totalPages}</Typography>
                    </Grid>

                    <Grid item>
                        <Pagination count={totalPages} shape="rounded" color="primary" 
                        onChange={handlePageChange} 
                        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                        />
                    </Grid>
                </PaginationContainer>
            </Grid>
        </Container>
    );
}

export default Movies;
