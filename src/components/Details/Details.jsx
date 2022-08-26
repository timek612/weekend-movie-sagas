import { useSelector } from 'react-redux'


function Details () {
    const movie = useSelector(store => store.movieSetter);

    return (
        <>
        <h1>placehodler</h1>
        <img src={movie.poster} alt="" />
        </>
    )
}

export default Details