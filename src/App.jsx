import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './routes/Home';
import Books from './routes/Books';
import About from './routes/About';
import LoginPage from './routes/LoginPage';
import SingUp from './routes/SignUp';
import BookDetails from './routes/BookDetails';


const App = ()=>{
    return(
        <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/books" component={Books}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/sign-up" component={SingUp}/>
                    <Route exact path="/books/book/:id/details/:book_name" component={BookDetails}/>
                </Switch>
        </Router>
    );
}

export default App;