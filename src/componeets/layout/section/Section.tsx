import scss from "./Section.module.scss";
import left from "../../../assets/Vector 8.svg";
import tablet from "../../../assets/image 14.svg";

export default function Section() {
  return (
    <div className={scss.sect}>
      <div className="container">
        <div className="">
          <div className={scss.more}>
            <div className={scss.text}>
              <h2>CREDIT CARD</h2>
              <h1>
                Payment
                <span> Gets Easier</span>
              </h1>
              <p>
                Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                sem adipiscing inw
              </p>
              <button>
                Learn more <img src={left} alt="" />
              </button>
            </div>
            <div className="">
              <img className={scss.img} src={tablet} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
