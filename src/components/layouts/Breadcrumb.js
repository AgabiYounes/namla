import { Link } from "react-router-dom";

function Breadcrumb({ page }) {

  /* A function that returns the complete current date */
  const getCurrentDate = () => {
    const d = new Date();
    const year = d.getFullYear();
    const date = d.getDate();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthName = months[d.getMonth()];
    const dayName = days[d.getDay()];
    return `${dayName}, ${date} ${monthName} ${year}`;
  };

  
  return (
    <>
      <div className="page_title_box d-flex flex-wrap align-items-center justify-content-between">
        <div className="page_title_left">
          <h3 className="f_s_25 f_w_700 dark_text">{page}</h3>
          <ol className="breadcrumb page_bradcam mb-0">
            <li className="breadcrumb-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="breadcrumb-item active">{page}</li>
          </ol>
        </div>
        <div className="page_title_right">
          <div className="page_date_button">{getCurrentDate()}</div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
