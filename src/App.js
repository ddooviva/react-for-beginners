import Home from './routes/Home.js'
import Detail from './routes/Detail.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'; // App.css 파일을 import

function App() {

  return <Router><Switch>
    <Route path="/movie/:id"><Detail /></Route>
    <Route path="/"><Home />
    </Route>
  </Switch></Router>

}
export default App;
