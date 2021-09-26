import "./Main.css";
import imageTransform from "../../images/desktop/image-transform.jpg";
import imageStandOut from "../../images/desktop/image-stand-out.jpg";
import imageGraphic from "../../images/desktop/image-graphic-design.jpg";
import imagePhotographic from "../../images/desktop/image-photography.jpg";

const Main = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-content order-2 order-md-1">
          <h1>Transform your brand</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
            deleniti eaque eum fuga id impedit itaque modi natus obcaecati odit
            optio provident quidem quos sequi sint sunt suscipit unde,
            voluptatum?
          </p>
          <button>Learn more</button>
        </div>
        <div className="main-content-img order-1 order-md-2">
          <img src={imageTransform} className="egg-image" alt="" />
        </div>

        <div className="main-content-img order-3">
          <img src={imageStandOut} className="glass-image" alt="" />
        </div>

        <div className="main-content order-4">
          <h1>Stand out to the right audience</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
            deleniti eaque eum fuga id impedit itaque modi natus obcaecati odit
            optio provident quidem quos sequi sint sunt suscipit unde,
            voluptatum?
          </p>
          <button>Learn more</button>
        </div>
      </div>

      <div className="gra-pho">
        <div className="graphic-design">
          <img src={imageGraphic} alt="" />
          <div className="gra-content text-center d-flex justify-content-center flex-column">
            <h1>Graphic design</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              blanditiis est facere nostrum quibusdam repellendus veniam
              voluptate.
            </p>
          </div>
        </div>
        <div className="photography">
          <img src={imagePhotographic} alt="" />
          <div className="pho-content text-center d-flex justify-content-center flex-column">
            <h1>Photographic</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              blanditiis est facere nostrum quibusdam repellendus veniam
              voluptate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
