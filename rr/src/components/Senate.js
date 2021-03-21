import React from "react";
import { Link } from "react-router-dom";

function Senate() {
  return (
    <div className="container-fluid padding">
      <div className="row welcome text-center">
        <div className="col-12">
          <h1 className="display"> Senate</h1>
        </div>
      </div>
      <div className="row padding">
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://i.ytimg.com/vi/oT7dMHAiCfs/hqdefault.jpg"
            />
            <div className="card-body">
              <h4 className="card-title">Legislators</h4>
              {/* <p className="card-text">
                Textile sites are locations where you can drop off fabrics,
                clothing, shoes, blankets, towels, coats, and/or bedding to be
                recycled.
              </p> */}
              <a href="#" className="btn btn-outline-secondary">
                <Link to={`/sites/textiles`}> View Legislators</Link>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://i.pinimg.com/originals/41/59/04/415904184b439d5957054a2d30e52df9.png"
            />
            <div className="card-body">
              <h4 className="card-title">Bills</h4>
              {/* <p className="card-text">
                Textile sites are locations where you can drop off fabrics,
                clothing, shoes, blankets, towels, coats, and/or bedding to be
                recycled.
              </p> */}
              <a href="#" className="btn btn-outline-secondary">
                <Link to={`/sites/textiles`}> View Bills</Link>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://i.ytimg.com/vi/H-eYBZFEzf8/hqdefault.jpg"
            />
            <div className="card-body">
              <h4 className="card-title">Committees</h4>
              {/* <p className="card-text">
                Electronic sites are locations where you can drop off computers,
                televisions, cellphones, power tools, electric razors and/or
                cameras to be recycled.
              </p> */}
              <a href="#" className="btn btn-outline-secondary">
                <Link to={`/sites/electronics`}> View Committees</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Senate;
