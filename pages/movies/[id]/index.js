import BaseLayout from "../../../components/layout/BaseLayout";
import BasePage from "../../../components/BasePages";
import { useRouter } from "next/router";
import { getMovieById, deleteMovies } from "../../../actions";
import Link from "next/link";
import React from "react";

const Movie = props => {
  const router = useRouter();
  const { id } = router.query;
  const { movies } = props;

  const shortenText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text;
  };

  const deleteMovie = id => {
    deleteMovies(id).then(() => {
      console.log("deleted");
      router.push("/");
    });
  };

  return (
    <BaseLayout title="Movie ID">
      <BasePage>
        <div className="container">
          <Link href="/" as="/">
            <a className="btn btn-secondary mb-3">Back</a>
          </Link>
          <div className="jumbotron">
            <h1 className="display-1 pb-4">{movies.name}</h1>
            <div className="row">
              <div className="col-md-9">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img
                        className="d-block img-fluid"
                        src={movies.image}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid"
                        src={movies.imageTow}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid"
                        src={movies.imageThree}
                        alt="Third slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 h-50 card shadow">
                <div className="py-4">
                  <ul className="navbar-nav nav">
                    <li className="nav-item">
                      <b>Years</b> : {movies.Years}
                    </li>
                    <li className="nav-item my-3">
                      <b>Ratting</b> : {movies.ratting}
                    </li>
                    <li className="nav-item h6">
                      <b>View</b> : {movies.view}
                    </li>
                  </ul>
                  <button
                    onClick={() => deleteMovie(id)}
                    className="btn btn-block btn-danger mt-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-12 card shadow p-4">
                About : {shortenText(movies.longDes, 100)}
              </div>
            </div>
          </div>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

Movie.getInitialProps = async ({ query }) => {
  const movies = await getMovieById(query.id);
  return { movies };
};

export default Movie;
