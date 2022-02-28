import React from "react";

function SliderSign() {
  const styleInputKK = {
    borderRadius: "3px",
    border: "0px",
    paddingTop: "17px",
    paddingBottom: "17px",
    width: "200px",
    marginRight: "10px",
    paddingLeft: "10px",
    marginTop: "20px",
  };

  const styleInputSifre = {
    borderRadius: "3px",
    border: "0px",
    paddingTop: "17px",
    paddingBottom: "17px",
    borderRadius: "3px",
    border: "0px",
    marginTop: "20px",
    width: "200px",
    marginRight: "10px",
    paddingLeft: "10px",
  };

  const styleButton = {
    background: "white",
    border: "0",
    color: "#5a1d94",
    fontFamily: "Source Sans Pro",
    fontWeight: "bold",
    fontSize: "18px",
    paddingTop: "17px",
    paddingBottom: "17px",
    marginTop: "-5px",
    marginRight: "10px",
    width: "107px",
  };

  const styleUnuttum = {
    marginTop: "10px",
    marginBottom: "-7px",
  };


  return (
    <div
      style={{
        textAlign: "center",
        paddingBottom: "20px",
        background: "#5a1d94",
        color: "white",
      }}
    >
        <input type="text" placeholder="Kullanıcı Kodu" style={styleInputKK} />
        <input type="password" placeholder="Şifre" style={styleInputSifre} />
        <input
          type="submit"
          className="btn btn-primary"
          value="Giriş Yap"
          style={styleButton}
        />
        <p style={styleUnuttum}>
          <a href="#n" style={{ color: "white" }}>
            Kullanıcı Kodumu/Şifremi Unuttum
          </a>
        </p>
    </div>
  );
}

export default SliderSign;
