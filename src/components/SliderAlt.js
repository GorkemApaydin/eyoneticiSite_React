import React from "react";

function SliderAlt() {
  return (
    <div className="top-feature section-spacing">
      <div className="top-features-slide">
        <div className="item">
          <div className="main-content" style={{ background: "#fafafa" }}>
            <img src="images/icon/1.png" alt="" />
            <h4>Profesyonel Çözüm</h4>
            <p>
              Alanında uzman ekibimizle ihtiyaçlarınıza yönelik çözümler
              sunuyoruz.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="main-content" style={{ background: "#f6f6f6" }}>
            <img src="images/icon/2.png" alt="" />
            <h4>Şeffaf Yönetim</h4>
            <p>
              Tüm yönetim süreciniz şeffaf ve hukuka uygun olarak yapılmaktadır.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="main-content" style={{ background: "#efefef" }}>
            <img src="images/icon/3.png" alt="" />
            <h4>Yüksek Memnuniyet</h4>
            <p>Hizmet verilen tüm müşterilerimizde yüksek memnuniyet oranı.</p>
          </div>
        </div>
        <div className="item">
          <div className="main-content" style={{ background: "#e9e9e9" }}>
            <img src="images/icon/4.png" alt="" />
            <h4>Kurumsal Hizmet</h4>
            <p>Tüm müşterilerimize hizmetlerimizi kurumsal olarak sunuyoruz.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderAlt;
