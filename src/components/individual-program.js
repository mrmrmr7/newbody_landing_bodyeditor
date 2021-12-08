import React, { useState } from 'react'

import PropTypes from 'prop-types'

import styles from './individual-program.module.css'
import Form from './Form';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const IndividualProgram = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChange = (d) => setCurrentIndex(d)
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['MainMobile']}>
        <div className={styles['Text']}>
          <div className={styles['container01']}>
            <span className={styles['text1']}>{props.text5}</span>
          </div>
          <div className={styles['container02']}>
            <span className={styles['Text2']}>{props.text11}</span>
          </div>
        </div>
        <div className={styles['container13']}>
          <div className={styles['why']}>
            <span className={styles['why_text']}>Why it works for you?</span>
          </div>
        </div>
        <div className={styles['container04']}>
          <Carousel className={styles['Carousel']} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} onChange={onChange}>
            <div style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
              <div className={styles['container05']}>
                <div className={styles['container06']}>
                  <img
                    alt={props.image_alt6}
                    src={props.image_src6}
                    className={styles['image01']}
                  />
                </div>
                <div className={styles['container07']}>
                  <span className={styles['text3']} style={{color: 'rgba(5, 5, 5, 0.7)'}}>Based on expertise of <span className={styles['text3']} style={{color: '#050505', fontFamily: 'Circe-ExtraBold'}}>1047 coaches</span> and <span className={styles['text3']} style={{color: '#050505', fontFamily: 'Circe-ExtraBold'}}>563 workout programs</span></span>
                </div>
              </div>
              <div className={styles['container69']}>
                <img
                  alt={props.image_alt8}
                  src={'/playground_assets/4_sl_1.png'}
                  className={styles['image02']}
                />
              </div>
            </div>

            <div style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
              <div className={styles['container05']}>
                <div className={styles['container06']}>
                  <img
                    alt={props.image_alt6}
                    src={props.image_src2}
                    className={styles['image01']}
                  />
                </div>
                <div className={styles['container07']}>
                  <span className={styles['text3']} style={{color: 'rgba(5, 5, 5, 0.7)'}}>All fitness levels: from <span span style={{color: '#050505', fontFamily: 'Circe-ExtraBold'}}>Beginner</span> to <span span style={{color: '#050505', fontFamily: 'Circe-ExtraBold'}}>Advanced</span></span>
                </div>
              </div>
              <div className={styles['container08']}>
                <img
                  alt={props.image_alt8}
                  src={'/playground_assets/4_sl_2.png'}
                  className={styles['image02']}
                />
              </div>
            </div>

            <div style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
              <div className={styles['container05']}>
                <div className={styles['container06']}>
                  <img
                    alt={props.image_alt6}
                    src={props.image_src3}
                    className={styles['image01']}
                  />
                </div>
                <div className={styles['container07']}>
                  <span className={styles['text3']} style={{color: 'rgba(5, 5, 5, 0.7)'}}><span span style={{color: '#050505', fontFamily: 'Circe-ExtraBold'}}>Revolutionary method</span> based on <span span style={{color: '#050505', fontFamily: 'Circe-ExtraBold'}}>Artificial Intelligence</span></span>
                </div>
              </div>
              <div className={styles['container08']}>
                <img
                  alt={props.image_alt8}
                  src={props.sl3}
                  className={styles['image02']}
                />
              </div>
            </div>

          </Carousel>

          <div style={{width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: 20}}>
            <ul className={styles['dots']}>
                <li className={styles['dot']} style={{opacity: currentIndex === 0 ? 1 : 0.15}}></li>
              <li li className={styles['dot']} style={{opacity: currentIndex === 1 ? 1 : 0.15}}></li>
              <li li className={styles['dot']} style={{opacity: currentIndex === 2 ? 1 : 0.15}}></li>
            </ul>
        </div>
        </div>
        <div className={styles['formLineContainer']}>
          <div className={styles['formContainer']}>
            {/* <img
              alt={props.image_alt}
              src={props.image_src}
              className={styles['image05']}
            /> */}
            <Form className="Form_1_Mobile"/>
          </div>
        </div>
      </div>
      <div className={styles['MainComp']}>
        <div className={styles['container11']}>
          <span className={styles['text4']}>{props.text}</span>
        </div>
        <div className={styles['container12']}>
          <span className={styles['Text5']}>{props.text1}</span>
        </div>
        <div className={styles['container13']}>
          <div className={styles['why']}>
            <span className={styles['why_text']}>Why it works for you?</span>
          </div>
        </div>
        <div className={styles['container14']}>
          <div className={styles['container15']}>
            <div className={styles['container16']}>
              <img
                alt={props.image_alt1}
                src={props.image_src6}
                className={styles['image06']}
              />
            </div>
            <div className={styles['container17']}>
              <span className={styles['text6']} style={{color: 'rgba(5, 5, 5, 0.7)'}}>Based on expertise of <span style={{color: '#050505', fontFamily: 'Circe-ExtraBold'}}>1047 nutritionists</span> and <span style={{color: '#050505', fontFamily: 'Circe-ExtraBold'}}>563 diet programs</span></span>
            </div>
          </div>
          <div className={styles['container18']}>
            <div className={styles['container19']}>
              <img
                alt={props.image_alt2}
                src={props.image_src2}
                className={styles['image07']}
              />
            </div>
            <div className={styles['container20']}>
            <span className={styles['text6']} style={{color: 'rgba(5, 5, 5, 0.7)'}}>All fitness levels: from <span span style={{color: '#050505', fontFamily: 'Circe-ExtraBold'}}>Beginner</span> to <span span style={{color: '#050505', fontFamily: 'Circe-ExtraBold'}}>Advanced</span></span>
            </div>
          </div>
          <div className={styles['container21']}>
            <div className={styles['container22']}>
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className={styles['image08']}
              />
            </div>
            <div className={styles['container23']}>
              <span className={styles['text6']} style={{color: 'rgba(5, 5, 5, 0.7)'}}><span span style={{color: '#050505', fontFamily: 'Circe-ExtraBold'}}>Revolutionary method</span> based on <span span style={{color: '#050505', fontFamily: 'Circe-ExtraBold'}}>Artificial Intelligence</span></span>
            </div>
          </div>
        </div>
        <div className={styles['container24']}>
          <div className={styles['container25']}>
            <img
              alt={props.image_alt5}
              src={props.image_src5}
              className={styles['image09']}
            />
          </div>
          <div className={styles['container26']}>
            <img
              alt={props.image_alt12}
              src={props.image_src12}
              className={styles['image10']}
            />
          </div>
        </div>
        <div className={styles['container27']}>
          <img
            alt={props.image_alt91}
            src={props.image_src91}
            className={styles['image11']}
          />
        </div>
        <div className={styles['formLineContainer']}>
          <div className={styles['formContainer']}>
            {/* <img
              alt={props.image_alt}
              src={props.image_src}
              className={styles['image05']}
            /> */}
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

IndividualProgram.defaultProps = {
  image_alt12: 'image',
  text3: 'Track calories, macros and more',
  image_alt7: 'image',
  image_alt91: 'image',
  image_src9: '/playground_assets/2_m_dots-1500h.png',
  image_src10: '/playground_assets/email_entering_mobile.svg',
  image_src8: '/playground_assets/4_cor.svg',
  image_src5: '/playground_assets/1_comp_main-1500h.png',
  image_alt: 'image',
  image_alt3: 'image',
  image_src3: '/playground_assets/1_comp_light-1500h.svg',
  text2: 'Based on expertise of 1047 nutritionists and 563 diet programs',
  image_src91: '/playground_assets/2_m_dots-1500h.png',
  image_src6: '/playground_assets/1_comp_user-400h.svg',
  rootClassName: '',
  image_alt8: 'image',
  image_src7: '/playground_assets/1_comp_why_it_works1-1400w.png',
  image_alt5: 'image',
  image_src12: '/playground_assets/1_comp_workout-1500h.png',
  text21: 'Based on expertise of 1047 nutritionists and 563 diet programs',
  text4: "Keep track of what you're eating",
  image_src4: '6a72b608-bb0e-4405-803b-eb6d2c5bbb20',
  image_src: '/playground_assets/1_comp_why_it_works1-1400w.png',
  image_alt4: 'image',
  image_src1: '/playground_assets/1_comp_user-400h.png',
  image_alt6: 'image',
  text1: 'workouts, nutrition, sleep',
  image_alt10: 'image',
  text11: 'workouts, nutrition, sleep',
  image_alt9: 'image',
  image_alt1: 'image',
  image_alt2: 'image',
  text5: 'Individual program',
  image_src2: '/playground_assets/1_comp_squares-1500h.svg',
  text: 'Individual program',
  sl3: '/playground_assets/4_sl_3.png'
}

IndividualProgram.propTypes = {
  image_alt12: PropTypes.string,
  text3: PropTypes.string,
  image_alt7: PropTypes.string,
  image_alt91: PropTypes.string,
  image_src9: PropTypes.string,
  image_src10: PropTypes.string,
  image_src8: PropTypes.string,
  image_src5: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src3: PropTypes.string,
  text2: PropTypes.string,
  image_src91: PropTypes.string,
  image_src6: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt8: PropTypes.string,
  image_src7: PropTypes.string,
  image_alt5: PropTypes.string,
  image_src12: PropTypes.string,
  text21: PropTypes.string,
  text4: PropTypes.string,
  image_src4: PropTypes.string,
  image_src: PropTypes.string,
  image_alt4: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt6: PropTypes.string,
  text1: PropTypes.string,
  image_alt10: PropTypes.string,
  text11: PropTypes.string,
  image_alt9: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt2: PropTypes.string,
  text5: PropTypes.string,
  image_src2: PropTypes.string,
  text: PropTypes.string,
}

export default IndividualProgram
