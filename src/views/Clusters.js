/* Import components */
import Breadcrumb from "../components/layouts/Breadcrumb";
import GraphGenerateData from "../components/data/GraphGenerateData";

function Clusters() {
  return (
    <>
      <div className="main_content_iner overly_inner ">
        <div className="container-fluid p-0 ">
          <div className="row">
            <div className="col-12">
              <Breadcrumb page="Clusters"></Breadcrumb>
            </div>
          </div>
          <div className="row ">
            <div className="col-xl-12 mx-auto ">
              <GraphGenerateData> </GraphGenerateData>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clusters;
