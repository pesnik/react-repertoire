import { Link, Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/transaction">Transaction</Link>
          </li>
          <li>
            <Link to="/p4vc">P4VC</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet /> {}
      </div>
    </div>
  );
};

export default MainLayout;