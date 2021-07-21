
import './App.css';
import NavBar from './Components/NavBar';
import Content from './Components/Content'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom' 

//Todo 
// -- Routes 
// Handling state 
// FETCH DATA FROM API 
// app component is the root app
function App() { 
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/softwareEngineering">
            <Content />
          </Route>

          <Route exact path="/dataScience">
            <Content />
          </Route>

          <Route exact  path="/selfDevelopment">
            <Content />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
