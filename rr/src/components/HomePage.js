import React from "react";

function HomePage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row jumbotron">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p className="lead">
              {/* Over 2,000 landfills are currently open in the United States,
              making our country an uglier place. And although they’re often
              camouflaged fairly well, the negative issues that accompany
              landfills remain. */}
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cByG2ZfJP_A"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2"></div>
        </div>
      </div>
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
            <a target="_blank" href="https://www.change.org/search?q=ohio">
              Petitions
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display">Meet the Team</h1>
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                style={{ width: "50px", height: "auto" }}
                src="https://media-exp1.licdn.com/dms/image/C5603AQFqTuPUp4vWHA/profile-displayphoto-shrink_200_200/0/1561042890055?e=1620259200&v=beta&t=tbO6x9FOnN_u4YngKZ5oZF6yvHMIVmccbSEgWHrM_n4"
              />
              <div className="card-body">
                <h4 className="card-title">Darien Bryant</h4>
                <p className="card-text">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-lg-6">
            <h2>Our Philosophy</h2>
            <p>
              People pay for what they do, and still more for what they have
              allowed themselves to become. And they pay for it very simply; by
              the lives they lead.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="data:image/jpeg;base64,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"
              className="img-fluid"
            />
          </div>
        </div>
        <hr className="my-4"></hr>
      </div>
    </div>
  );
}

export default HomePage;
