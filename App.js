
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import View from './components/view';
import Alicecarousel from './components/Alicecarousel';
function App() {
  return (
    <div className="header">
    <Router>
   
         <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/products">OUR PRODUCTS</Link></li>
              </ul>
      <Route exact path="/" component={Home}/><br/><br/>
      <Route exact path="/products" component={Products}/><br/><br/>
      <Route exact path="/view/:id" component={View}/>
  
    </Router>   
    </div>

  );
}

export default App;
