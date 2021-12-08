import React, { useState } from 'react'

import PropTypes from 'prop-types'

import styles from './track-progress.module.css'
import Form from './Form'


import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const TrackProgress = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChange = (d) => setCurrentIndex(d)
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['MainComp']}>
        <div className={styles['Text']}>
          <div className={styles['FirstLine']}>
            <span className={styles['text01']}>{props.text}</span>
          </div>
          <div className={styles['SecondLine']}>
            <span className={styles['text02']}>{props.text1}</span>
          </div>
        </div>
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className={styles['image']}
            />
          </div>
          <div className={styles['container03']}>
            <div className={styles['container04']}>
              <span className={styles['text03']}>{props.text2}</span>
            </div>
            <div className={styles['container05']}>
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className={styles['image01']}
              />
            </div>
            <div className={styles['container06']}>
              <span className={styles['text04']}>{props.text3}</span>
            </div>
            <div className={styles['container07']}>
              <img
                alt={props.image_alt4}
                src={props.image_src4}
                className={styles['image02']}
              />
            </div>
            <div className={styles['container08']}>
              <img
                alt={props.image_alt5}
                src={props.image_src5}
                className={styles['image03']}
              />
            </div>
          </div>
          <div className={styles['container09']}>
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className={styles['image04']}
            />
          </div>
        </div>
        <div className={styles['container10']}>
          <div className={styles['container11']}>
            {/* <img
              alt={props.image_alt}
              src={props.image_src}
              className={styles['image05']}
            /> */}
            <Form />
          </div>
        </div>
        <div className={styles['container12']}>
          <span className={styles['text05']}>{props.text4}</span>
        </div>
      </div>
      <div className={styles['MainMobile']}>
        <div className={styles['container13']}>
          <div className={styles['container14']}>
            <span className={styles['text06']}>{props.text5}</span>
          </div>
          <div className={styles['container14']}>
            <span className={styles['text06']}>{props.orAtHome}</span>
          </div>
          <div className={styles['container15']}>
            <span className={styles['text07']}>{props.text6}</span>
          </div>
        </div>
        <div className={styles['container16']}>
          <div className={styles['container17']}>
            <img
              alt={props.image_alt6}
              src={props.image_src6}
              className={styles['image06']}
            />
          </div>
          <div className={styles['container18']}>
            <img
              alt={props.image_alt7}
              src={props.image_src7}
              className={styles['image07']}
            />
          </div>
          <div className={styles['container19']}>
            <span className={styles['text08']}>{props.text7}</span>
          </div>
        </div>
        <Carousel showThumbs={false} showIndicators={false} showArrows={false} showStatus={false} onChange={onChange} className={styles['car']}>
          <div className={styles['container20']}>
            <img
              alt={props.image_alt8}
              src={props.image_src8}
              className={styles['image08']}
            />
          </div>
          <div className={styles['container20']} style={{width: '100%'}}>
            <img
              alt={props.image_alt8}
              src={'/playground_assets/sl_lp.png'}
              className={styles['image08']}
            />
          </div>
        </Carousel>

        <div style={{width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: 20}}>
          <ul className={styles['dots']}>
              <li className={styles['dot']} style={{opacity: currentIndex === 0 ? 1 : 0.15}}></li>
              <li className={styles['dot']} style={{opacity: currentIndex === 1 ? 1 : 0.15}}></li>
            </ul>
        </div>
        <Form className='Form_2_Mobile' />
        <div className={styles['container23']}>
          <span className={styles['text09']}>{props.text8}</span>
        </div>
      </div>
    </div>
  )
}

TrackProgress.defaultProps = {
  image_src: '/playground_assets/1_mobile_email.svg',
  image_alt: 'image',
  image_alt5: 'image',
  image_alt10: 'image',
  text6: 'Track your progress!',
  image_alt4: 'image',
  image_src5: '/playground_assets/4_c_reach.svg',
  image_src8: '/playground_assets/4_c_training_plan-1500w.png',
  image_alt6: 'image',
  image_alt9: 'image',
  image_alt3: 'image',
  image_src3: '/playground_assets/4_c_arrow_left-300h.png',
  image_src7: '/playground_assets/4_m_arrow-1500w.png',
  image_alt2: 'image',
  image_alt8: 'image',
  text2: 'Monitoring progress and daily report',
  text5: 'Workout in the gym',
  orAtHome: 'or at home',
  text1: 'Track your progress!',
  text3: 'Personalized diet plans',
  text: 'Workout in the gym or at home',
  image_src9: '/playground_assets/2_m_dots-1000h.png',
  text8: '© 2021 future. All Rights Reserved',
  image_src1: '/playground_assets/4_c_training_plan-1500w.png',
  image_src4: '/playground_assets/4_c_arrow_right-300h.png',
  image_alt1: 'image',
  image_src10: '/playground_assets/email_entering_mobile.svg',
  text7: 'Monitoring progress and daily report',
  image_alt7: 'image',
  image_src2: '/playground_assets/4_c_nutrition-1500h.png',
  image_src6: '/playground_assets/4_c_other_losse_weight.svg',
  rootClassName: '',
  text4: '© 2021 newbody. All Rights Reserved',
}

TrackProgress.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt5: PropTypes.string,
  image_alt10: PropTypes.string,
  text6: PropTypes.string,
  image_alt4: PropTypes.string,
  image_src5: PropTypes.string,
  image_src8: PropTypes.string,
  image_alt6: PropTypes.string,
  image_alt9: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src3: PropTypes.string,
  image_src7: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt8: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  image_src9: PropTypes.string,
  text8: PropTypes.string,
  image_src1: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src10: PropTypes.string,
  text7: PropTypes.string,
  image_alt7: PropTypes.string,
  image_src2: PropTypes.string,
  image_src6: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
}

export default TrackProgress
