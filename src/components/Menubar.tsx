import React from "react";

const Menubar: React.FC = (): JSX.Element => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="/logo.png"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          Name
        </a>
        <div className="ms-auto d-flex">
          <a className="navbar-brand" href="register">
            <button className="btn btn-outline-secondary" type="button">
              Sign Up
            </button>
          </a>
          <a className="navbar-brand ms-2" href="log">
            <button className="btn btn-outline-secondary" type="button">
              Log In
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
