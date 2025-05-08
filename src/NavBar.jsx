import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ user, signOut }) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-app"
            viewBox="0 0 16 16"
          >
            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4z" />
          </svg>
          Stream-App
        </a>
        <form className="d-flex">
          {user ? (
            <>
              {/*<span>Hello, {user.username}</span>*/}
              <button
                type="button"
                className="btn btn-primary"
                onClick={signOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link className="btn btn-primary" to="/app">
              Sign In
            </Link>
          )}
        </form>
      </div>
    </nav>
  );
}
