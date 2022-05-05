import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sloth from "./images/sloth.jpg";
import table from "./images/table.png";
import color from "./images/color.png";
import merge from "./images/merge.png";
const Page3 = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} className="bg">
            <div className="padding ">
              {" "}
              <p className="pg3para">
                GLOBAL FULLY INTEGRATED EOD – EMBROIDERY ON DEMAND PLATFORM{" "}
                <br /> <br />
                YOUR CUSTOMER’S IMAGE INSTANTLY CONVERTED INTO AM EMBROIDERY DST
                FILE <br />
                <br />
                AUTOMATICALLY CROPPED, SIZED, AND SEW READY FOR THE ITEM
                SELECTED. <br />
                <br />
                EXPORT THE FILE DIRECTLY TO YOUR MACHINE WITH STITCH COUNT &
                BOBIN THREAD COLOR MATCH.
              </p>{" "}
            </div>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <img src={sloth} style={{ width: "100%", marginTop: "70px" }} />{" "}
              </Col>
              <Col md={6}>
                {" "}
                <div class="card mb-3" style={{ maxWidth: "18rem" }}>
                  <div class="card-header bg-transparent ">
                    <p
                      style={{
                        textAlign: "right",
                        fontWeight: "bold",
                        marginBottom: "0px",
                      }}
                    >
                      {" "}
                      Order Details
                    </p>
                  </div>
                  <div class="card-body">
                    <p style={{ fontWeight: "bold", color: "rgb(42 84 147)" }}>
                      Artwork Title :{" "}
                      <span style={{ color: "black" }}>Sloth Tree</span>
                    </p>
                    <p style={{ fontWeight: "bold", color: "rgb(42 84 147)" }}>
                      Reference/PO #:{" "}
                      <span style={{ color: "black" }}>Your Order #</span>
                    </p>{" "}
                    <p style={{ fontWeight: "bold", color: "red" }}>
                      Width : <span style={{ color: "black" }}>2.48 X</span>{" "}
                      Height : <span style={{ color: "black" }}>2.45 in</span>
                    </p>{" "}
                    <p style={{ fontWeight: "bold", color: "rgb(42 84 147)" }}>
                      Remove Background :{" "}
                      <span style={{ color: "black" }}>✅ Yes</span>
                    </p>
                  </div>
                  <div class="card mb-3" style={{ maxWidth: "18rem" }}>
                    <div class="card-body px-3">
                      <img src={sloth} style={{ width: "80px" }} />
                      <div style={{ float: "right" }}>
                        <p style={{ fontWeight: "600", color: "red" }}>Type</p>

                        <p style={{ fontWeight: "600" }}>Twill,Denim/Nylon</p>
                        <p style={{ color: "red", fontWeight: "600" }}>
                          Discription
                        </p>

                        <p style={{ fontWeight: "600" }}>Twill,Denim/Nylon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col md={3}>
                <img src={table} className="mt-3" style={{ width: "100%" }} />
              </Col>
              <Col md={3}>
                {" "}
                <img
                  src={color}
                  className="mt-3"
                  style={{ width: "100%" }}
                />{" "}
              </Col>
              <Col md={3}>
                <div style={{ border: "1px solid gray", padding: "20px" }}>
                  {" "}
                  <img
                    src={merge}
                    style={{
                      width: "75%",
                      textAlign: "center",
                      display: "flex",
                      margin: "auto",
                    }}
                  />{" "}
                </div>
                <p
                  style={{
                    textAlign: "center",
                    color: "gray",
                    fontSize: "10px",
                    fontWeight: "700",
                  }}
                >
                  Uploaded Artwork
                </p>
              </Col>
              <Col md={3}>
                {" "}
                <div
                  style={{
                    border: "1px solid gray",
                    padding: "20px",
                    backgroundColor: "rgba(255,0,255,0.2)",
                  }}
                >
                  {" "}
                  <img
                    src={sloth}
                    style={{
                      width: "75%",
                      textAlign: "center",
                      display: "flex",
                      margin: "auto",
                    }}
                  />{" "}
                </div>
                <p
                  style={{
                    textAlign: "center",
                    color: "gray",
                    fontSize: "10px",
                    fontWeight: "700",
                  }}
                >
                  True View
                </p>{" "}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page3;
