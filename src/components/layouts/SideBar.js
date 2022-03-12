import { Link } from "react-router-dom";
function SideBar() {
  return (
    <>
      <nav className="sidebar">
        <div className="logo d-flex justify-content-between">
          <a className="large_logo" href="index.html">
            <img src={require("../../assets/img/logo.png")} alt=""></img>{" "}
          </a>
          <a className="small_logo" href="index.html">
            <img src={require("../../assets/img/mini_logo.png")} alt=""></img>
          </a>
          <div className="sidebar_close_icon d-lg-none">
            <i className="ti-close"></i>
          </div>
        </div>
        <ul id="sidebar_menu">
          <li className="">
            <Link to="/home" className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <i className="fa-solid fa-house"></i>
              </div>
              <div className="nav_title">
                <span>Home </span>
              </div>
            </Link>
            <ul>
              <li>
                <Link to="/home/clusters">Clusters </Link>
              </li>
              <li>
                <Link to="/home/edge">Edge </Link>
              </li>
              <li>
                <Link to="/home/devices">Devices </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="nav_title">
                <span>Admin</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <div className="nav_title">
                <span>Analytics </span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <i className="fa-solid fa-gear"></i>
              </div>
              <div className="nav_title">
                <span>Config </span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
