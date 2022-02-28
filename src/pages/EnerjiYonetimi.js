import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function enerjiYonetimi() {
  const listeler = [
    "Yapılardaki tesisatlarda ısı kayıp ve kazançlarının sınırlandırılmasının sağlanması amacıyla ısı yalıtımı çalışmalarının yaptırılması",
    "Projenin fiziki şartlarına göre enerji kaynaklarının yenilenebilir enerji kaynaklarından sağlanıp sağlanamayacağının etüdü",
    "Elektrik tasarrufu için gerekli çalışmaların hazırlanarak değişikliklerin yapılması (tasarruflu ampuller, hareket sensörlü armatürler vb)",
    "Merkezi ısıtma sistemine geçişin, merkezi ısıtma sisteminin olmadığı projelerde yoğuşmalı kombi vb verimli sistemlere geçişin sağlanması.",
  ];

  const listeItems = listeler.map((liste) => <li style={{"marginBottom":"25px"}}>{liste}</li>)

  return (
    <>
      <Header />
      <div className="theme-inner-banner section-spacing">
        <div className="overlay">
          <div className="container">
            <h2>Enerji Yönetimi</h2>
          </div>
        </div>
      </div>

      <div className="service-details section-spacing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="service-content">
                <div className="market-growth" style={{ paddingTop: "0" }}>
                  <div className="wrapper">
                    <div className="row">
                      <div class="col-xl-6 col-md-5 col-12">
                        <img src="images/home/212.jpg" alt="" />
                      </div>
                      <div class="col-xl-6 col-md-5 col-12">
                      <p><b>Daha ekonomik yakıt yönetimi ile doğru tasarruf yöntemlerini
                                            keşfedebilirsiniz.</b>
                                    </p>
                          <ul>
                              {listeItems}
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
