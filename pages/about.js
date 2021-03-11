import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import PageTitleBox from "../components/PageTitleBox/PageTitleBox";
import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
//import OurTeam from "";

const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);

export default function About() {
  return (
    <>
      {/* <PageTitleBox /> */}
      <div className="about-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="noo-sh-title">
                Nosotros<span></span>
              </h2>
              <p>
                "MÁS DE 30 AÑOS COMO LÍDER  DE SERVICIOS GENERALES A EMPRESAS."
              </p>
              <p>
                La calidad de nuestros servicios debidamente certificado, la transparencia de nuestra gestión, el compromiso de permanencia con la sociedad y el respeto al medio ambiente, son las bases sobre las que se asientan las políticas de responsabilidad.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="images/about-img.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Calidad en el servicio</h3>
                <p>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Mas de 30 años de experiencia</h3>
                <p>
                  
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Personal capasitado y certificado</h3>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          {/* <OurTeam /> */}
        </div>
      </div>
    </>
  );
}
