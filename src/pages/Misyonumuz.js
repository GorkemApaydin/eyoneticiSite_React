import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Misyonumuz() {
  return (
    <>
      <Header />
      <div className="theme-inner-banner section-spacing">
        <div className="overlay">
          <div className="container">
            <h2>Misyonumuz</h2>
          </div>
        </div>
      </div>

      <div className="about-compnay-two no-bg section-spacing">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text order-lg-last">
                <p style={{"marginBottom":"95px"}}>
                  E-Yönetici, Tesis Yönetimi Hizmeti sağladığı kuruluşların “Ana
                  Faaliyetlerine” odaklanmasında ve hedeflerine ulaşmasında
                  hizmet ortağı rolünü üstlenmektedir. Bunu organize ederken hem
                  paydaşlarının hem de toplumun faydasına olacak hizmetler
                  geliştirmekte, ülkemizin en önemli konularından olan işsizlik
                  sorununa çözüm olarak çeşitli istihdam olanakları
                  yaratmaktadır. Bu felsefe çerçevesinde fertlerin yaşamlarını
                  kolaylaştırmaya yönelik projeler geliştirmek, şirketimizin
                  temel amaçlarındandır.
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

export default Misyonumuz;
