import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function YonetimTakimi() {
  return (
    <>
      <Header/>

      <div className="theme-inner-banner section-spacing">
    <div className="overlay">
        <div className="container">
            <h2>Yönetim Takımı</h2>
        </div>
    </div>
</div>

<div className="our-team section-spacing">
    <div className="container">
        <div className="wrapper">
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="team-member">
                        <div className="image-box">
                            <img src="images/team/1.jpg" alt="" />
                        </div>
                        <div className="text">
                            <h6>Neşe Görenekli</h6>
                            <span>Kurucu Müdür</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="team-member">
                        <div className="image-box">
                            <img src="images/team/2.jpg" alt="" />
                        </div>
                        <div className="text">
                            <h6>Süleyman Görenekli</h6>
                            <span>Genel Müdür</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="team-member">
                        <div className="image-box">
                            <img src="images/team/3.jpg" alt="" />
                        </div>
                        <div className="text">
                            <h6>Arcan Görenekli</h6>
                            <span>Ortak</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="team-member">
                        <div className="image-box">
                            <img src="images/team/4.jpg" alt="" />
                        </div>
                        <div className="text">
                            <h6>Oğuz Ayhan</h6>
                            <span>Genel Müdür Yardımcısı</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="team-member">
                        <div className="image-box">
                            <img src="images/team/5.jpg" alt="" />
                        </div>
                        <div className="text">
                            <h6>Mehmet Ozan Görenekli</h6>
                            <span>Teknik Müdür</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="team-member">
                        <div className="image-box">
                            <img src="images/team/6.jpg" alt="" />
                        </div>
                        <div className="text">
                            <h6>Bulut Özenli</h6>
                            <span>Hukuki İşler</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="team-member">
                        <div className="image-box">
                            <img src="images/team/7.jpg" alt="" />
                        </div>
                        <div className="text">
                            <h6>Azade Münevver Erdem</h6>
                            <span>Hukuki İşler</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
      <Footer/>
    </>
  )
}

export default YonetimTakimi