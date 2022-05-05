import React from "react";
import one from "./images/1.jpg";
import two from "./images/2.jpg";
import three from "./images/3.jpg";
import four from "./images/4.jpg";
const Page2 = () => {
  return (
    <div>
      <h2 className="pg1heading mt-5" style={{ textAlign: "center" }}>
        TRANSFORMING THE EMBROIDERY INDUSTRY
        <br /> ONE FILE AT A TIME
      </h2>
      <div class="team-grid">
        <div class="container">
          <div class="row people d-flex justify-content-center">
            <div class="col-md-4 col-lg-3 item">
              <div
                class="box"
                style={{
                  backgroundImage: `url(${one})`,
                }}
              >
                <div class="cover">
                  <h3 class="name">TECHNOLOGY</h3>
                  <p class="title">
                    A transformational platform disrupting the Embroidery
                    Industry. Our proprietary platform manages both customer and
                    backend operations providing a scalable eCommerce solution.
                    Our patent pending algorythim converts massive order intake
                    conversions. All relavent data is visible to our customers
                    via API integration with a live web portal feeding instant
                    information.
                  </p>
                  <div class="social">
                    <a href="#">
                      <i class="fa fa-facebook-official"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 item">
              <div
                class="box"
                style={{
                  backgroundImage: `url(${two})`,
                }}
              >
                <div class="cover">
                  <h3 class="name">INNOVATION</h3>
                  <p class="title">
                    Instant DST (IDST) is creating a new Industry category, EOD
                    - Embroidery On Demand. IDST provides the ability for large
                    scale decorators to manage Direct To Garment Embroidery one
                    design at a time. Innovative, integrated, automated
                    embroidery digitization.{" "}
                  </p>
                  <div class="social">
                    <a href="#">
                      <i class="fa fa-facebook-official"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 item">
              <div
                class="box"
                style={{
                  backgroundImage: `url(${three})`,
                }}
              >
                <div class="cover">
                  <h3 class="name">EXPERIENCE</h3>
                  <p class="title">
                    Over 25 years of industry experience providing the highest
                    level of service to a variety of customers. Understanding
                    the requirements to execute effeciently in a timely manner.
                    IDST has the experience necessary to execute on our
                    services.
                  </p>
                  <div class="social">
                    <a href="#">
                      <i class="fa fa-facebook-official"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 item">
              <div
                class="box"
                style={{
                  backgroundImage: `url(${four})`,
                }}
              >
                <div class="cover">
                  <h3 class="name">PARTNERSHIP</h3>
                  <p class="title">
                    The relationship Instant DST has with its clients is a true
                    partnership. Taking the time to fully understand the
                    individual needs and requirements of our clients creates a
                    true partnership enviornment. We are firm believers one size
                    does not fit all.
                  </p>
                  <div class="social">
                    <a href="#">
                      <i class="fa fa-facebook-official"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
