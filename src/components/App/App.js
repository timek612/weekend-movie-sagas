import {HashRouter as Router, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import Header from '../Header/Header';

import '@fontsource/roboto';


function App() {


  return (
    <div className="App">
      <Header />
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path='/details'>
          <Details />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
