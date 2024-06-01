import scss from "./Layout.module.scss";
import Aside from "./aside/Aside";
import Aside1 from "./aside1/Aside1";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import Header from "./header/Header";

import Section from "./section/Section";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";

const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <Content />
      <Aside />
      <Section />
      <Section1 />
      <Section2 />
      <Aside1 />
      <Footer />
    </div>
  );
};

export default Layout;
