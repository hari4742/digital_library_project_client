import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './routes/Home';
import Books from './routes/Books';
import About from './routes/About';


const App = ()=>{
    return(
        <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/books" component={Books}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
        </Router>
    );
}

export default App;