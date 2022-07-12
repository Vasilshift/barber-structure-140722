//import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
//import { Parallax } from "react-parallax";

const LookbookContent = ({ spaceBottomClass }) => {
  return (
    <div
      className={`lookbook-wrapper ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div
        // bgImage={
        //   process.env.PUBLIC_URL +
        //   "/assets/images/backgrounds/bg-parallax-1.jpg"
        // }
        // bgImageAlt="image"
        // strength={500}
      >
        <div className="single-lookbook-section">
          <Container>
            <Row>
              <Col xl={6} lg={7}>
                <div className="lookbook-content-wrapper d-flex flex-column justify-content-center">
                  <div className="lookbook-content text-center">
                    {/*<p className="tag">#Салоны на карте</p>*/}
                    <h2 className="lookbook-title-my-mainpage">Find best specialist</h2>
                    <h3 className="lookbook-title">Select convinient time for you</h3>
                    {/*<Link*/}
                    {/*  href="/shop/fullwidth-left-sidebar"*/}
                    {/*  as={process.env.PUBLIC_URL + "/shop/fullwidth-left-sidebar"}*/}
                    {/*>*/}
                    {/*  <a className="lezada-button lezada-button--medium lookbook-btn">*/}
                    {/*    List Shops*/}
                    {/*  </a>*/}
                    {/*</Link>*/}
                    {/*<Link*/}
                    {/*    href="/shop/fullwidth-left-sidebar"*/}
                    {/*    as={process.env.PUBLIC_URL + "/shop/fullwidth-left-sidebar"}*/}
                    {/*>*/}
                    {/*  <a className="lezada-button lezada-button--medium lookbook-btn">*/}
                    {/*    Shops on the map*/}
                    {/*  </a>*/}
                    {/*</Link>*/}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>




    </div>
  );
};

export default LookbookContent;
