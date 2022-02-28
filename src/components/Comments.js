import React from "react";

function Comments() {
  return (
    <div className="testimonial-section section-spacing">
      <div className="overlay">
        <div className="container">
          <div className="wrapper">
            <div className="bg">
              <div className="testimonial-slider">
                <div className="item">
                  <p>
                    “ Sitemizin yapılan çalışmalar ile bugünkü yemyeşil hale
                    getirilmesinde payı bulunan başta, büyük bir özveri ile
                    çalışan halihazırda bu çalışmalarına devam eden site
                    görevlileri olmak üzere her bir kişiyi kutluyorum. ”
                  </p>
                  <div className="name">
                    <h6>R.Özlem İnan</h6>
                  </div>
                </div>
                <div className="item">
                  <p>
                    “ E-Yönetici firmasıyla çalışmadan önce sitemizdeki yönetim
                    oldukça sıkıntılıydı. Ancak şu an tüm sorunlarımız hızlı bir
                    şekilde çözülmüş durumda. Tüm bu hizmetler için çok teşekkür
                    ederiz. ”
                  </p>
                  <div className="name">
                    <h6>Necati Yılmaz</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
