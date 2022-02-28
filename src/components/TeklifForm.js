import React from 'react'

function TeklifForm() {
  return (
<div className="consultation-form section-spacing">
    <div className="container">
        <div className="theme-title-one">
            <h2>Bize Ulaşın</h2>
        </div>
        <div className="clearfix main-content no-gutters row">
            <div className="col-xl-6 col-lg-5 col-12">
                <div className="img-box"></div>
            </div>
            <div className="col-xl-6 col-lg-7 col-12">
                <div className="form-wrapper">
                    <form action="#n" className="theme-form-one">
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" placeholder="Ad - Soyad *" required />
                            </div>
                            <div className="col-md-6">
                                <input type="text" placeholder="Telefon *" required />
                            </div>
                            <div className="col-md-6">
                                <input type="email" placeholder="E-posta *" required />
                            </div>
                            <div className="col-md-6">
                                <input type="email" placeholder="Konu *" required />
                            </div>
                            <div className="col-12">
                                <textarea placeholder="Mesajınız *" required></textarea>
                            </div>
                        </div>
                        <button className="theme-button-one">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>  )
}

export default TeklifForm