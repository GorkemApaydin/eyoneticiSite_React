import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Hakkimizda() {
  return (
    <>
    <Header />
      <div className="theme-inner-banner section-spacing">
        <div className="overlay">
          <div className="container">
            <h2>Hakkımızda</h2>
          </div>
        </div>
      </div>

      <div className="callout-banner no-bg">
        <div className="container clearfix">
          <h3 className="title">
            Neden <br /> E-Yönetici
          </h3>
          <p>
            Firmamız bugüne kadar 20.000’in üzerinde konut, alışveriş merkezi ve
            iş merkezi yönetimini, birçok firmanın proje ve yönetim
            danışmanlığını üstlenerek kaliteli hizmet anlayışı ile yoluna devam
            etmektedir.
          </p>
          <a href="iletisim" className="theme-button-one">
            Bize Ulaşın
          </a>
        </div>
      </div>

      <div className="about-compnay-two no-bg section-spacing">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 text order-lg-last">
                <div className="theme-title-one">
                  <h2>Biz Kimiz?</h2>
                </div>
                <p>
                  <b>
                    E-Yönetici Profesyonel Proje Yönetimi, 1992 yılından bu yana
                    faaliyet gösteren entegre bir “Tesis Yönetimi” firmasıdır.
                  </b>
                </p>
                <p>
                  Firmamız bugüne kadar 20.000’in üzerinde konut, alışveriş
                  merkezi ve iş merkezi yönetimini, birçok firmanın proje ve
                  yönetim danışmanlığını üstlenerek kaliteli hizmet anlayışı ile
                  yoluna devam etmektedir.
                </p>
                <p>
                  Bugün E-Yönetici; her biri, işinde profesyonel kadrosu, kendi
                  hukuk servisi, prestijli çözüm ortakları ile Ankara, İstanbul,
                  İzmir ve Antalya’da hizmet vermektedir.
                </p>
                <p>
                  <b>"Şeffaflık, Güvenilirlik ve Hukuka Uygunluk"</b>
                </p>
              </div>
              <div className="col-lg-6 col-12 order-lg-first">
                <img src="images/home/15.jpg" alt="" className="left-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="core-values">
        <div className="container">
          <div className="theme-title-one">
            <h2>DEĞERLERİMİZ</h2>
          </div>
          <div className="wrapper">
            <div className="core-value-slider">
              <div className="item">
                <div className="single-value-block">
                  <div className="image-box">
                    <img src="images/home/18.jpg" alt="" />
                    <div className="overlay">
                      <a href="misyonumuz" className="theme-button-one">
                        Görüntüle
                      </a>
                    </div>
                  </div>
                  <div className="text">
                    <h5>
                      <a href="misyonumuz">Misyonumuz</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-value-block">
                  <div className="image-box">
                    <img src="images/home/17.jpg" alt="" />
                    <div className="overlay">
                      <a href="vizyonumuz" className="theme-button-one">
                        Görüntüle
                      </a>
                    </div>
                  </div>
                  <div className="text">
                    <h5>
                      <a href="vizyonumuz">Vizyonumuz</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-value-block">
                  <div className="image-box">
                    <img src="images/home/19.jpg" alt="" />
                    <div className="overlay">
                      <a href="ilkelerimiz" className="theme-button-one">
                        Görüntüle
                      </a>
                    </div>
                  </div>
                  <div className="text">
                    <h5>
                      <a href="ilkelerimiz">İlkelerimiz</a>
                    </h5>
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

export default Hakkimizda;
