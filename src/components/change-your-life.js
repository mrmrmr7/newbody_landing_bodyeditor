import React from "react";

import PropTypes from "prop-types";

import styles from "./change-your-life.module.css";

import Form from "./Form";

const ChangeYourLife = (props) => {
  return (
    <div className={` ${styles["container"]} ${styles[props.rootClassName]} `}>
      <div className={styles["MainComp"]}>
        <div className={styles["TextContainer"]}>
          <div className={styles["TextBlock"]}>
            <div className={styles["ChangeText"]}>
              <span className={styles["text"]}>{props.text}</span>
            </div>
          </div>
          <div className={styles["RevolutionaryMethod"]}>
            <div className={styles["container01"]}>
              <span className={styles["text1"]}>{props.text1}</span>
            </div>
            <div className={styles["container02"]}>
              <img
                alt={props.image_alt2}
                src={props.image_rev_method}
                className={styles["image2"]}
              />
            </div>
          </div>
          <Form className={styles["Form_1"]} />
        </div>
        <div className={styles["ImagesContainer"]}>
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className={styles["image1"]}
          />
        </div>
      </div>
      <div className={styles["MainPhone"]}>
        <div className={styles["container03"]}>
          <span className={styles["text3"]}>{props.text3}</span>
        </div>
        <div className={styles["container04"]}>
          <div className={styles["container05"]}>
            <span className={styles["text4"]}>{props.text4}</span>
          </div>
          <div className={styles["container06"]}>
            <div className={styles["container07"]}>
              <img
                alt={props.image_alt2}
                src={props.image_rev_method}
                className={styles["image2"]}
              />
            </div>
          </div>
        </div>
        <div className={styles["container08"]}>
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className={styles["image2"]}
          />
        </div>
        <Form className={styles["Form_1"]} />
      </div>
    </div>
  );
};

ChangeYourLife.defaultProps = {
  text21: "Revolutionary method!",
  image_alt3: "image",
  text2: "Revolutionary method!",
  image_alt: "image",
  image_alt2: "image",
  image_src2: "0d003089-c10f-45f1-a3fe-4b7054e5155e",
  image_src3: "/playground_assets/email_entering_mobile.svg",
  rootClassName: "",
  text: "Change yourself in the photo and make it a reality",
  image_alt1: "image",
  text1: "with a new",
  text4: "with a new",
  text3: "Change yourself in the photo and make it a reality",
  image_src1: "/playground_assets/1_comp_before_after-1500h.png",
  image_src: "/playground_assets/1_mobile_email.svg",
  image_rev_method: "/playground_assets/rev_method.svg",
};

ChangeYourLife.propTypes = {
  text21: PropTypes.string,
  image_alt3: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  image_src3: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_alt1: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
};

export default ChangeYourLife;
