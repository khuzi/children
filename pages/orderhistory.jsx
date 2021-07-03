import React, { useState } from "react";
import NavBar from "../components/header";
import UpdateBox from "../components/updatenewcomp";
import { Table } from "react-bootstrap";
import Footer from "../components/footer";
import { repository } from "../utiles/repository";
import { useSelector } from "react-redux";
import Loading from "../components/LoadingAnimation";
import Moment from "moment";
import { Modal } from "react-bootstrap";
import PrivateRoute from "../components/privateRoute";

export default () => {
  const [showanimation, setshowanimation] = React.useState(false);
  const [blogsmain, setBlogs] = React.useState([]);
  const token = useSelector((x) => x.fcmToken);
  const [tableData, setTableData] = useState(null);

  React.useEffect(() => {
    setshowanimation(true);
    try {
      (async () => {
        const { data, status } = await repository
          .orders(token)
          .then((x) => x)
          .then((x) => x);
        console.log(data.data, "vjdbsvjkb");
        if (status == 200) {
          setBlogs(data.data);
          setshowanimation(false);
        } else {
          setshowanimation(false);
        }
      })();
    } catch (e) {
      setshowanimation(false);
    }
  }, []);

  return (
    <PrivateRoute>
      <div>
        {showanimation ? <Loading /> : <></>}
        <NavBar
          subtitle=""
          hassubtitle={false}
          title="Order"
          titleSpan="History"
        />
        <div className="mt-5 mb-5 container">
          <Table size="sm">
            <thead>
              <tr className="tab-head-cst">
                <th>Order number</th>
                <th>Order date</th>
                <th>Status</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {blogsmain && blogsmain !== undefined && blogsmain.length > 0
                ? blogsmain.map((item, index) => {
                    return (
                      <>
                        <tr className="tab-body-cst" key={index}>
                          <td>ORD-{item.id}</td>
                          <td>{item.completed_at}</td>
                          <td>{item.status_name}</td>
                          <td>
                            {item.price ? item.price : ""} For{" "}
                            {item.items ? item?.items.length : ""} item
                          </td>
                          <td>
                            {" "}
                            <button
                              class="btn text-dark p-0 font-weight-bold "
                              onClick={() => setTableData(item.items)}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                        <div className="mb-1"></div>
                      </>
                    );
                  })
                : null}
            </tbody>
          </Table>
        </div>

        <UpdateBox />
        <Footer />
        <Modal
          show={tableData}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className=""
          onHide={() => setTableData(null)}
        >
          <Modal.Body>
            <Table>
              <thead>
                <tr>
                  <th style={{ width: "500px" }}>ITEMS</th>
                  <th>QTY</th>
                  <th>UNIT PRICE</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              {tableData?.map((cell) => {
                return (
                  <tbody>
                    <tr className="border-bottom">
                      <td>
                        <div className="row">
                          <div className="col-2">
                            <img
                              src={cell?.book?.title}
                              className="img-responsive w-100"
                            />
                          </div>
                          <div className="col-10">
                            <h5 className="text-dark">{cell?.book?.name}</h5>
                            <p>{cell?.book?.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">{tableData?.length}</td>
                      <td className="text-center">{cell?.price}</td>
                      <td className="text-center">{cell?.price}</td>
                    </tr>
                    <tr className="border-bottom">
                      <td></td>
                      <td></td>
                      <td className="text-center text-dark">Total</td>
                      <td className="text-center text-dark">{cell?.price}</td>
                    </tr>
                  </tbody>
                );
              })}
            </Table>
          </Modal.Body>
        </Modal>
      </div>
    </PrivateRoute>
  );
};
