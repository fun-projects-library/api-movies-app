import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import MovieList from "../MovieList";
import { fetchMovies } from '../../actions/movieActions';
import ScaleLoader from "react-spinners/ScaleLoader";
import moviesReducer from '../../reducers/moviesReducer';


export class MoviesPage extends Component {
    static propTypes = {moviesReducer : PropTypes.object.isRequired}
    
    componentDidMount() {
       
        this.props.fetchMovies()
    }
    
    render() {
        const errMessage = this.props.moviesReducer.error.message
        console.log(this.props)
        return (
            <div>
                <ScaleLoader loading={true/*this.props.moviesReducer.fetching*/} color={"#36D7B7"}/>
                
                <h1>Movie Page</h1>
                {errMessage ? errMessage : <MovieList movies={this.props.moviesReducer.movies}/>}
                
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({movies: state.moviesReducer});
const mapStateToProps = ({moviesReducer}) => ({moviesReducer});


const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
