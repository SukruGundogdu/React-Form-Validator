import React from 'react'
import useForm from "./useForm"
import validate from "./validateInfo"
import "./Form.css"

const FormSingup = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);



    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit} noValidate>
                <h1>Welcome to Clarusway</h1>
                <div className="form-inputs">
                    <label className='form-label'></label>
                    <input
                        type="text"
                        name="firstName"
                        className="form-input"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={handleChange}
                        />
                        {errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div className="form-inputs">
                    <label className='form-label'></label>
                    <input
                        type="text"
                        name="lastName"
                        className="form-input"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={handleChange}
                        />
                        {errors.lastName && <p>{errors.lastName}</p>}
                </div>
                <div className="form-inputs">
                    <label className='form-label'></label>
                    <input
                        type="text"
                        name="email"
                        className="form-input"
                        placeholder="Email Adress"
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label className='form-label'></label>
                    <input
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label className='form-label'></label>
                    <input
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="Confirm Password"
                        value={values.password2}
                        onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <div className="check-input">
                    <input
                        type="checkbox"
                        name="checkbox"
                        className="check-input"
                        />
                    <span>I accept the <a href= "https://clarusway.com/about/">Privacy Policy</a></span>
                    {errors.checkbox && <p>{errors.checkbox}</p>}
                </div>
                <button className="form-input-btn" type="submit">Register</button>
                <p className="form-input-login">Already have an account?<a href="#">Login</a></p>
            </form>
        </div>
    )
}

export default FormSingup
