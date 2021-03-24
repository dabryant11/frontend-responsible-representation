import React from "react";

function Activism() {
  return (
    <div>
      <div className="row welcome text-center">
        <div className="col-12">
          <h1 className="display"> Activism</h1>
        </div>
      </div>

      <a
        className="twitter-timeline"
        href="https://twitter.com/lscohio?ref_src=twsrc%5Etfw"
      >
        Tweets by lscohio
      </a>
      <div className="container-fluid">
        <div className="row jumbotron">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p className="lead">
              “The fights that we're fighting now — whether they be for gender
              equity, trans rights, immigration rights, just human rights in
              general —most of these fights are not new,”
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2"></div>
          <img src="https://cdn.totallythebomb.com/wp-content/uploads/2020/05/schoolhouse-rock2-700x522.png.webp"></img>
        </div>
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
            <a target="_blank" href="https://telegram.org/">
              Telegram
            </a>
            <br></br>
            <a target="_blank" href="https://signal.org/en/">
              Signal
            </a>
            <br></br>
            <a target="_blank" href="https://bridgefy.me/">
              Bridgefy
            </a>

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
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-md-4">
            {/* <div className="card">
              <img
                className="card-img-top"
                style={{ width: "50px", height: "auto" }}
                src="https://media-exp1.licdn.com/dms/image/C5603AQFqTuPUp4vWHA/profile-displayphoto-shrink_200_200/0/1561042890055?e=1620259200&v=beta&t=tbO6x9FOnN_u4YngKZ5oZF6yvHMIVmccbSEgWHrM_n4"
              />
              <div className="card-body">
                <h4 className="card-title">Darien Bryant</h4>
                <p className="card-text">Full Stack Developer</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
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
        <hr className="my-4"></hr>
      </div>
    </div>
  );
}

export default Activism;
