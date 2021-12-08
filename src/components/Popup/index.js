import { useEffect, useState } from 'react';
import Form from '../Form';
import styles from './index.module.css';


const PopUp = (props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    document.querySelector('#pop-up').style.display = 'none';
  },[])

  const formHandler = ({target: {value}}) => setValue(value);

  const sendAndClose = () => {
    fetch('https://skilled-boulder-331612.appspot.com/api/landingstats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      },
      body: JSON.stringify({
        email:JSON.parse(localStorage.getItem('email')),
        name: value,
        landingName: '3_newbody_v1'
      })
    }).then((res) => {
      document.querySelector('#pop-up').style.display = 'none';
      document.querySelector('body').style.overflow = 'scroll';
      setValue('');
      localStorage.clear();
    })
  }

  return (
    <div id="pop-up" className={styles['container']}>
      <div className={styles['inner']}>
        <div className={styles['popup']}>
          <button onClick={sendAndClose} className={styles['button']}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.94323 0.742123C1.61128 0.410178 1.07309 0.410178 0.741147 0.742123C0.409201 1.07407 0.409201 1.61226 0.741147 1.9442L5.79733 7.00039L0.741892 12.0558C0.409946 12.3878 0.409946 12.926 0.741892 13.2579C1.07384 13.5899 1.61203 13.5899 1.94397 13.2579L6.99941 8.20247L12.0549 13.2579C12.3868 13.5899 12.925 13.5899 13.2569 13.2579C13.5889 12.926 13.5889 12.3878 13.2569 12.0558L8.2015 7.00039L13.2577 1.9442C13.5896 1.61226 13.5896 1.07407 13.2577 0.742123C12.9257 0.410178 12.3875 0.410178 12.0556 0.742123L6.99941 5.79831L1.94323 0.742123Z" fill="#F7F7F7"/>
          </svg>

          </button>
            <div className={styles['title']}>
              <div className={styles['title_text']}>Thank you for signing up!</div>
              <div className={styles['title_second']}>You will get free access. We still are<br/>finetuning the App</div>
            </div>
            <div className={styles['desc_wrapper']}>
              <div className={styles['form']}>
                <input value={value} onChange={formHandler} placeholder="Your Name"></input>
                <button onClick={sendAndClose}>
                  Submit
                </button>
              </div>
            <span className={styles['text1']}>We will inform you as soon as we are live!</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PopUp;
