import {Link} from "react-router-dom";
export const Menu: React.FC<{}> = () => {
    return <ul className="navbar-nav menu-open">
        <li className="menu-item active">
            <Link to="/"> Home</Link>
        </li>
        <li className="menu-item">
            <a href="#author">Author</a>
        </li>
        <li className="menu-item">
            <a href="#headlines">Headline</a>
        </li>
        <li className="menu-item">
            <a href="#gallery">Gallery</a>
        </li>
        <li className="menu-item">
            <a href="#">About</a>
        </li>
        <li className="menu-item">
            <a href="#">Contact</a>
        </li>
    </ul>
}