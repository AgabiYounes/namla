/* Import components */
import ClusterChart from "../components/ClusterChart";
import KeyFigureSummary from "../components/KeyFigureSummary";
import DataTable from "../components/DataTable";
import DevicesVisitors from "../components/DevicesVisitors";
import Breadcrumb from "../components/layouts/Breadcrumb";


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
              <ClusterChart> </ClusterChart>
            </div>
            <div className="col-xl-4 ">
              <KeyFigureSummary></KeyFigureSummary>
            </div>
            <div className="col-xl-8">
              <DataTable></DataTable>
            </div>
            <div className="col-xl-4 ">
              <DevicesVisitors></DevicesVisitors>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
