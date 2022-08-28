
import './Details.css'
import { useSelector, useDispatch, } from 'react-redux'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton';
import { ArrowBack } from '@material-ui/icons';
// import Button from '@mui/material/Button';
// import Button from '@material-ui/core/Button';

function Details() {
    const movie = useSelector(store => store.movieSetter);
    const genres = useSelector(store => store.genres);
    const history = useHistory();
    const dispatch = useDispatch();

    console.log(genres);


    useEffect(() => {
        dispatch({
            type: 'GET_GENRES',
            payload: { movie }
        })
    }, [])


    const handleClick = () => {
        history.push('/');
    }

    return (
        <>
            {/* <Button variant="text">Text</Button> */}
            
            <span className="right">
            <IconButton onClick={handleClick}>
                <ArrowBack />
            </IconButton>
            </span>
            
            {/* <button className='backBtn' onClick={handleClick}>Back to List</button> */}
            <h1 className='movieTitle'>{movie.title}</h1>
            <img className='containerDetails' src={movie.poster} alt="POSTER HERE" />
            {genres.map(genre => {
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