//import { Fragment } from "react";
//import Lookbook from "../../pages/home/lookbook";
//import { HeaderFour } from "../Header";
//import { FooterTwo } from "../Footer";
import { Container, Row, Col } from "react-bootstrap";
//import Link from "next/link";
import './App.css';
import {Parallax} from "react-parallax";

const LayoutFour = ( ) => {
  return (
    <div className={"lookbook-content-wrapper"}>
      <Parallax
          bgImage={
              process.env.PUBLIC_URL +
              "/assets/images/backgrounds/bg-parallax-1.jpg"
          }
          bgImageAlt="image"
          strength={500}
      >
        <div className="single-lookbook-section">
          <Container>
            <Row>
              <Col xl={6} lg={7}>
                <div className="lookbook-content-wrapper d-flex flex-column justify-content-center">
                  <div className="lookbook-content text-center">
                    <p className="tag mytag">#NEW #COLLECTION #MEN</p>
                    <h2 className="lookbook-title">Spring Favorites</h2>
                    <a
                        href="/shop/left-sidebar"
                        as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                    >
                      {/*<a className="lezada-button lezada-button--medium lookbook-btn">*/}
                      {/*  shop now*/}
                      {/*</a>*/}
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>

      <Parallax
          bgImage={
              process.env.PUBLIC_URL +
              "/assets/images/backgrounds/bg-parallax-2.jpg"
          }
          bgImageAlt="image"
          strength={500}
      >
        <div className="single-lookbook-section">
          <Container>
            <Row>
              <Col md={8} lg={7} className="ml-auto">
                <div className="lookbook-content-wrapper d-flex flex-column justify-content-center">
                  {/*<div className="lookbook-content lookbook-content--dark text-center">*/}
                  {/*  <p className="tag mytag">#BEACHWEAR #SUMMER</p>*/}
                  {/*  <h2 className="lookbook-title">Beachwear</h2>*/}
                  {/*  /!*<Link*!/*/}
                  {/*  /!*    href="/shop/left-sidebar"*!/*/}
                  {/*  /!*    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}*!/*/}
                  {/*  /!*>*!/*/}
                  {/*  /!*  <a className="lezada-button lezada-button--medium lookbook-btn">*!/*/}
                  {/*  /!*    shop now*!/*/}
                  {/*  /!*  </a>*!/*/}
                  {/*  /!*</Link>*!/*/}
                  {/*</div>*/}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>


    </div>


  );
};

export default LayoutFour;

