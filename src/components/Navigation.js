import React from "react";
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="selected">
                Accueil
            </NavLink>
            <NavLink exact to="/a-propos" activeClassName="selected">
                À propos
            </NavLink>
        </div>
    );
};

export default Navigation;