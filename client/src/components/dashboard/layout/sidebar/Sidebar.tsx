import { Link } from "react-router-dom";
const Sidebar: React.FC<{}> = () => {
    return <section className="dashboard-sidebar">
        <a href="#" className="brand">
            <i className="bx bxs-smile icon" />
            <span className="brand-name">InnoScripta</span>
        </a>
        <ul className="side-menu">
            <li>
                <Link to="/dashboard" className="active">
                    <i className="fa fa-home icon white-color " />
                    <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <i className="fa fa-user icon" />
                    <span className="menu-item">Profile</span>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <i className="fa fa-heart icon" />
                    <span className="menu-item">Prefered List</span>
                </Link>
            </li>

        </ul>
    </section>
}
export default Sidebar;