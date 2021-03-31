import React from "react";
import { Link } from "react-router-dom";
import Buttonnn from "react-bootstrap/Button";

function Activism() {
  return (
    <div>
      <div className="row welcome text-center">
        <div className="col-12">
          {/* <h1 className="display"> Activism</h1> */}
        </div>
      </div>

      <div className="container-fluid" className="center">
        <img src="https://cdn.totallythebomb.com/wp-content/uploads/2020/05/schoolhouse-rock2-700x522.png.webp"></img>
      </div>
      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12"></div>
          <hr></hr>
          <div className="col-12">
            <p className="lead">
              “The fights that we're fighting now — whether they be for gender
              equity, trans rights, immigration rights, just human rights in
              general —most of these fights are not new,”
            </p>

            <div className="container-fluid padding">
              <div className="row welcome text-center">
                <div className="col-12">
                  <h1 className="display-4">Get Involved</h1>
                </div>
                <hr></hr>
                <div className="col-12">
                  <p className="lead">
                    {/* Although 75% of America’s waste is recyclable, we only recycle
              around 30% of it. We hope this application encourages you to start
              recycling better. */}
                  </p>
                  <i class="fab fa-telegram"></i>
                  <a
                    target="_blank"
                    href="https://www.change.org/search?q=ohio"
                  >
                    <img
                      src="https://static.change.org/brand/logo/change_blm.svg"
                      alt="HTML tutorial"
                      width="100"
                      height="auto"
                      // style="width:42px;height:42px;"
                    />
                  </a>
                  <br></br>
                  <a target="_blank" href="https://telegram.org/">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3CGYpcbXeqcAM75Ug6uLjxBaX7v_DUYR9g&usqp=CAU"
                      alt="HTML tutorial"
                      width="100"
                      height="auto"

                      // style="width:42px;height:42px;"
                    />
                  </a>
                  <br></br>
                  <a target="_blank" href="https://signal.org/en/">
                    <img
                      src="https://signal.org/assets/og/og-image-ff2096df535eee499356de64b19fa8cebb9681ab1e78cca7330e7f8b8d5ec6d5.png"
                      alt="HTML tutorial"
                      width="100"
                      height="auto"
                      // style="width:42px;height:42px;"
                    />
                  </a>
                  <br></br>
                  <a target="_blank" href="https://bridgefy.me/">
                    {/* Bridgefy */}
                    <img
                      src="https://tech2impact.com/wp-content/uploads/2020/04/Bridgefy.png"
                      alt="HTML tutorial"
                      width="100"
                      height="auto"
                      // style="width:42px;height:42px;"
                    />
                  </a>
                  <br></br>
                  {/* <Buttonnn variant="light"> */}{" "}
                  <Link to="/minority_businesses">Minority Businesses</Link>
                  {/* </Buttonnn>{" "} */}
                </div>
              </div>
            </div>
            {/* <a target="_blank" href="https://telegram.org/">
              <i class="fab fa-telegram"></i>
            </a>
            <a target="_blank" href="https://signal.org/en/">
              <i className="fab fa-instagram" />
            </a> */}
          </div>
        </div>
      </div>
      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            {/* <h1 className="display">Meet the Team</h1> */}
          </div>
          <hr></hr>
        </div>
      </div>
      {/*  */}
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-lg-6">
            {/* <h2>Our Philosophy</h2>
            <p>
              The best way to keep garbage from landfills is by limiting the
              materials you use. Reduce use when you can – and reuse and recycle
              the rest.
            </p> */}
          </div>
          <div className="col-lg-6">
            {/* <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT61L7peEy4RCEZ41RjGxW_BzLHeB9QNrdsUwgvh4jjh6veVAItY4tbVU-O_QFVdxKikOJSZHN&usqp=CAc"
              className="img-fluid"
            /> */}
          </div>
        </div>
        {/* <hr className="my-4"></hr> */}
      </div>
    </div>
  );
}

export default Activism;
