import React, {useState, useEffect} from 'react'
import axios from './axios'
import requests from './requests';

function Row({title, fetchUrl}){
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        //run once when the row load and don't run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;

        }
        fetchData();
    }, [fetchUrl]);
    console.log(movies)
    return(
        <div>
            <h2>{title}</h2>
        </div>
    )
}
export default Row;