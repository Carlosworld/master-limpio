import React from "react";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

export default function Footer() {
  return (
    <>
      <InstagramFeed />
      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-widget">
                  <h4>Sobre Master Limpio</h4>
                  <p>
                    Nicolas Bravo 341. centro, Cd. Lázaro Cárdenas, Mich, Mx.
                    <br />
                    Horarios de atención.
                    <br />
                    Lunes a viernes de 7:00am a 8:00pm
                    <br />
                    Sábados de 7:00am a 8:00pm
                    <br />
                    Teléfonos (753) 537 1349 y (753) 168 3407.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fab fa-google-plus"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-rss" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fab fa-pinterest-p"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link">
                  <h4>Últimas Publicaciones</h4>

                  <div class="fb-page" data-href="https://www.facebook.com/limpiezaind" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/limpiezaind" class="fb-xfbml-parse-ignore">
                      <a href="https://www.facebook.com/limpiezaind">Limpieza Total HLVE</a>
                    </blockquote>
                  </div>
                  {/* <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Our Sitemap</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link-contact">
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <p>
                        <i className="fas fa-map-marker-alt"></i>Address:
                        Michael I. Days 3756 <br />
                        Preston Street Wichita,
                        <br /> KS 67213{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-phone-square"></i>Phone:{" "}
                        <a href="tel:+1-888705770">+1-888 705 770</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-envelope"></i>Email:{" "}
                        <a href="mailto:contactinfo@gmail.com">
                          contactinfo@gmail.com
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterCopyright />
    </>
  );
}
