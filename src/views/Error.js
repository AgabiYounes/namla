import { Link } from "react-router-dom";
function Error() {
  return (
    <>
      <div className="row" style={{ backgroundColor: "#fbf6f0" }}>
        <div className="col-12 text-center">
          <img src={require("../assets/img/bak_hovers/sad.png")} alt=""></img>
          <div className="error_heading  text-center">
            <h3 className="headline font-danger theme_color_6">404</h3>
          </div>
          <div className="col-md-8 offset-md-2 text-center">
            <p>
              The page you are attempting to reach is currently not available.
              This may be because the page does not exist or has been moved.
            </p>
          </div>
          <div className="error_btn  text-center">
            <Link to="/home" className=" default_btn theme_bg_6 ">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
