import React from "react";
import styles from "./Hero.module.css";
import { FaFacebookF, FaGithub, FaLinkedinIn,  } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>What's up Doc?</p>
            <h3 className={styles.text_2}>Nattawat Kaeng-in</h3>
            <p className={styles.text_3}>
              <span>I am a </span>
              <TypeAnimation
                sequence={[
                  "full-stack",
                  1000,
                  "Web developer.",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
              With great power comes great responsibility
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <div className={styles.hero_image}></div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;