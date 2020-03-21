import React , {Component} from 'react';
import Link from "next/link";
import ActiveLink from "./ActiveLink/ActiveLinks";


const BsNavLink = props => {
    const { route, title } = props;

    return (
        <ActiveLink activeClass="active" href={route}>
            <a className="nav-link">{title}</a>
        </ActiveLink>
    );
};

export default class Nav extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-3 shadow">
                <div className="container">
                    <a className="btn navbar-brand btn-success rounded" href="/">MG</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto pl-md-4">
                            <li className="nav-item">
                                <BsNavLink route="/" title="Home" />
                            </li>
                            <li className="nav-item">
                                <BsNavLink route="/about" title="About" />
                            </li>
                            <li className="nav-item">
                                <BsNavLink route="/services" title="Services" />
                            </li>
                            <li className="nav-item">
                                <BsNavLink route="/contact" title="Contact" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
