/* Import components */
import Breadcrumb from "../components/layouts/Breadcrumb";
import GraphGenerateData from "../components/data/GraphGenerateData";
import TableGenerateData from "../components/data/TableGenerateData";
import SummaryGenerateData from "../components/data/SummaryGenerateData";

function Home() {
  return (
    <>
      <div className="main_content_iner overly_inner ">
        <div className="container-fluid p-0 ">
          <div className="row">
            <div className="col-12">
              <Breadcrumb page="Overview"></Breadcrumb>
            </div>
          </div>
          <div className="row ">
            <div className="col-xl-8 ">
              <GraphGenerateData> </GraphGenerateData>
            </div>
            <div className="col-xl-4 ">
              <SummaryGenerateData></SummaryGenerateData>
            </div>
            <div className="col-xl-12">
              <TableGenerateData></TableGenerateData>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
