import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Vizyonumuz() {
  return (
    <>
      <Header />

      <div className="theme-inner-banner section-spacing">
        <div className="overlay">
          <div className="container">
            <h2>Vizyonumuz</h2>
          </div>
        </div>
      </div>

      <div className="about-compnay-two no-bg section-spacing">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text order-lg-last">
                <p style={{ marginBottom: "95px" }}>
                  İnsanların yaşam ve çalışma alanlarından oluşan projelerde,
                  bireylerin hayatına değer katarak ve yönetim hizmetleri ile
                  harcadıkları zamanı onlara daha kaliteli hizmet anlayışı ile
                  geri sunarak, yönetim ve işletim hizmetleri alanında,
                  Türkiye’nin en iyi “Gayrimenkul Yönetimi” firmaları arasında
                  yer almak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Vizyonumuz;
