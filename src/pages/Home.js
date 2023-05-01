import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src="Home.jpg"
          alt="banner1"
          style={{ width: "100%", height: "90vh" }}
        />
        <div
          style={{
            position: "absolute",
            top: "48%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            color: "#ffffff",
            textShadow: "1px 1px 2px #000000",
            fontSize: "4vw",
            fontWeight: "bold",
          }}
        >
          GrahakBhandar
        </div>

        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "31%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            color: "#ffffff",
            textShadow: "1px 1px 2px #000000",
            fontSize: "1.8vw",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          This is an Inventory and Sales Management
        </div>
        <div
          style={{
            position: "absolute",
            top: "68%",
            left: "28%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            color: "#ffffff",
            textShadow: "1px 1px 2px #000000",
            fontSize: "1.8vw",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          website for grahakbhandar. This tool
        </div>
        <div
          style={{
            position: "absolute",
            top: "76%",
            left: "28.5%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            color: "#ffffff",
            textShadow: "1px 1px 2px #000000",
            fontSize: "1.8vw",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          manages the record of daily sales and
        </div>
        <div
          style={{
            position: "absolute",
            top: "84%",
            left: "31%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            color: "#ffffff",
            textShadow: "1px 1px 2px #000000",
            fontSize: "1.8vw",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          purchases. As well as we can add and delete
        </div>
        <div
          style={{
            position: "absolute",
            top: "92%",
            left: "21%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            color: "#ffffff",
            textShadow: "1px 1px 2px #000000",
            fontSize: "1.8vw",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          items from records.
        </div>
        <div
          style={{
            position: "absolute",
            top: "22%",
            left: "31.5%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src="Logo.png"
            style={{
              borderRadius: "2vw",
              width: "18vw",
              height: "auto",
              maxWidth: "90%",
            }}
          />
        </div>
      </div>
      <footer className="footer-09">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading d-flex ml-2">About</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <MdLocationPin className="mt-0.5 mr-1" />
                    <span className="text ">
                      Shaskiya Tantraniketan Vidyarthi Sahakari Bhandar Ltd.,
                    </span>
                  </li>
                  <li>
                    <span className="ml-3">C/o.Govt Polytechnic, Nashik.</span>
                  </li>
                  <li>
                    <BsTelephoneFill className="mt-0.5 mr-1" />
                    <span className="text">+0253 2461221</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading d-flex">Design & Developed By</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="text ">Mayur Sudhakar Deore</span>
                  </li>
                  <li>
                    <span className="text">Ankush Nivrutti Khairnar</span>
                  </li>
                  <li>
                    <span className="text">Prathamesh Suhas Junnare</span>
                  </li>
                  <li>
                    <span className="text">
                      <b>TYCM Students Batch-2020-2023</b>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading d-flex ml-2">Gallery</h2>
              <img src="Group_Photo.jpg"></img>
            </div>
          </div>
          <div className="row mt-5 pt-4 border-top">
            <div className="col-md-6 col-lg-8">
              <div className="copyright">
                Copyright © {new Date().getFullYear()} Government Polytechnic,
                Nashik. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Home;
