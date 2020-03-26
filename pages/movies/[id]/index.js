import BaseLayout from "../../../components/layout/BaseLayout";
import BasePage from "../../../components/BasePages";
import { useRouter } from "next/router";
import { getMovieById, deleteMovies } from "../../../actions";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

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
      toast.error("Movie deleted", {
        position: toast.POSITION.BOTTOM_LEFT
      });
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
            <h1 className="pb-4 text-capitalize">{movies.name}</h1>
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
                        className="d-block img-fluid w-100"
                        src={movies.image}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid w-100"
                        src={movies.imageTow}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid w-100"
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
                  <Link href="/movies/[id/edit" as={`/movies/${id}/edit`}>
                    <button
                        className="btn btn-warning btn-block mt-2">
                      Edit
                    </button>
                  </Link>
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
