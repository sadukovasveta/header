import scss from "./Content.module.scss";
import laptop from "../../../assets/image 7.svg";
import monitor from "../../../assets/image 6.svg";
import left from "../../../assets/Vector 8.svg";

export default function Content() {
  return (
    <div className={scss.content}>
      <div className="container">
        <div className={scss.text}>
          <p>Get Your Payment Faster</p>
          <h1>
            Blinqpay helps businesses in Africa get paid by anyone, anywhere in
            the world
          </h1>
          <button>Start Now</button>
        </div>
        <div className={scss.photo}>
          <img className={scss.monitor} src={monitor} alt="monitor" />
          <img className={scss.laptop} src={laptop} alt="laptop" />
        </div>
        <div className={scss.more}>
          <h1>
            Make & Share <span>Payments</span> With Community
          </h1>
          <p>
            Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
            adipiscing inw
          </p>
          <button>
            Learn more <img src={left} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
