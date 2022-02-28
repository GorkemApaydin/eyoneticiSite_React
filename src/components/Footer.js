import React from "react";

function Footer() {
  return (
    <footer className="theme-footer-one">
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <p>
                {" "}
                E-Yönetici Profesyonel Proje Yönetimi &copy; Tüm Hakları
                Saklıdır.
              </p>
            </div>
            <div class="col-md-6 col-12">
              <ul>
                <li>
                  <a href="#n">Gizlilik Politikası</a>
                </li>
                <li>
                  <a href="#n">Aydınlatma Metni</a>
                </li>
                <li>
                  <a href="#n">Çerez Politikası</a>
                </li>
                <li>
                  <a href="#n">KVKK</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button className="scroll-top tran3s">
        <i className="fa fa-angle-up" aria-hidden="true"></i>
      </button>
      <div id="fb-root"></div>
    </footer>
  );
}

export default Footer;
