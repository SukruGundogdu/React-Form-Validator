import React from 'react'
import useForm from "./useForm"

const FormSingup = () => {
    const { handleChange, values, handleSubmit } = useForm();



    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Welcome to Clarusway</h1>
                <div className="form-input">
                    <input
                        type="text"
                        name="firstName"
                        className="form-input"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={handleChange}
                        />
                </div>
                <div className="form-input">
                    <input
                        type="text"
                        name="lastName"
                        className="form-input"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={handleChange}
                        />
                </div>
                <div className="form-input">
                    <input
                        type="text"
                        name="email"
                        className="form-input"
                        placeholder="Email Adress"
                        value={values.email}
                        onChange={handleChange}
                        />
                </div>
                <div className="form-input">
                    <input
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        />
                </div>
                <div className="form-input">
                    <input
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="Confirm Password"
                        value={values.password2}
                        onChange={handleChange}
                        />
                </div>
                <div className="form-input">
                    <input
                        type="checkbox"
                        name="checkbox"
                        className="form-input"
                        />
                    <span>I accept the <a href= "https://clarusway.com/about/">Privacy Policy</a></span>
                </div>
                <button className="form-input-btn" type="submit">Register</button>
                <p className="form-input-login">Already have an account?<a href="#">Login</a></p>
            </form>
        </div>
    )
}

export default FormSingup
