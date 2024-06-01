import scss from "./Aside.module.scss";
import cash from "../../../assets/Group 11.svg";
import men from "../../../assets/Group 10.svg";
import list1 from "../../../assets/list.svg";
import pro from "../../../assets/Group 8.svg";
import frame from "../../../assets/Frame 42.svg";
export default function Aside() {
  return (
    <div className={scss.aside}>
      <div className="container">
        <div className={scss.card}>
          <div className={scss.box}>
            <img src={cash} alt="" />
            <img src={men} alt="" />
          </div>
          <div className={scss.box1}>
            <img src={list1} alt="" />
            <img src={pro} alt="" />
          </div>
        </div>
        <img className={scss.sylka} src={frame} alt="" />
      </div>
    </div>
  );
}
