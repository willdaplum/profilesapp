
import React from "react";
import {
  Link
} from "react-router-dom";

export default function NavBar({ user, signOut }) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
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
