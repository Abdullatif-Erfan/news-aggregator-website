import "../assets/dashboardStyle.css";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
type propType = {
    children: React.ReactNode
}
const Layout: React.FC<propType> = ({ children }: propType) => {
    return (
        <div className="dashboard-wrapper">
            <Sidebar />
            <section id="content">
                <Header />
                {children}
            </section>
        </div>
    );
};
export default Layout;
