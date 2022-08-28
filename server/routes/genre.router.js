const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



router.get('/:id', (req, res) => {
  
  // const movie = useSelector(store => store.movieSetter);
  // Add query to get all genres
  const query = `SELECT "genres".name FROM "genres"
  JOIN "movies_genres"
  ON "genres".id = "movies_genres".genre_id
  JOIN "movies"
  ON "movies_genres".movie_id = "movies".id
  WHERE "movies".id = 5;`
  res.sendStatus(500)
});

module.exports = router;