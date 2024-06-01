import scss from "./Aside1.module.scss";
import frends from "../../../assets/Group 430.svg";
export default function Aside1() {
  return (
    <div className={scss.sect}>
      <div className="container">
        <div className="">
          <div className={scss.more}>
            <div className={scss.text}>
              <h1>
                What Our
                <span> Customer</span> Are saying
              </h1>
              <p>
                Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                sem lacus a, interdum nulla sem adipiscing inw
              </p>
            </div>
            <div className="">
              <img className={scss.img} src={frends} alt="" />
            </div>
          </div>
          <div className={scss.list}>
            <h1>
              What Are You <span>Waiting For ?</span>
            </h1>
            <button>Try Blinqpay</button>
          </div>
        </div>
      </div>
    </div>
  );
}
