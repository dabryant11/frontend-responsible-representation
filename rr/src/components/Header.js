import React from "react";
import { Link } from "react-router-dom";
import Logo from "./rr.png"; // with import
import Logo2 from "./flag.png"; // with import
// import Logo from “./rr.png”;
// import ReactBootstrap from "react-bootstrap";
// import
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <img
          // src="https://lh3.googleusercontent.com/proxy/c3Ou_-ztqfPn1GNl1XO47SiFY4oM1r4-XZNTIk8-KhIVhpsAA6FOX9KVhE2pd453Kxg0t48d2h2FEzd-quBRCpFBNQwv40rIhsNrVZl4Qb1plwBIJl9js-TDLTxH7onF"
          src={Logo2}
          alt="logooooo"
          width="auto"
          height="100rem"
          classname="logologo"
          border-radius="5px;"
        />

        {/* <Dropdown as={ButtonGroup}>
          <Button variant="info">mix it up style-wise</Button>
          <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        {/* <a href="" className="navbar-brand" href="#">
          <img src="{Logo2}" alt="" />
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <Button variant="light">
            {" "}
            <Link to="/home">Home</Link>
          </Button>{" "}
          <Button variant="light">
            {" "}
            <Link to="/minority_businesses">Minority Businesses</Link>
          </Button>{" "}
          <Button variant="light">
            {" "}
            <Link to="/state_budgets">State Budgets</Link>
          </Button>{" "}
          <Button variant="light">
            {" "}
            <Link to="/state_agencies">State Agencies</Link>
          </Button>{" "}
          <Button variant="light">
            {" "}
            <Link to="/activism">Activism</Link>
          </Button>{" "}
          <Button variant="light">
            {" "}
            <Link to="/user_legislators">User Legislators</Link>
          </Button>{" "}
          {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button<Link to="/user_legislators">User Legislators</Link>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle id="dropdown-custom-1" variant="light">
              Chambers
              {/* <Link to="/chambers">Chambers</Link> */}
            </Dropdown.Toggle>
            <Dropdown.Menu className="super-colors">
              {/* <Dropdown.Item eventKey="1">Action</Dropdown.Item> */}
              <Dropdown.Item eventKey="1">
                {" "}
                <Link to="/HOR">House of Representatives</Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="1">
                <Link to="/senate">Senate</Link>
              </Dropdown.Item>
              {/* <Dropdown.Item eventKey="2">Another action</Dropdown.Item> */}
              {/* <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item> */}
              {/* <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>{" "}
          {/* <img
            // src="https://lh3.googleusercontent.com/proxy/c3Ou_-ztqfPn1GNl1XO47SiFY4oM1r4-XZNTIk8-KhIVhpsAA6FOX9KVhE2pd453Kxg0t48d2h2FEzd-quBRCpFBNQwv40rIhsNrVZl4Qb1plwBIJl9js-TDLTxH7onF"
            src={Logo2}
            alt="logooooo"
            width="auto"
            height="100rem"
            classname="logologo"
            border-radius="5px;"
          /> */}
          {/* <h5>Responsible Representation</h5> */}
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">
                <Link to="/home">Home</Link>
              </a>
            </li> */}

            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/state_agencies">State Agencies</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/state_budgets">State Budgets</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/minority_businesses">Minority Businesses</Link>
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/HOR">House of Representatives</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/senate">Senate</Link>
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                // <Link to="/chambers">Chambers</Link>
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/user_legislators">User Legislators</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/activism">Activism</Link>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    //   <div className="container">
    //     <a className="navbar-brand" href="#">
    //       <img
    //         src="https://lh3.googleusercontent.com/proxy/OF1LeE6J-hR0X9LSKYB1MLsqMG3WnkFE4uPF8ekfoDhZD6RStZiOtwz5-fxJUINLYCDaOIu5urSYoqvLXZAp2VysaXKBhjRiWHi10imi9JzCBQMjSh9vJYkRDQ_qB-AE"
    //         alt="rr"
    //         width="auto"
    //         height="100rem"
    //         classname="logologo"
    //         border-radius="5px;"
    //       />
    //       <h5>Responsible Representation</h5>
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarResponsive"
    //       aria-controls="navbarResponsive"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarResponsive">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item active">
    //           <a className="nav-link" href="#">
    //             <Link to="/home">Home</Link>
    //           </a>
    //         </li>

    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             <Link to="/state_agenciess">State Agencies</Link>
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             <Link to="/state_budgets">State Budget</Link>
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             <Link to="/minority_businesses">Minority Businesses</Link>
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             <Link to="/HOR">House of Representatives</Link>
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             <Link to="/senates">Senate</Link>
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             <Link to="/activism">Activism</Link>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Header;
