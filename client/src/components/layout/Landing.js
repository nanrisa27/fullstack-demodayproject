import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">"Ctrl-Alt-Fix" Developers Hub</h1>
          <p className="lead">
            The coolest social platform for developers to  connect and  share their knowledge and skills on
            everything web related. Join our Network and stay up to date with  the latest
            tips and tricks in the industry

          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
