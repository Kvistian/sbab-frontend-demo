import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Stops from './stops/Stops';
import Lines from './lines/Lines';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Stops />} />
                <Route path="/stops" element={<Stops />} />
                <Route path="/lines" element={<Lines />} />
            </Routes>
        </Router>
    );
}

export default App;
