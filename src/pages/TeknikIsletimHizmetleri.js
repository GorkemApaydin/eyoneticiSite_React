import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function TeknikIsletimHizmetleri() {
  return (
    <>
      <Header />
      <div className="theme-inner-banner section-spacing">
        <div className="overlay">
          <div className="container">
            <h2>Teknik İşletim Hizmetleri</h2>
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
                            E- Yönetici bütçenizi en doğru şekilde
                            değerlendirmenize, daha hesaplı ve kârlı yatırımlar
                            yapmanıza yardımcı olur.
                          </b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            Teknik Danışmanlık, Proje Yönetimi, Test ve Devreye
                            Alma, İşletme Hizmetleri
                          </li>
                          <li>Devir teslim sürecinin yönetilmesi</li>
                          <li>
                            İşletmede kurulan mevcut sistemlerin test ve devreye
                            alınması sistem dokümanlarının arşivlenmesi.
                          </li>
                          <li>
                            E-sistem yazılımımız üzerinden bilgisayar destekli
                            bakım sisteminin kurulması
                          </li>
                          <li>
                            Teknik bakım hizmetleri (elektrik, mekanik, inşaat
                            vb.) acil arıza takibi ve koruyucu periyodik bakım
                            garanti takibi
                          </li>
                          <li>
                            Planlı bakım sisteminin kurulması ve uygulanması,
                            sözleşme yönetimi (bakım anlaşmalarının
                            hazırlanması, takibi ve uygulanması)
                          </li>
                          <li>Sarf malzeme temini ve yönetimi</li>
                          <li>
                            Teknik işletme kadrosunun kurulması, değişen piyasa
                            koşullarına göre personel eğitimlerinin
                            güncellenmesi
                          </li>
                          <li>Tatbikatlar ve eğitimler</li>
                          <li>Enerji yönetim programlarının hazırlanması</li>
                          <li>Enerji kimlik belgesi çıkarılması</li>
                          <li>
                            Enerji verimliliği etütleri ve verimlilik arttırıcı
                            projeler (VAP) hazırlanması (Enerji Verimliliği
                            Kanunu gereği)
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            Termal kamera ölçüm ve kontrol hizmetleri (binada
                            bulunan tüm elektrik panolarının kestirimci bakımı)
                          </li>
                          <li>Bina dış kabuğu ısı yalıtım kaçak tespiti</li>
                          <li>Isı geçirgenlik ölçümleri (U Ölçümü)</li>
                          <li>Enerji analizör ölçümleri</li>
                          <li>
                            Aydınlık seviye ölçümleri (İSG ölçümleri gereği)
                          </li>
                          <li>Baca gazı analiz ölçümleri</li>
                          <li>Enerji verimliliği ölçümleri</li>
                          <li>Ultrasonik debimetre ölçümleri</li>
                          <li>Kiracı fit-out işlemleri</li>
                          <li>
                            Bina ve ekipman sigorta poliçelerinin uygun şekilde
                            hazırlanması
                          </li>
                          <li>
                            Yıllık bütçelerin hazırlanması, takibi ve
                            raporlanması
                          </li>
                          <li>
                            Tüketimleri aylık ve yıllık bazda raporlanması
                          </li>
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

export default TeknikIsletimHizmetleri;
