import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand">
        <a className="navbar-brand" href="/">React Google Book Search</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="/">Search</a></li>
                <li className="nav-item"><a className="nav-link" href="/saved">Saved</a></li>
            </ul>
        </div>
    </nav>
  );
}

export default Nav;
