import React from 'react'

function About() {
  return (
    <div className="about-compnay section-spacing">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-12">
                <img src="images/home/1.jpg" alt=""/>
            </div>
            <div className="col-lg-6 col-12">
                <div className="text">
                    <div className="theme-title-one">
                        <h2>Hakkımızda</h2>
                        <p>Firmamız bugüne kadar 20.000’in üzerinde konut, alışveriş merkezi ve iş merkezi yönetimini,
                            birçok firmanın proje ve yönetim danışmanlığını üstlenerek kaliteli hizmet anlayışı ile
                            yoluna devam etmektedir.</p>
                        <p>Bugün E-Yönetici; her biri, işinde profesyonel kadrosu, kendi hukuk servisi, prestijli çözüm
                            ortakları ile Ankara, İstanbul, İzmir ve Antalya’da hizmet vermektedir.</p>
                    </div>
                    <ul className="mission-goal clearfix">
                        <li>
                            <a href="vizyonumuz">
                                <i className="icon flaticon-star"></i>
                                <h4>Vizyonumuz</h4>
                            </a>
                        </li>
                        <li>
                            <a href="misyonumuz">
                                <i className="icon flaticon-medal"></i>
                                <h4>Misyonumuz</h4>
                            </a>
                        </li>
                        <li>
                            <a href="ilkelerimiz">
                                <i className="icon flaticon-target"></i>
                                <h4>İlkelerimiz</h4>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default About