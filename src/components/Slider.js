import React from "react";

function Slider() {
  return (
    <div id="theme-main-banner" className="banner-one">
      <div data-src="images/home/slide-2.jpg">
        <div className="camera_caption">
          <div className="container">
            <p className="wow fadeInUp animated">Yılların Tecrübesiyle</p>
            <h1 className="wow fadeInUp animated" data-wow-delay="0.2s">
              TESİS YÖNETİMİNDE
              <br />
              YENİLİKÇİ ÇÖZÜMLER
            </h1>
            <a
              href="iletisim"
              className="theme-button-one wow fadeInUp animated"
              data-wow-delay="0.39s"
            >
              Hemen Ulaşın
            </a>
          </div>
        </div>
      </div>
      <div data-src="images/home/slide-1.jpg">
        <div className="camera_caption">
          <div className="container">
            <p className="wow fadeInUp animated">
              E-Yönetici'nin Uzman Kadrosuyla
            </p>
            <h1 className="wow fadeInUp animated" data-wow-delay="0.2s">
              BİNANIZI UZMANLAR
              <br />
              YÖNETSİN!
            </h1>
            <a
              href="iletisim"
              className="theme-button-one wow fadeInUp animated"
              data-wow-delay="0.39s"
            >
              Hemen Ulaşın
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
