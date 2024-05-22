import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/error-page.css';


const ErrorPage = () => {
  return (
    <div className="error-page">
        <div className="error-page-text">
            <h1>Sorry</h1>
            <h1>"This page is not found"</h1>
            <div className="button">
            <Link to="/">Back to Home</Link>
            </div> 
        </div>
    </div>
  )
}

export default ErrorPage
