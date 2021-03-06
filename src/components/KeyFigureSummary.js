function KeyFigureSummary({ data }) {
  return (
    <>
      <div className="white_card card_height_100 mb_30 social_media_card">
        <div className="white_card_header">
          <div className="main-title">
            <h3 className="m-0">Edge Summary</h3>
            <span>Summary of key figures</span>
          </div>
        </div>
        <div className="media_thumb ml_25"></div>
        <div className="media_card_body">
          <div className="media_card_list">
            <div className="single_media_card">
              <span>Memory Usage</span>
              <h3>{data[0].memory_usage}%</h3>
            </div>
            <div className="single_media_card">
              <span>CPU Usage</span>
              <h3>{data[0].cpu_usage}%</h3>
            </div>
            <div className="single_media_card">
              <span>Edge Connected</span>
              <h3>{data[0].edge}</h3>
            </div>
            <div className="single_media_card">
              <span>total number of devices</span>
              <h3>{data[0].devices}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KeyFigureSummary;
