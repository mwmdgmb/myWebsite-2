import React, {Component} from 'react'
import SiteBar from "../components/shared/Sidebar";
import Carousel from "../components/shared/Carousel";
import MovieLists from "../components/shared/movieLists";

import { getMovies ,getCategory } from '../actions'
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

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:0 ,
            movies:[] ,
            loading:false ,
            error:""
        }
    }

    componentDidMount() {
        const movies =  getMovies().then((movies)=>{
            this.setState({loading:true , movies})
        }).catch((error)=>{
            this.setState({error:error})
        },[]);

        this.setState({movies , loading: false})
    }


    Increment = () => {
            this.setState({
                count: this.state.count + 1
            })
        } ;

         Decrement = () => {
             this.setState({
                 count: this.state.count - 1
             })
        };


    render() {
        const { loading  ,error , count} = this.state;
        const {images , category ,movies} = this.props ;
            return(
                <BaseLayout title="Home Page">
                    <BasePage>
                        <div>
                            <div className="container">

                                <div className="row">
                                    <div className="col-lg-3">
                                        {error ? <div className="alert alert-danger text-center" role="alert">
                                            {error}
                                        </div> : <SiteBar
                                            appTitle="MongoDB"
                                            category={category}
                                            count={count}
                                            Decrement={this.Decrement}
                                            Increment={this.Increment}
                                            loading={loading} />}

                                    </div>
                                    <div className="col-lg-9">
                                        <Carousel images={images} />
                                    </div>
                                    <div className="row d-flex flex-row col-lg-9 ml-auto mr-1 pb-3">
                                        {error ? <div className="alert alert-danger w-100 text-center" role="alert">
                                            {error}
                                        </div> : <MovieLists movies={movies} loading={loading} />}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </BasePage>
                </BaseLayout>
    )

    }
}

Home.getInitialProps = async () =>{
    const movies  = await getMovies();
    const category  = await getCategory();

    const images = movies.map((movie)=>{
        return{
            id: `image-${movie.id}` ,
            url : movie.image ,
            title: movie.name
        }
    });
    return{
        movies ,
        images ,
        category
    }
};
