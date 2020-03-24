import { useState, useEffect } from "react";

const MovieCreateForm = props => {
  const [isLoadedData, setIsLoadedData] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    ratting: "",
    image: "",
    imageTow: "",
    imageThree: "",
    longDes: ""
  });

  useEffect(() => {
    if (props.movies) {
      setForm(props.movies);
      setIsLoadedData(true);
    }
  }, [setIsLoadedData]);

  const handleChange = event => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    setForm({
      ...form,
      [name]: target.value
    });
  };
  const handleGenreChange = event => {
    const { options } = event.target;

    const optionsLength = options.length;
    let value = [];

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setForm({
      ...form,
      genre: value.toString()
    });
  };
  const submitForm = () => {
    props.handleForSubmit({ ...form });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          value={form.name}
          type="text"
          className="form-control"
          id="name"
          name="name"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          value={form.description}
          type="text"
          className="form-control"
          id="description"
          name="description"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="ratting">Ratting</label>
        <input
          value={form.ratting}
          type="number"
          max={5}
          min={0}
          className="form-control"
          id="ratting"
          name="ratting"
          onChange={handleChange}
          required
        />
        <small id="emailHelp" className="form-text text-muted" defaultValue="3">
          Max: 5 , Min: 0
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          value={form.image}
          type="text"
          className="form-control"
          id="image"
          placeholder="https://...."
          name="image"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageTow">Image 2...</label>
        <input
          value={form.imageTow}
          type="text"
          className="form-control"
          id="imageTow"
          placeholder="https://...."
          name="imageTow"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageThree">Image 3...</label>
        <input
          value={form.imageThree}
          type="text"
          className="form-control"
          id="imageThree"
          placeholder="https://...."
          name="imageThree"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDes">Long Description</label>
        <textarea
          value={form.longDes}
          className="form-control"
          id="longDes"
          rows="3"
          name="longDes"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          onChange={handleGenreChange}
          value={form.genre}
          multiple
          className="form-control"
          id="genre"
        >
          <option>drama</option>
          <option>action</option>
          <option>history</option>
          <option>fantasy</option>
        </select>
      </div>
      <button type="button" onClick={submitForm} className="btn btn-primary">
        Create Movie
      </button>
    </form>
  );
};

export default MovieCreateForm;
