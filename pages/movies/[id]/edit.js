import React, { Component } from "react";
import MovieCreateForm from "../../../components/shared/movieCreateForm/movieCreateForm";
import BaseLayout from "../../../components/layout/BaseLayout";
import BasePage from "../../../components/BasePages";
import { getMovieById } from "../../../actions";

export class MovieEdit extends Component {
  static async getInitialProps({ query }) {
    return { query };
  }
  state = {
    movie: {},
    loading: false
  };

  componentDidMount() {
    const { id } = this.props.query;
    getMovieById(id).then(movie => {
      this.setState({ movie, loading: true });
    });
    this.setState({ loading: false });
  }

  render() {
    const { movie } = this.state;
    console.log(movie);
    return (
      <BaseLayout title="Edit Movie">
        <BasePage>
          <div className="container">
            <h1>Edit the Movie</h1>
            {this.state.loading && <MovieCreateForm movies={movie} />}
            <br />
            <br />
          </div>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default MovieEdit;
