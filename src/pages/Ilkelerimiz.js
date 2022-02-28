import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Ilkelerimiz() {
  return (
    <>
      <Header />
      <div className="theme-inner-banner section-spacing">
        <div className="overlay">
          <div className="container">
            <h2>İlkelerimiz</h2>
          </div>
        </div>
      </div>

      <div className="about-compnay-two no-bg section-spacing">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text order-lg-last">
                <p style={{"marginBottom":"95px"}}>
                  E-Yönetici, bina ve tesis yönetimi alanında müşterilerine
                  geniş kapsamlı, profesyonel hizmet anlayışı ve konusunda
                  uzmanlaşmış kadrosu ile iş yapma biçimini belirleyen üç temel
                  unsuru olan “şeffaflık, güvenilirlik ve hukuka uygunluk”
                  ilkeleriyle hizmet sağlamaktadır.
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

export default Ilkelerimiz;
