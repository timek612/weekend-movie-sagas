import { useSelector, useDispatch, } from 'react-redux'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'


function Details () {
    const movie = useSelector(store => store.movieSetter);
    const history = useHistory();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({
          type: 'GET_GENRES'
        })
      }, [])


    const handleClick = () => {
        history.push('/');
    }

    return (
        <>
        <button onClick={handleClick}>Back to List</button>
        <h1>{movie.title}</h1>
        <img src={movie.poster} alt="POSTER HERE" />
        <div className='descriptionBox'>
        <p>{movie.description}</p>
        </div>
        </>
    )
}

export default Details