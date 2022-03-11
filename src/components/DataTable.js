function DataTable({ data }) {


  return (
    <>
      <div className="white_card card_height_100 mb_30">
        <div className="white_card_header">
          <div className="box_header m-0">
            <div className="main-title">
              <h3 className="m-0">Data table</h3>
            </div>
          </div>
        </div>
        <div className="white_card_body">
          <div className="QA_section">
            <div className="QA_table mb_30">
              <table className="table lms_table_active ">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Category</th>
                    <th scope="col">OS</th>
                    <th scope="col">Country</th>
                    <th scope="col">First Login</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.category}</td>
                      <td>{item.os}</td>
                      <td>{item.country}</td>
                      <td>{item.date}</td>
                      <td>
                        <a
                          href="#"
                          className={
                            item.status === "Connected"
                              ? "status_btn"
                              : "status_btn_danger"
                          }
                        >
                          {item.status}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataTable;
