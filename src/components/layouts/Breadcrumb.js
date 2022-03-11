function Breadcrumb({page}) {
        const current = new Date();
        const date = `${current.toDateString()}`;
  return (
    <>
      <div className="page_title_box d-flex flex-wrap align-items-center justify-content-between">
        <div className="page_title_left">
          <h3 className="f_s_25 f_w_700 dark_text">{page}</h3>
          <ol className="breadcrumb page_bradcam mb-0">
            <li className="breadcrumb-item">
              <a href="javascript:void(0);">Home</a>
            </li>
            <li className="breadcrumb-item active">{page}</li>
          </ol>
        </div>
        <div className="page_title_right">
          <div className="page_date_button">{date}</div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
