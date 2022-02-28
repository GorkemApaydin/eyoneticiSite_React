import React from "react";

function Services() {
  return (
    <div className="service-style-one section-spacing">
      <div className="container">
        <div className="theme-title-one">
          <h2>Duyuru & Hizmetler</h2>
        </div>
        <div className="wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="col-md-12" style={{ marginTop: "10px" }}>
                <div
                  className="fb-page"
                  data-href="https://www.facebook.com/EYonetici"
                  data-tabs="timeline"
                  data-width="600"
                  data-height="465"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="true"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/EYonetici"
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/EYonetici">
                      E-Yönetici Profesyonel Proje/Site/İş Merkezi/AVM Yönetimi
                    </a>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={{ marginTop: "10px" }}>
              <div className="col-12">
                <div className="single-service" style={{ width: "100%" }}>
                  <div className="img-box">
                    <img src="images/home/6.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h5>
                      <a href="yonetim-hizmetleri">Yönetim Hizmetleri</a>
                    </h5>
                    <a href="yonetim-hizmetleri" className="read-more">
                      Detaylı Bilgi
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="single-service" style={{ width: "100%" }}>
                  <div className="img-box">
                    <img src="images/home/5.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h5>
                      <a href="enerji-yonetimi">
                        Enerji Yönetimi ve Danışmanlığı
                      </a>
                    </h5>
                    <a href="enerji-yonetimi" className="read-more">
                      Detaylı Bilgi
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="single-service" style={{ width: "100%" }}>
                  <div className="img-box">
                    <img src="images/home/3.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h5>
                      <a href="teknik-isletim-hizmetleri">
                        Teknik İşletim Hizmetleri
                      </a>
                    </h5>
                    <a href="teknik-isletim-hizmetleri" className="read-more">
                      Detaylı Bilgi
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="single-service" style={{ width: "100%" }}>
                  <div className="img-box">
                    <img src="images/home/4.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h5>
                      <a href="concierge-hizmeti">Concierge Hizmeti</a>
                    </h5>
                    <a href="concierge-hizmeti" className="read-more">
                      Detaylı Bilgi
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
