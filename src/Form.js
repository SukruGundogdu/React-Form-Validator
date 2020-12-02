import React, {useState} from 'react'
import FormSingup from './FormSingup'
import FormSuccess from './FormSuccess'
import  "./Form.css"

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
    return (
      <>
        <div className='form-container'>
          <span className='close-btn'>×</span>
          <div className='form-content-left'>
            <img className='form-img' src='img/img-2.svg' alt='spaceship' />
          </div>
          {!isSubmitted ? (
            <FormSingup submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </>
    );
  };
  
  export default Form;