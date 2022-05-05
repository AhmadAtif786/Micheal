import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dog1 from "./images/dog1.png";
const Page1 = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={4}>
                <img src={dog1} style={{ width: "100%" }} />
                <p className="pg1text">BEFORE</p>
              </Col>
              <Col md={4}>
                {" "}
                <img src={dog1} style={{ width: "100%" }} />
                <p className="pg1text">AFTER</p>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <img src={dog1} style={{ width: "100%" }} />
                <p className="pg1text">BEFORE</p>
              </Col>
              <Col md={4}>
                {" "}
                <img src={dog1} style={{ width: "100%" }} />
                <p className="pg1text">AFTER</p>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <img src={dog1} style={{ width: "100%" }} />
                <p className="pg1text">BEFORE</p>
              </Col>
              <Col md={4}>
                {" "}
                <img src={dog1} style={{ width: "100%" }} />
                <p className="pg1text">AFTER</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <h2 className="pg1heading mt-5">
              We Convert The Simplest To The Most Complex Logo, Design, Or Image
              Into An Embroidery DST File Instantly!
            </h2>
            <p className="pg1text1 mt-5">
              Our proprietary algorithm is an evolution in the Embroidery
              Industry. The AI Platform converting your files will continue to
              get better and smarter the more it is used. Instant DST is
              transforming how embroidery is digitized.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page1;
