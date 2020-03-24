import React, { Component } from "react";
import Link from "next/link";

export default class MovieLists extends Component {
  shortenText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text;
  };

  renderRowMovies = movies => {
    return movies.map(movie => (
      <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
        <div className="card h-100">
          <Link href="/movies/[id]" as={`movies/${movie.id}`}>
            <a className="nav-link">
              <img className="card-img-top" src={movie.image} alt="" />
            </a>
          </Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link href="/movies/[id]" as={`movies/${movie.id}`}>
                <a className="nav-link">{movie.name}</a>
              </Link>
            </h4>
            <p className="card-text">
              {this.shortenText(movie.description, 100)}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{movie.ratting}</small>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    const { movies, loading } = this.props;

    return (
      <>
        {loading ? (
          this.renderRowMovies(movies)
        ) : (
          <div className="spinner-border text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </>
    );
  }
}
