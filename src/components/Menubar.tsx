import { motion } from "framer-motion";
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
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
              <button className="btn btn-outline-secondary" type="button">
                Sign Up
              </button>
            </motion.div>
          </a>
          <a className="navbar-brand ms-2" href="log">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
              <button className="btn btn-outline-secondary" type="button">
                Log In
              </button>
            </motion.div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
