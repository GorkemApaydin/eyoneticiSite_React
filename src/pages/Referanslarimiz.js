import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Referanslarimiz() {
  return (
    <>
      <Header />
      <div className="theme-inner-banner section-spacing">
        <div className="overlay">
          <div className="container">
            <h2>Referanslarımız</h2>
          </div>
        </div>
      </div>

      <div className="service-details section-spacing">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-12">
              <div className="service-content">
                <div className="market-growth" style={{ paddingTop: "0" }}>
                  <div className="wrapper">
                    <div className="row">
                      <div className="col-xl-12 col-md-12 col-12">
                        <img src="./images/home/referams.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Referanslarimiz;
