/* Import components */
import Breadcrumb from "../components/layouts/Breadcrumb";
import SummaryGenerateData from "../components/data/SummaryGenerateData";


function Edge() {

  return (
    <>
      <div className="main_content_iner overly_inner ">
        <div className="container-fluid p-0 ">
          <div className="row">
            <div className="col-12">
              <Breadcrumb page="Edge"></Breadcrumb>
            </div>
          </div>
          <div className="row ">
            <div className="col-xl-12 mx-auto ">
              <SummaryGenerateData> </SummaryGenerateData>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edge;
