import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import About from './About';
import Shop from './Shop';

const Nav = (props)=>{

    return (
        <ul>
            <Link to="/"><li> Home </li></Link>
            <Link to="/shop"><li> Shop </li></Link>
            <Link to='/about'><li> About </li></Link>
        </ul>
    )

}


const App = (props)=>{

    return (
        
        <Router>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/shop" component={Shop}/>
                <Route path="/about" component={About}/>
                
            </Switch>

        </Router>


    )

}


const Home = (props)=>{

    return (
        <h1>Home Page</h1> 
    )
}



ReactDOM.render(<App />, document.getElementById('root'));
