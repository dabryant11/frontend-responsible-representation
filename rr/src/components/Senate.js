import React from "react";
import { Link } from "react-router-dom";

function Senate() {
  return (
    // <div className="container-fluid padding">
    //   <div className="row welcome text-center">
    //     <div className="col-12">
    //       <h1 className="display"> House of Representatives</h1>
    //     </div>
    //   </div>
    //   <div className="row padding">
    //     <div className="col-md-4">
    //       <div className="card">
    //         <img
    //           className="card-img-top"
    //           src="https://i.ytimg.com/vi/oT7dMHAiCfs/hqdefault.jpg"
    //         />
    //         <div className="card-body">
    //           <h4 className="card-title">Legislators</h4>
    //           {/* <p className="card-text">
    //             Textile sites are locations where you can drop off fabrics,
    //             clothing, shoes, blankets, towels, coats, and/or bedding to be
    //             recycled.
    //           </p> */}
    //           <a href="#" className="btn btn-outline-secondary">
    //             <Link to={`/sites/textiles`}> View Legislators</Link>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-4">
    //       <div className="card">
    //         <img
    //           className="card-img-top"
    //           src="https://i.pinimg.com/originals/41/59/04/415904184b439d5957054a2d30e52df9.png"
    //         />
    //         <div className="card-body">
    //           <h4 className="card-title">Bills</h4>
    //           {/* <p className="card-text">
    //             Textile sites are locations where you can drop off fabrics,
    //             clothing, shoes, blankets, towels, coats, and/or bedding to be
    //             recycled.
    //           </p> */}
    //           <a href="#" className="btn btn-outline-secondary">
    //             <Link to={`/sites/textiles`}> View Bills</Link>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-4">

    //     </div>
    //   </div>
    // </div>

    <div className="row text-center">
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img
            className="card-img-top"
            src="https://i.ytimg.com/vi/oT7dMHAiCfs/hqdefault.jpg"
            alt=""
          />
          <div className="card-body"></div>
          <div className="card-footer">
            <h4 className="card-title">Legislators</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img
            className="card-img-top"
            src="https://i.pinimg.com/originals/41/59/04/415904184b439d5957054a2d30e52df9.png"
            alt=""
          />
          <div className="card-body"></div>
          <div className="card-footer">
            <h4 className="card-title">Bills</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img
            className="card-img-top"
            src="https://i.ytimg.com/vi/H-eYBZFEzf8/hqdefault.jpg   "
            alt=""
          />
          <div className="card-body"></div>
          <div className="card-footer">
            <h4 className="card-title">Committees</h4>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img
            className="card-img-top"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="card-body"></div>
          <div className="card-footer">
            <h4 className="card-title">Campaign Finances</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Senate;
