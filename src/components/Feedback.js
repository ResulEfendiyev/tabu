import React from "react";
import "./Feedback.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Feedback() {
  return (
    <div className="feedback__container">
      <h2 className="feedback__heading">Bəzi istifadəçilərin bildirdiyi rəylər</h2>
      <Carousel showThumbs={false} autoPlay className="feedback__carousel">
        <div className="feedback__carousel--item">
          <p className="feedback__text">
            Ana dilimizdə belə gözəl oyunların sayı çox olsun. Uğurlar.
          </p>
        </div>
        <div className="feedback__carousel--item">
          <p className="feedback__text">
            Azərbaycanda bu istiqamətdə görülən işlərin içərisində təqdirəlayiq
            işdir.
          </p>
        </div>
        <div className="feedback__carousel--item">
          <p className="feedback__text">
            Açığı çox bəyəndim, təşəkkürlər ana dilimizdə də bu oyunu
            düzəltdiyiniz üçün. Amma təbii bəzi əskikliklər var yeni hazırlanıb
            :) zamanla daha da yaxşı olacağına inanıram
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default Feedback;
