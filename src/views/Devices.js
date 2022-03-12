/* Import components */
import Breadcrumb from "../components/layouts/Breadcrumb";
import TableGenerateData from "../components/data/TableGenerateData";

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
            <div className="col-xl-12 mx-auto ">
              <TableGenerateData> </TableGenerateData>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Devices;
