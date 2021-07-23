import React from 'react';
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';
//import PropTypes from 'prop-types'

function MovieList({movies}) {
    const movieList =(
        <Grid>
        <Grid.Row columns={3}>
          {movies.map((movie)=>(
            <Grid.Column key={movie.id}>
            <MovieCard movie={movie}/>
          </Grid.Column>
          ))}
          
        </Grid.Row>
        </Grid>
      )  
    
    const emptyMessage = <div>There is no any movies yet...</div>
    console.log(movies)
    return (<h3>{movies.length === 0 ? emptyMessage : movieList}</h3>)
}

MovieList.propTypes = {

}

export default MovieList;


