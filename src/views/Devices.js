/* Import components */
import DataTable from "../components/DataTable";
import DevicesVisitors from "../components/DevicesVisitors";
import Breadcrumb from "../components/layouts/Breadcrumb";


function Devices() {
  return (
    <>
      <div className="main_content_iner overly_inner ">
        <div className="container-fluid p-0 ">
          <div className="row">
            <div className="col-12">
                <Breadcrumb page="Devices"></Breadcrumb>
            </div>
          </div>
          <div className="row ">
            <div className="col-xl-8 mx-auto ">
              <DataTable> </DataTable>
            </div>
            <div className="col-xl-4 mx-auto ">
              <DevicesVisitors> </DevicesVisitors>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Devices;
