import React from "react";

export default function HeroSlider() {
  return (
    <div id="slides-shop" className="cover-slides">
      <ul className="slides-container">
        <li className="text-left">
          <img src="images/banner-01.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    Servicios De Limpieza  <br />
                  </strong>
                </h1>
                <p className="m-b-40">
                  Residencial, Comercial e Industrial. {" "}
                  <br />
                </p>
                <p>
                  <a className="btn hvr-hover" href="/our-services">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-center">
          <img src="images/banner-02.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    Limpieza De Vidrios  <br /> En Altura
                  </strong>
                </h1>
                <p className="m-b-40">
                  {" "}
                  <br />
                </p>
                <p>
                  <a className="btn hvr-hover" href="/our-services">
                    servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-right">
          <img src="images/banner-03.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    Fumigación De Espacios<br />
                  </strong>
                </h1>
                <p className="m-b-40">
                  Mantén Un Ambiente Libre De Plagas.{" "}
                  <br />
                </p>
                <p>
                  <a className="btn hvr-hover" href="#">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="slides-navigation">
        <a href="#" className="next">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <a href="#" className="prev">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
