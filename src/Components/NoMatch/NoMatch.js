import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';


const NoMatch = () => {
    return (
        <div className="text-center pt-5">
            <h1 className="display-4 pt-5">404 Error</h1>
            <p className="lead">Back to <Link to="/">Home</Link></p>
            <h2 className="lead text-info ">Lean Code Academy</h2>
        </div>
    );
};

export default NoMatch;