function NavBar() {
  return (
    <>
      <div className="container-fluid no-gutters">
        <div className="row navbar_bg">
          <div className="col-lg-12 p-0 ">
            <div className="header_iner d-flex justify-content-between align-items-center">
              <div className="sidebar_icon d-lg-none">
                <i className="ti-menu"></i>
              </div>
              <h3 className=" d-lg-block">Welcome Younes !</h3>

              <div className="header_right d-flex justify-content-between align-items-center">
                <div className="header_notification_warp d-flex align-items-center">
                  <li>
                    <a className="bell_notification_clicker" href="#">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17.71"
                        height="18.595"
                        viewBox="0 0 17.71 18.595"
                      >
                        <g id="bell" transform="translate(0 -64)">
                          <path
                            id="Path_894"
                            data-name="Path 894"
                            d="M136.653,419.985a3.324,3.324,0,0,1-3.321-3.321.664.664,0,1,1,1.328,0,1.992,1.992,0,1,0,3.985,0,.664.664,0,1,1,1.328,0A3.324,3.324,0,0,1,136.653,419.985Zm0,0"
                            transform="translate(-127.798 -337.389)"
                          />
                          <path
                            id="Path_895"
                            data-name="Path 895"
                            d="M16.16,79.939H1.55A1.55,1.55,0,0,1,.542,77.212a5.934,5.934,0,0,0,2.115-4.544V70.2a6.2,6.2,0,0,1,12.4,0v2.469a5.933,5.933,0,0,0,2.106,4.538,1.549,1.549,0,0,1-1,2.734ZM8.855,65.329a4.875,4.875,0,0,0-4.87,4.87v2.469A7.257,7.257,0,0,1,1.408,78.22a.22.22,0,0,0-.08.17.224.224,0,0,0,.221.221H16.16a.224.224,0,0,0,.221-.221.219.219,0,0,0-.078-.168,7.259,7.259,0,0,1-2.578-5.554V70.2a4.875,4.875,0,0,0-4.87-4.87Zm0,0"
                          />
                        </g>
                      </svg>
                      <span>2</span>
                    </a>
                  </li>
                </div>
                <div className="profile_info">
                  <img
                    src={require("../../assets/img/client_img.jpg")}
                    alt="#"
                  ></img>
                  <div className="profile_info_iner">
                    <div className="profile_author_name">
                      <p>Frontend Developer </p>
                      <h5>Mr. Younes AGABI</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
