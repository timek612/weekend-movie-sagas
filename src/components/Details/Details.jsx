import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


function Details () {
    const movie = useSelector(store => store.movieSetter);
    const history = useHistory();

    const handleClick = () => {
        history.push('/')


    }

    return (
        <>
        <button onClick={handleClick}>Back</button>
        <h1>{movie.title}</h1>
        <img src={movie.poster} alt="" />
        <div className='descriptionBox'>
        <p>{movie.description}</p>
        </div>
        </>
    )
}

export default Details