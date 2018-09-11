import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Caesar from "./Caesar";
import Substitution from "./Substitution";
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
                                <li><Link to="/caesar">Caesar</Link></li>
                                <li><Link to="/substitution">Substitution</Link></li>
                            </ul>
                        </div>
                    </div>
                    <Route path="/caesar" component={Caesar} />
                    <Route path="/substitution" component={Substitution} />
                </div>
            </Router>
        );
    }
}

export default App;
