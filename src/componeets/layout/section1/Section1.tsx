import scss from "./Section1.module.scss";
import left from "../../../assets/Vector 8.svg";
import frends from "../../../assets/Group 429.svg";
export default function Section1() {
  return (
    <div className={scss.sect}>
      <div className="container">
        <div className="">
          <div className={scss.more}>
            <div className="">
              <img className={scss.img} src={frends} alt="" />
            </div>
            <div className={scss.text}>
              <h2>MOBILE TRANSACTION</h2>
              <h1>
                Smart Mobile
                <span> Banking</span>
              </h1>
              <p>
                Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                sem adipiscing inw
              </p>
              <button>
                Learn more <img src={left} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
