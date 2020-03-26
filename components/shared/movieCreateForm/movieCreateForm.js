import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const MovieCreateForm = props => {

  const defaultData = {
    name: "",
    description: "",
    ratting: "",
    image: "",
    imageTow: "",
    imageThree: "",
    longDes: "",
    errors: {
      name: "",
      description: "",
      ratting: "",
      image: "",
      imageTow: "",
      imageThree: "",
      longDes: ""
    }
  }
  const [isLoadedData, setIsLoadedData] = useState(false);

  // const formData = props.movies ? {...props.movies} : defaultData ;

  const [form, setForm] = useState(defaultData);

  useEffect(() => {
    if (props.movies) {
      setForm(props.movies);
      setIsLoadedData(true);
    }
  }, [setIsLoadedData]);

  const handleChange = event => {
    event.preventDefault();
    // const target = event.target;
    // const name = target.name;
    const { name, value } = event.target;
    let errors = form.errors;
    switch (name) {
      case "name":
        errors.name = value.length <= 0 ? "Empty Name" : "";
        break;
      case "description":
        errors.description = value.length <= 0 ? "Empty Description" : "";
        break;
      case "ratting":
        errors.ratting = value.length <= 0 ? "Empty Ratting" : "";
        break;
      case "image":
        errors.image = value.length < 10 ? "Empty URL" : "";
        break;
      case "imageTow":
        errors.imageTow = value.length < 10 ? "Empty URL" : "";
        break;
      case "imageThree":
        errors.imageThree = value.length < 10 ? "Empty URL" : "";
        break;
      case "longDes":
        errors.longDes = value.length < 10 ? "Empty Long Description" : "";
        break;
    }

    setForm({
      ...form,
      errors,
      [name]: value
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
    if (
      form.name.length === 0 ||
      form.description.length === 0 ||
      form.ratting === 0 ||
      form.image.length === 0 ||
      form.imageTow.length === 0 ||
      form.imageThree.length === 0 ||
      form.longDes.length === 0
    ) {
      toast.error("please check it", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    } else {
      toast.success("Movie created successfully", {
        position: toast.POSITION.BOTTOM_LEFT
      });
      props.handleForSubmit({ ...form });
    }
  };

  return (
    <form>
      <div className="form-group">
        {form.errors.name &&
        form.errors.description &&
        form.errors.ratting &&
        form.errors.image &&
        form.errors.imageTow &&
        form.errors.imageThree &&
        form.errors.longDes ? (
          <div className="alert alert-danger text-danger text-center">
            Empty
          </div>
        ) : null}

        <label htmlFor="name">Name</label>
        <input
          value={form.name}
          type="text"
          className={
            form.errors.name.length > 0
              ? "form-control is-invalid"
              : "form-control"
          }
          id="name"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          value={form.description}
          type="text"
          className={
            form.errors.description.length > 0
              ? "form-control is-invalid"
              : "form-control"
          }
          id="description"
          name="description"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ratting">Ratting</label>
        <input
          value={form.ratting}
          type="number"
          max={5}
          min={0}
          className={
            form.errors.ratting.length > 0
              ? "form-control is-invalid"
              : "form-control"
          }
          id="ratting"
          name="ratting"
          onChange={handleChange}
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
          className={
            form.errors.image.length > 0
              ? "form-control is-invalid"
              : "form-control"
          }
          id="image"
          placeholder="https://...."
          name="image"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageTow">Image 2...</label>
        <input
          value={form.imageTow}
          type="text"
          className={
            form.errors.imageTow.length > 0
              ? "form-control is-invalid"
              : "form-control"
          }
          id="imageTow"
          placeholder="https://...."
          name="imageTow"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageThree">Image 3...</label>
        <input
          value={form.imageThree}
          type="text"
          className={
            form.errors.imageThree.length > 0
              ? "form-control is-invalid"
              : "form-control"
          }
          id="imageThree"
          placeholder="https://...."
          name="imageThree"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDes">Long Description</label>
        <textarea
          value={form.longDes}
          className={
            form.errors.longDes.length > 0
              ? "form-control is-invalid"
              : "form-control"
          }
          id="longDes"
          rows="3"
          name="longDes"
          onChange={handleChange}
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
      {form.errors.name &&
      form.errors.description &&
      form.errors.ratting &&
      form.errors.image &&
      form.errors.imageTow &&
      form.errors.imageThree &&
      form.errors.longDes ? null : (
        <button type="button" onClick={submitForm} className="btn btn-primary">
          {props.submitButton || "Create"} Movie
        </button>
      )}
    </form>
  );
};

export default MovieCreateForm;
