const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



router.get('/:id', (req, res) => {
  
  let id = req.params.id
  
  // const movie = useSelector(store => store.movieSetter);
  // Add query to get all genres
  const query = `SELECT "genres".name FROM "genres"
  JOIN "movies_genres"
  ON "genres".id = "movies_genres".genre_id
  JOIN "movies"
  ON "movies_genres".movie_id = "movies".id
  WHERE "movies".id = ${id};`;
  pool.query(query)
  .then (result => {
    res.send(result.rows)
  })
  .catch (err => {
    console.log(err);
    res.sendStatus(500)
  })

});

module.exports = router;