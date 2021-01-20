import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./css/carousel.css";

function Carousel({ data }) {
  return (
    <div className="container carousel-wrapper">
      <h3 className="carousel-product-heading">{data.heading}</h3>
      <CarouselProvider
        className="carousel"
        visibleSlides={
          window.innerWidth > 992
            ? 5
            : window.innerWidth > 768
            ? 4
            : window.innerWidth > 576
            ? 2
            : 1
        }
        step={
          window.innerWidth > 992
            ? 5
            : window.innerWidth > 768
            ? 4
            : window.innerWidth > 576
            ? 2
            : 1
        }
        naturalSlideWidth={125}
        naturalSlideHeight={130}
        totalSlides={data.products.length}
        infinite
      >
        <Slider>
          {data.products.map((product, i) => (
            <Slide index={i} key={i}>
              <div className="product-wrapper">
                <p>{product.username}</p>
                <img src="icons/phone.jpg" alt="phone" />
                <p>{product.heading}</p>
                <p>Rs. {product.price}</p>
              </div>
            </Slide>
          ))}
        </Slider>
        <ButtonBack className="button-back button">
          <img src="icons/previous.svg" alt="previous" />
        </ButtonBack>
        <ButtonNext className="button-next button">
          <img src="icons/right-arrow.svg" alt="right-arrow" />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}

export default Carousel;
