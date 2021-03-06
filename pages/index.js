import React, { Component } from "react";
import SiteBar from "../components/shared/Sidebar";
import Carousel from "../components/shared/Carousel";
import MovieLists from "../components/shared/movieLists";

import { getMovies, getCategory } from "../actions";
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/BasePages";

// const Home= ()=>{
//     const [count , setCount] = useState(0);
//     const [movies , setMovies] = useState([]);
//     const [loading , setLoading] = useState(false);
//     const [error , setError] = useState("");
//
//
//     // useEffect(()=>{
//     //     getMovies()
//     //         .then((movies)=>{
//     //             setLoading(true);
//     //             setMovies(movies)
//     //             }, setLoading(false))
//     //         .catch((error)=> setError(error))
//     // } , [count]);
//
//
//
//
//
//
//     const Increment = () => {
//         setCount(count + 1) ;
//     } ;
//
//     const Decrement = () => {
//         setCount(count - 1) ;
//     };
//
//
//     return(
//         <BaseLayout title="Home Page">
//             <BasePage>
//                 <div>
//                     <div className="container">
//
//                         <div className="row">
//                             <div className="col-lg-3">
//                                 <SiteBar appTitle="MongoDB" count={count} Decrement={Decrement} Increment={Increment}/>
//                             </div>
//                             <div className="col-lg-9">
//                                 <Carousel />
//                             </div>
//                             <div className="row d-flex flex-row col-lg-9 ml-auto mr-1 pb-3">
//                                 {error ? <div className="alert alert-danger w-100 text-center" role="alert">
//                                     {error}
//                                 </div> : <MovieLists movies={movies} loading={loading} />}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//             </BasePage>
//         </BaseLayout>
//     )
// };

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false,
      error: "",
      filter :"all"
    };
  }

  componentDidMount() {
    const movies = getMovies()
      .then(movies => {
        this.setState({ loading: true, movies });
      })
      .catch(error => {
        this.setState({ error: error });
      }, []);

    this.setState({ movies, loading: false });
  }


  changeCatergory = category =>{
    this.setState({
      filter:category
    })
  };

  filteredMovies = (movies) =>{
    const {filter} = this.state ;
    if(filter === "all"){
      return movies
    }
    return movies.filter((movie)=>{
      return movie.genre && movie.genre.includes(filter)
    })
  };

  render() {
    const { loading, error ,filter } = this.state;
    const { images, category, movies } = this.props;
    return (
      <BaseLayout title="Home Page">
        <BasePage>
          <div>
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  {error ? (
                    <div
                      className="alert alert-danger text-center"
                      role="alert"
                    >
                      {error}
                    </div>
                  ) : (
                    <SiteBar
                      appTitle="MongoDB"
                      category={category}
                      activeCategory={filter}
                      loading={loading}
                      changeCatergory={this.changeCatergory}
                    />
                  )}
                </div>
                <div className="col-lg-9">
                  <Carousel images={images} />
                  <button className="btn btn-success">Displaying {filter}</button>
                </div>
                <div className="row d-flex flex-row col-lg-9 ml-auto mr-1 pb-3">
                  {error ? (
                    <div
                      className="alert alert-danger w-100 text-center"
                      role="alert"
                    >
                      {error}
                    </div>
                  ) : (
                    <MovieLists movies={this.filteredMovies(movies)} loading={loading} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </BasePage>
      </BaseLayout>
    );
  }
}

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const category = await getCategory();

  const images = movies.map(movie => {
    return {
      id: `image-${movie.id}`,
      url: movie.image,
      title: movie.name
    };
  });
  return {
    movies,
    images,
    category
  };
};
