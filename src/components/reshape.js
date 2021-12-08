import React from 'react'

import PropTypes from 'prop-types'

import styles from './reshape.module.css'
import Form from './Form'

const Reshape = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['MainComp']}>
        <div className={styles['ReshapeText']}>
          <span className={styles['text']}>{props.text}</span>
        </div>
        <div className={styles['Images']}>
          <div className={styles['MaleExample']}>
            <img
              alt={props.image_alt}
              src={props.image_src}
              className={styles['image']}
            />
          </div>
          <div className={styles['container1']}></div>
          <div className={styles['FemaleExample']}>
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className={styles['image1']}
            />
          </div>
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
      <div className={styles['MainMobile']}>
        <div className={styles['ReshapeTextPlease']}>
          <span className={styles['text1']}>{props.text1}</span>
        </div>
        <div className={styles['MaleExample1']}>
          <img
            alt={props.image_alt3}
            src={props.image_src3}
            className={styles['image3']}
          />
        </div>
        <div className={styles['FemaleExample1']}>
          <img
            alt={props.image_alt11}
            src={props.image_src11}
            className={styles['image4']}
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

Reshape.defaultProps = {
  text1: 'Reshape your body!',
  image_alt: 'image',
  image_alt1: 'image',
  image_src2: '/playground_assets/1_mobile_email.svg',
  image_src11: '/playground_assets/4_%D1%81_beforeafter-1500w.png',
  image_src1: '/playground_assets/4_%D1%81_beforeafter-1500w.png',
  image_src3: '/playground_assets/3_c_male_example-1500w.png',
  image_src4: '/playground_assets/email_entering_mobile.svg',
  image_alt11: 'image',
  image_src: '/playground_assets/3_c_male_example-1500w.png',
  rootClassName: '',
  image_alt4: 'image',
  image_alt3: 'image',
  image_alt2: 'image',
  text: 'Reshape your body!',
}

Reshape.propTypes = {
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_src11: PropTypes.string,
  image_src1: PropTypes.string,
  image_src3: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt11: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt4: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt2: PropTypes.string,
  text: PropTypes.string,
}

export default Reshape
