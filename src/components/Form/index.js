import { useState } from 'react';
import './index.css';

const Form = (props) => {
  const [value, setValue] = useState('');

  const formHandler = ({target: {value}}) => {
    setValue(value);
  };


  const validateEmail = () => {
    return !value.match(new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g));
  }

  const open = () => {
    localStorage.setItem('email', JSON.stringify(value));
    document.querySelector('#pop-up').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
  };

  return (
   <>
    <div className={`form ${props.className}`}>
      <input value={value} onChange={formHandler} placeholder="Enter Email"></input>
      <button disabled={validateEmail()} onClick={open}>
        <span className="title">Click here<br/></span>
        <span>and discover your perfect body!</span>
      </button>
    </div>
   </>
  )
}

export default Form;
