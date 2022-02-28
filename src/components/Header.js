import React from "react";

function Header() {
  return (
      <header className="header-one">
        <div className="top-header">
          <div className="container clearfix">
            <div class="logo float-left">
              <a href="/">
                <img src="images/logo/logo.png" alt="" />
              </a>
            </div>
            <div className="address-wrapper float-right">
              <ul>
                <li className="address">
                  <i
                    className="icon fa fa-phone-square"
                    style={{ top: "4px" }}
                  ></i>
                  <h6>Telefon:</h6>
                  <p>444 06 07</p>
                </li>
                <li className="address">
                  <i className="icon flaticon-multimedia"></i>
                  <h6>E-Posta:</h6>
                  <p>info@e-yonetici.com.tr</p>
                </li>
                <li className="quotes">
                  <a href="tel:4440607">Hemen Arayın</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="theme-menu-wrapper">
          <div className="container">
            <div className="bg-wrapper clearfix">
              <div className="menu-wrapper float-left">
                <nav id="mega-menu-holder" class="clearfix">
                  <ul className="clearfix">
                    <li className="active">
                      <a href="/">Anasayfa</a>
                    </li>
                    <li>
                      <a href="#n">Kurumsal</a>
                      <ul className="dropdown">
                        <li>
                          <a href="hakkimizda">Hakkımızda</a>
                        </li>
                        <li>
                          <a href="yonetim-takimi">Yönetim Takımı</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#n">Hizmetlerimiz</a>
                      <ul className="dropdown">
                        <li>
                          <a href="yonetim-hizmetleri">Yönetim Hizmetleri</a>
                        </li>
                        <li>
                          <a href="enerji-yonetimi">Enerji Danışmanlığı</a>
                        </li>
                        <li>
                          <a href="teknik-isletim-hizmetleri">
                            Teknik İşletim Hizmetleri
                          </a>
                        </li>
                        <li>
                          <a href="concierge-hizmeti">Concierge Hizmeti</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="mevzuat">Mevzuat</a>
                    </li>
                    <li>
                      <a href="referanslarimiz">Referanslarımız</a>
                    </li>
                    <li>
                      <a href="iletisim">İletişim</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="right-widget float-right">
                <ul>
                  <li className="social-icon">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/EYonetici"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/eyonetici/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tr.linkedin.com/company/e-y%C3%B6netici-m%C3%BClk-y%C3%B6netimi-ve-dan%C4%B1%C5%9Fmanl%C4%B1k-hizmetleri"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="cart-icon"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
