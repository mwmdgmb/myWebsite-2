import React, {useState , useEffect} from 'react'
import SiteBar from "../components/shared/Sidebar";
import Carousel from "../components/shared/Carousel";
import MovieLists from "../components/shared/movieLists";

import { getMovies } from '../actions'
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/BasePages";


const Home= ()=>{
    const [count , setCount] = useState(0);
    const [movies , setMovies] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState("");


    useEffect(()=>{
        getMovies()
            .then((movies)=>{
                setLoading(true);
                setMovies(movies)
                }, setLoading(false))
            .catch((error)=> setError(error))
    } , [count]);






    const Increment = () => {
        setCount(count + 1) ;
    } ;

    const Decrement = () => {
        setCount(count - 1) ;
    };


    return(
        <BaseLayout title="Home Page">
            <BasePage>
                <div>
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-3">
                                <SiteBar appTitle="MongoDB" count={count} Decrement={Decrement} Increment={Increment}/>
                            </div>
                            <div className="col-lg-9">
                                <Carousel />
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
};

export default Home
