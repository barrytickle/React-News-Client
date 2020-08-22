import React from "react";

export const Navigation = () => {
    return (
        <div id="navBar" className="collapse navbar-collapse">
            <ul className="js-scroll-nav navbar-nav">
                <li className="navbar-nav-item">
                    <a className="nav-link" href="#/">Home</a>
                </li>
                <li className="navbar-nav-item">
                    <a className="nav-link" href="#pagesSection">Pages</a>
                </li>
                <li className="navbar-nav-item">
                    <a className="nav-link" href="#worksSection">Works</a>
                </li>
                <li className="navbar-nav-item">
                    <a className="nav-link" href="#blogSection">Blog</a>
                </li>
                <li className="navbar-nav-item">
                    <a className="nav-link" href="#specialtySection">Specialty</a>
                </li>
                <li className="nav-item navbar-nav-last-item">
                    <a className="btn btn-primary btn-sm transition-3d-hover" href="/login" target="_blank">login</a>
                </li>
            </ul>
        </div>
    )
}