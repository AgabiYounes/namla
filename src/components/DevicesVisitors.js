function DevicesVisitors() {
  return (
    <>
      <div className="white_card card_height_100 mb_30">
        <div className="white_card_header">
          <div className="main-title">
            <h3 className="m-0">Visitors by Device</h3>
            <span>number of Visaitors</span>
          </div>
        </div>
        <div className="white_card_body ">
          <div className="card_container">
            <div
              id="platform_type_dates_donut"
              style={{ height: "280px" }}
            ></div>
          </div>
          <div className="devices_btn text-center">
            <a className="color_button color_button2" href="#">
              Android
            </a>
            <a className="color_button" href="#">
              iphone
            </a>
            <a className="color_button color_button3" href="#">
              Others
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DevicesVisitors;
