import React from 'react'

import { Helmet } from 'react-helmet'

import ChangeYourLife from '../components/change-your-life'
import IndividualProgram from '../components/individual-program'
import PopUp from '../components/Popup'
import Reshape from '../components/reshape'
import TrackProgress from '../components/track-progress'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Future</title>
        <meta property="og:title" content="newbody_v1" />
      </Helmet>
      <ChangeYourLife
        image_src2="/playground_assets/1_c_before_after.png"
        rootClassName="rootClassName"
      ></ChangeYourLife>
      <IndividualProgram rootClassName="rootClassName"></IndividualProgram>
      <Reshape rootClassName="rootClassName"></Reshape>
      <TrackProgress rootClassName="rootClassName"></TrackProgress>
      <PopUp />
    </div>
  )
}

export default Home
