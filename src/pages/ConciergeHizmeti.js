import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function ConciergeHizmeti() {
  return (
    <>
      <Header />

      <div className="theme-inner-banner section-spacing">
        <div className="overlay">
          <div className="container">
            <h2>Concierge Hizmetleri</h2>
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
                        <p>
                          <b>
                            Sizlerin geri dönüş ve talepleri ile hizmetlerimiz
                            her geçen gün yenileniyor, çeşitleniyor ve hayata
                            daha çok değer katıyor…
                          </b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>Temizlik Hizmeti</li>
                          <li>Ütü Hizmeti</li>
                          <li>Yatak Dezenfektasyonu</li>
                          <li>Teknik Servis Hizmeti</li>
                          <li>Nakliye Hizmeti</li>
                          <li>Kuru Temizleme Hizmeti</li>
                          <li>Halı ve Koltuk Yıkama Hizmeti</li>
                          <li>İlaçlama Hizmeti</li>
                          <li>Çiçek Bakım Hizmeti</li>
                          <li>Catering ve Servis Personeli Hizmeti</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>Parti ve Organizasyon Hizmeti</li>
                          <li>Çilingir Hizmeti</li>
                          <li>Araç Yıkama Hizmeti</li>
                          <li>Şoförlü ve Şoförsüz Araç Kiralama Hizmeti</li>
                          <li>Motorlu Vale</li>
                          <li>Motorlu Kurye</li>
                          <li>VIP Havaalanı Transfer Hizmeti</li>
                          <li>Sigorta Hizmeti</li>
                          <li>Diyetisyen</li>
                          <li>Kedi ve Köpek Oteli</li>
                        </ul>
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

export default ConciergeHizmeti;
