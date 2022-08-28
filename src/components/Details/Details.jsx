import './Details.css'
import { useSelector, useDispatch, } from 'react-redux'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'


function Details () {
    const movie = useSelector(store => store.movieSetter);
    const genres = useSelector(store => store.genres);
    const history = useHistory();
    const dispatch = useDispatch();

    console.log(genres);


    useEffect(() => {
        dispatch({
          type: 'GET_GENRES',
          payload: {movie}
        })
      }, [])


    const handleClick = () => {
        history.push('/');
    }

    return (
        <>
        <button className='backBtn' onClick={handleClick}>Back to List</button>
        <h1>{movie.title}</h1>
        <img className='containerDetails' src={movie.poster} alt="POSTER HERE" />
        {genres.map (genre => {
            return (
                <h4 key={genre.name}>{genre.name}</h4>
            );
        })}
        <div className='descriptionBox'>
        <p>{movie.description}</p>
        </div>
        </>
    )
}

export default Details