import React from "react";

const P1_Card = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "35rem", height: "27rem" }}>
            <img
              src="https://th.bing.com/th/id/R.1404f0ada1fc5f569440d06000f54738?rik=ekypdXeAOEkEnA&riu=http%3a%2f%2fimages.esellerpro.com%2f2493%2fI%2f479%2f1%2f51143401005EMBLEM+REAR1.jpg&ehk=H3Dgwpp4oLs2IzSXLTsg4wazl2Egy33RX6XOMADGn%2bM%3d&risl=&pid=ImgRaw&r=0"
              className="card-img-top"
              alt="image"
            />
            <div className="card-body">
              <h3 className="card-text">BMW</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card"
            style={{ width: "35rem", height: "27rem", fontFamily: "monospace" }}
          >
            <div className="card-body">
              <p className="card-text">
                Bayerische Motoren Werke AG, abbreviated as
                <span style={{ color: "blue" }}> BMW</span> is a German
                multinational manufacturer of luxury vehicles and motorcycles
                headquartered in Munich, Bavaria, Germany. The company was
                founded in 1916 as a manufacturer of aircraft engines, which it
                produced from 1917 to 1918 and again from 1933 to 1945.
              </p>
              <p className="card-text text-start">Brand Name : BMW</p>
              <p className="card-text text-start">Year : 1950</p>
              <p className="card-text text-start">Location : German</p>
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Full Info
              </button>

              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        BMW CAR
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body" style={{ fontStyle: "italic" }}>
                      BMW company was founded in 1916 as a manufacturer of
                      aircraft engines, which it produced from 1917 to 1918 and
                      again from 1933 to 1945. Otto Flugmaschinenfabrik was
                      founded in 1910 by Gustav Otto in Bavaria. The firm was
                      reorganized on 7 March 1916 into Bayerische Flugzeugwerke
                      AG. This company was then renamed to Bayerische Motoren
                      Werke (BMW) in 1922. However, the name BMW dates back to
                      1913, when the original company to use the name was
                      founded by Karl Rapp (initially as Rapp Motorenwerke
                      GmbH). The name and Rapp Motorenwerke's engine-production
                      assets were transferred to Bayerische Flugzeugwerke in
                      1922, who adopted the name the same year. BMW's first
                      product was a straight-six aircraft engine called the BMW
                      IIIa, designed in the spring of 1917 by engineer Max Friz.
                      Following the end of World War I, BMW remained in business
                      by producing motorcycle engines, farm equipment, household
                      items and railway brakes. The company produced its first
                      motorcycle, the BMW R 32 in 1923. BMW became an automobile
                      manufacturer in 1928 when it purchased Fahrzeugfabrik
                      Eisenach, which, at the time, built Austin Sevens under
                      licence under the Dixi marque. The first car sold as a BMW
                      was a rebadged Dixi called the BMW 3/15, following BMW's
                      acquisition of the car manufacturer Automobilwerk
                      Eisenach. Throughout the 1930s, BMW expanded its range
                      into sports cars and larger luxury cars. Aircraft engines,
                      motorcycles, and automobiles would be BMW's main products
                      until World War II. During the war, BMW concentrated on
                      aircraft engine production using as many as 40,000 slave
                      laborers.
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default P1_Card;
