import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Caesar from "./Caesar";
import Home from "./Home";
import "./App.css";




class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <div className="appheader">
                        <h1 className="apptitle">CryptoCrackers</h1>
                        <div className="appmenu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/caesar">Caesar</Link></li>
                                <li><Link to="/home">Second home</Link></li>
                            </ul>
                        </div>
                    </div>
                    <Route exact path="/" Component={Home} />
                    <Route path="/caesar" component={Caesar} />
                    <Route path="/home" component={Home} />
                </div>
            </Router>
        );
    }
}

export default App;
