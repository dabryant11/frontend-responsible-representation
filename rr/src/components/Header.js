import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">
        {/* <a href="" className="navbar-brand" href="#">
          <img
            src="https://lh3.googleusercontent.com/proxy/vwTJf22bitlm3ERLf4Cg1EHcjLv3Bvut0ddwIiPkFdnxy7462XZdxZHctM73hwMtVBBYuFQKGxw1uXv22Mqup0iU2DFjfxX86BV5VwqKJNKfy52IDpJ1kHdvKUBGHUaa"
            alt=""
          />
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
          <img
            src="https://lh3.googleusercontent.com/proxy/c3Ou_-ztqfPn1GNl1XO47SiFY4oM1r4-XZNTIk8-KhIVhpsAA6FOX9KVhE2pd453Kxg0t48d2h2FEzd-quBRCpFBNQwv40rIhsNrVZl4Qb1plwBIJl9js-TDLTxH7onF"
            // src="/Users/darienbryant/Flatiron/5phase/frontend-responsible-representation/rr/src/rr.png"
            alt="logooooo"
            width="auto"
            height="100rem"
            classname="logologo"
            border-radius="5px;"
          />
          <h5>Responsible Representation</h5>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <Link to="/home">Home</Link>
              </a>
            </li>

            <li className="nav-item">
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
            </li>
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
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/chambers">Chambers</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/user_legislators">User Legislators</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/activism">Activism</Link>
              </a>
            </li>
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
