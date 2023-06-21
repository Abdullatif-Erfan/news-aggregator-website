import Header from "./header/Header";
import Footer from "./footer/Footer";
import { CSSProperties } from "react";

type chilPropsType = {
  className?: string;
  styleAsProps?: CSSProperties;
  children: React.ReactNode;
};
const Layout: React.FC<chilPropsType> = ({
  className,
  styleAsProps,
  children,
}: chilPropsType) => {
  return (
    <>
      {/* Wrapper */}
      <div className={`wrapper ${className && className}`} style={styleAsProps}>
        <Header />
        {children}
        <Footer />
      </div>
      {/* End Wrapper */}
    </>
  );
};
export default Layout;
