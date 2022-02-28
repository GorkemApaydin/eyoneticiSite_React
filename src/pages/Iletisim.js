import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Iletisim() {
  return (
    <>

    <Header/>
      <div className="theme-inner-banner section-spacing">
        <div className="overlay">
          <div className="container">
            <h2>İletişim</h2>
          </div>
        </div>
      </div>

      <div className="contact-us-section section-spacing">
        <div className="container">
          <div className="clearfix main-content no-gutters row">
            <div className="col-lg-5 col-12">
              <div className="img-box"></div>
            </div>
            <div className="col-lg-7 col-12">
              <div className="form-wrapper">
                <form
                  action="#"
                  className="theme-form-one form-validation"
                  autocomplete="off"
                >
                  <div className="row">
                    <div className="col-sm-6 col-12">
                      <input
                        type="text"
                        placeholder="Ad - Soyad *"
                        name="name"
                        required
                      />
                    </div>
                    <div className="col-sm-6 col-12">
                      <input
                        type="text"
                        placeholder="Telefon *"
                        name="phone"
                        required
                      />
                    </div>
                    <div className="col-sm-6 col-12">
                      <input
                        type="email"
                        placeholder="E-posta *"
                        name="email"
                        required
                      />
                    </div>
                    <div className="col-sm-6 col-12">
                      <input
                        type="text"
                        placeholder="Konu *"
                        name="subject"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        placeholder="Mesaj *"
                        name="message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button className="theme-button-one">Gönder</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="alert-wrapper" id="alert-success">
          <div id="success">
            <button className="closeAlert">
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <div className="wrapper">
              <p>Mesajınız başarıyla iletildi.</p>
            </div>
          </div>
        </div>
        <div className="alert-wrapper" id="alert-error">
          <div id="error">
            <button className="closeAlert">
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <div className="wrapper">
              <p>Mesajınız iletilemedi.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="branch-address">
        <div className="container">
          <div className="row">
            <div className="address-slider">
              <div className="item">
                <div className="wrapper">
                  <h6>Ankara Merkez</h6>
                  <p>
                    <i className="fa fa-address-book-o" aria-hidden="true"></i>{" "}
                    Atatürk Bulvarı Bulvar Palas C Blok 141/124 Kat 3 06640
                    Bakanlıklar Ankara
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <h6>Ankara Bayi</h6>
                  <p>
                    <i className="fa fa-address-book-o" aria-hidden="true"></i>{" "}
                    Yıldızevler Mah. Turan Güneş Bulvarı Yıldız Pasajı No:28/B
                    Giriş Daire No:1 Çankaya / Ankara
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <h6>İstanbul Ofisi</h6>
                  <p>
                    <i className="fa fa-address-book-o" aria-hidden="true"></i>{" "}
                    Tantavi Mah. Estergon Caddesi No:24 F Blok Kat: 3 No:51 PK:
                    34764 Ümraniye / İstanbul
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <h6>Antalya Bayi</h6>
                  <p>
                    <i className="fa fa-address-book-o" aria-hidden="true"></i>{" "}
                    Altınkum Mahallesi, Atatürk Bulvarı 07070 No:142 <br /> İç
                    Kapı: 1 Konyaaltı / Antalya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Iletisim;
