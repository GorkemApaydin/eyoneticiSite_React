import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function YonetimHizmetleri() {
  return (
    <>
      <Header />
      <div className="theme-inner-banner section-spacing">
        <div className="overlay">
          <div className="container">
            <h2>Yönetim Hizmetleri</h2>
          </div>
        </div>
      </div>

      <div className="service-details section-spacing">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-12">
              <div className="service-content">
                <div className="market-growth" style={{"paddingTop":"0"}}>
                  <div className="wrapper">
                    <div className="row">
                      <div className="col-xl-6 col-md-5 col-12">
                        <img src="images/home/21.jpg" alt="" />
                      </div>
                      <div className="col-xl-6 col-md-7 col-12">
                        <p>
                          <b>
                            "Çalışmak için yaşamak yerine, yaşamak için
                            çalışmak..."
                          </b>
                        </p>
                        <p>
                          Bu felsefe çerçevesinde fertlerin yaşamlarını
                          kolaylaştırmaya yönelik projeler geliştirmek,
                          şirketimizin temel amaçlarındandır.
                        </p>
                        <p>
                          Yaşam alanınıza girer girmez size farklı olduğunuzu
                          hissettirecek bir yönetim şekli ile karşılaşırsınız.
                          Sizin için en iyisini en uygun koşullarda yapmak için
                          çalışırken yönetimi bir bütün olarak görüp diğer
                          destekleyici hizmetleri de çözüm ortaklarımız ile
                          birlikte sizler için sağlamaktayız.
                        </p>
                        <ul>
                          <li>İdari yönetim</li>
                          <li>Sosyal tesis kurulumu ve yönetimi</li>
                          <li>Temizlik hizmetleri</li>
                          <li>Peyzaj hizmetleri</li>
                          <li>İlaçlama ve pest kontrol hizmetleri</li>
                          <li>Havuz Bakım ve İşletim Hizmetleri</li>
                          <li>Güvenlik hizmetleri</li>
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

export default YonetimHizmetleri;
