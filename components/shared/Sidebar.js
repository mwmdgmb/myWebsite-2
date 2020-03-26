import React from "react";
import Modal from "./Modal";
import MovieCreateForm from "./movieCreateForm/movieCreateForm";
import { createMovie } from "../../actions";
import { useRouter } from "next/router";

const SiteBar = props => {
  const { category, loading } = props;
  const router = useRouter();
  let modal = null;

  const handleCreateMovie = movie => {
    createMovie(movie).then(movies => {
      modal.closeModal();
      router.push("/");
    });
  };

  return (
    <div>
      <Modal ref={elem => (modal = elem)} hasSubmit={false}>
        <MovieCreateForm handleForSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{props.appTitle}</h1>
      {loading ? (
        <div className="list-group">
          {category.map(c => (
            <a
                onClick={()=>props.changeCatergory(c.name)}

                key={c.id}
                href="#"
                className={`list-group-item nav-link ${props.activeCategory === c.name ? "active" : ""}`}
            >
              {c.name}
            </a>
          ))}
        </div>
      ) : (
        <div className="card p-5">
          <div className="spinner-border text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteBar;
