import scss from "./Footer.module.scss";
import logo from "../../../assets/Logo.svg";
import logotip from "../../../assets/Group 29.png";
import teg from "../../../assets/Group 30.png";
const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.global}>
          <div className={scss.logo}>
            <img style={{ marginTop: "-90px" }} src={logo} alt="" />
            <img src={logotip} alt="" />
            <img src={teg} alt="" />
          </div>
          <div className={scss.logo}>
            <h1>Services</h1>
            <p>Design</p>
            <p>Coding</p>
            <p>Development</p>
            <p>Marketing</p>
            <p>Digital Marketing</p>
            <p>Product Design</p>
          </div>
          <div className={scss.logo}>
            <h1>Services</h1>
            <p>Design</p>
            <p>Coding</p>
            <p>Development</p>
            <p>Marketing</p>
            <p>Digital Marketing</p>
            <p>Product Design</p>
          </div>
          <div className={scss.logo}>
            <h1>Services</h1>
            <p>Design</p>
            <p>Coding</p>
            <p>Development</p>
            <p>Marketing</p>
            <p>Digital Marketing</p>
            <p>Product Design</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
