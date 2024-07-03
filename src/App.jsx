import {
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitchFill,
  RiTwitterFill,
} from "@remixicon/react";
import "./App.css";
import Header from "./Header/Header";
import Card from "./card/Card";

function App() {
  return (
    <>
      <div className="Main_Container">
        <div className="top_blue">
          <div style={{ display: "flex", gap: "30px" }}>
            <div
              style={{ color: "white", display: "flex", alignItems: "center" }}
            >
              <img src="../src/assets/vector4.svg" alt="" height={18} />
              <span>
                <code>(+1) 3344 999 999</code>
              </span>
            </div>
            <div
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                fontSize: 12,
              }}
            >
              <img src="../src/assets/vector2.svg" alt="" height={18} />
              <span>info@reacttheme.com</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <span style={{ color: "white" }}>
              <RiFacebookFill size={16} />
            </span>
            <span style={{ color: "white" }}>
              <RiTwitterFill size={16} />
            </span>
            <span style={{ color: "white" }}>
              <RiLinkedinFill size={16} />
            </span>
          </div>
        </div>
        <Header />
        <div className="slider_container">
          <img
            src="../src/assets/1.ddb463a076b58bbe0ea3.jpg"
            alt=""
            style={{
              height: "-webkit-fill-available",
              width: "-webkit-fill-available",
            }}
          />
        </div>
        <div className="Academics">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              lineHeight: 1,
            }}
          >
            <span style={{ fontSize: 48, fontWeight: 700, color: "#00306E" }}>
              Academics
            </span>
            <span>
              <img src="../src/assets/underLine.png" alt="" />
            </span>
          </div>
          <div className="card_container">
            <Card
              img="../src\assets\1.045ce5893b04f4bde993.png"
              title="lets Talk Science"
            />
            <Card
              img="../src\assets\2.ec9d013b7d4f44fa4112.png"
              title="Innovative Course"
            />
            <Card
              img="../src\assets\3.0cf44447da5e6fb16e49.png"
              title="Cloud Storage"
            />
            <Card
              img="../src\assets\4.3d31b426e478a4d304b8.png"
              title="Online Education"
            />
          </div>
        </div>
        <div className="Third_div">
          <div className="image_display">
            <img
              src="../src\assets\ab.fcda2469b98ffc37a148.png"
              alt=""
             style={{height: '-webkit-fill-available', width: '-webkit-fill-available'}}
            />
            <img
              className="moving_img"
              src="../src\assets\badge.ae149076478c64c7b217.png"
              alt=""
            />
          </div>
          <div className="about">
            <h1 style={{ color: "#00306E" }}>Welcome to</h1>
            <h1 style={{ width: "70%", color: "#D2093C" }}>
              Echooling LMS Platform
            </h1>
            <p style={{ fontSize: 20, marginTop: 10 }}>
              Education is both the act of teaching knowledge to others
              <br /> and
              <br />
              the act of receiving knowledge from someone else.
            </p>
            <p style={{ margin: "30px 0" }}>
              Have question?{" "}
              <a
                href="#"
                style={{
                  color: "#D2093C !important",
                  textDecoration: "underline",
                }}
              >
                <b>Get Free Guide</b>
              </a>
            </p>
            <hr />
            <p style={{ margin: "40px 0" }}>
              Education also refers to the knowledge received through schooling
              <br /> instruction <br />
              and to the institution of teaching as a whole. The main purpose of
              <br /> education <br />
              is the integral development of a person.
            </p>
            <div style={{ width: "100%", display: 'flex', alignItems: 'center', gap: 20, marginBottom: 100 }}>
              <a href="#" className="read_button">
                Read more <img src="../src/assets/vector.svg" alt="" />
              </a>

              <img src="../src/assets/sms.png" alt="" />
              <p>
              <span>Get Support</span>
              <br />
              <span>support@react.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="Campus_life"></div>
      </div>
    </>
  );
}

export default App;
