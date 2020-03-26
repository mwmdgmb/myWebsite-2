import React, { Component } from "react";
import Router from "next/router";
import MovieCreateForm from "../../../components/shared/movieCreateForm/movieCreateForm";
import BaseLayout from "../../../components/layout/BaseLayout";
import BasePage from "../../../components/BasePages";
import {updateMovie, getMovieById} from "../../../actions";

export class MovieEdit extends Component {
  static getInitialProps({ query }) {
    return { query };
  }

  // static async getInitialProps({ query }) {
  //   const movie = await  getMovieById(id);
  //   return {movie}
  // }
  state = {
    movie: {
      name: "",
      description: "",
      ratting: "",
      image: "",
      imageTow: "",
      imageThree: "",
      longDes: ""
    },
    loading: false
  };

  componentDidMount() {
    const { id } = this.props.query;
    getMovieById(id).then(movie => {
      this.setState({ movie, loading: true });
    });
    this.setState({ loading: false });
  }

  handleUpdateMovie = movie => {
    updateMovie(movie).then(updatedMovie => {
      Router.push(`/movies/${movie.id}`);
    });
  };

  render() {
    const { movie } = this.state;
    // const { movie } = this.props;

    return (
      <BaseLayout title="Edit Movie">
        <BasePage>
          <div className="container">
            <h1>Edit the Movie</h1>
            {this.state.loading && <MovieCreateForm submitButton="Update" movies={movie} handleForSubmit={this.handleUpdateMovie} />}
            <br />
            <br />
          </div>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default MovieEdit;
